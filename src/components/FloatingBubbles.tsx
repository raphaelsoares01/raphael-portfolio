"use client";

import { useEffect, useRef, useState } from "react";

type BubbleState = {
  id: number;
  src: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  spin: number;
};

type DragState = {
  id: number;
  offsetX: number;
  offsetY: number;
  lastX: number;
  lastY: number;
  lastTime: number;
};

const bubbleSources = [
  "/images/bubble1.png",
  "/images/bubble2.png",
  "/images/bubble3.png",
];

const bubbleSizes = [128, 154, 116, 142, 174, 124, 136, 160, 118];
const horizontalAnchors = [0.04, 0.92, 0.12, 0.72, 0.15, 0.9, 0.52, 0.08, 0.68];
const verticalAnchors = [0.03, 0.19, 0.3, 0.41, 0.53, 0.64, 0.75, 0.86, 0.98];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), Math.max(min, max));

function createBubbles(width: number, height: number): BubbleState[] {
  return bubbleSizes.map((size, index) => ({
    id: index,
    src: bubbleSources[index % bubbleSources.length],
    x: clamp(width * horizontalAnchors[index] - size / 2, 0, width - size),
    y: clamp(height * verticalAnchors[index] - size / 2, 0, height - size),
    vx: index % 2 === 0 ? 8 : -7,
    vy: index % 3 === 0 ? 5 : -3,
    size,
    rotation: index * 11,
    spin: index % 2 === 0 ? 5 : -4,
  }));
}

export default function FloatingBubbles() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<BubbleState[]>([]);
  const dragRef = useRef<DragState | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [bubbles, setBubbles] = useState<BubbleState[]>([]);

  useEffect(() => {
    const field = fieldRef.current;

    if (!field) {
      return;
    }

    const measureField = () => {
      const width = field.clientWidth;
      const height = field.clientHeight;

      if (!width || !height) {
        return;
      }

      if (!bubblesRef.current.length) {
        bubblesRef.current = createBubbles(width, height);
      } else {
        bubblesRef.current = bubblesRef.current.map((bubble) => ({
          ...bubble,
          x: clamp(bubble.x, 0, width - bubble.size),
          y: clamp(bubble.y, 0, height - bubble.size),
        }));
      }

      setBubbles(bubblesRef.current.map((bubble) => ({ ...bubble })));
    };

    const resolveCollisions = (width: number, height: number) => {
      const currentBubbles = bubblesRef.current;

      currentBubbles.forEach((bubble) => {
        bubble.x = clamp(bubble.x, 0, width - bubble.size);
        bubble.y = clamp(bubble.y, 0, height - bubble.size);

        if (bubble.x === 0 || bubble.x === width - bubble.size) {
          bubble.vx *= -0.72;
        }

        if (bubble.y === 0 || bubble.y === height - bubble.size) {
          bubble.vy *= -0.72;
          if (Math.abs(bubble.vy) < 18) {
            bubble.vy = 0;
          }
        }
      });

      for (let firstIndex = 0; firstIndex < currentBubbles.length; firstIndex += 1) {
        for (
          let secondIndex = firstIndex + 1;
          secondIndex < currentBubbles.length;
          secondIndex += 1
        ) {
          const first = currentBubbles[firstIndex];
          const second = currentBubbles[secondIndex];
          const firstCenterX = first.x + first.size / 2;
          const firstCenterY = first.y + first.size / 2;
          const secondCenterX = second.x + second.size / 2;
          const secondCenterY = second.y + second.size / 2;
          const deltaX = secondCenterX - firstCenterX;
          const deltaY = secondCenterY - firstCenterY;
          const distance = Math.hypot(deltaX, deltaY) || 0.001;
          const minimumDistance = (first.size + second.size) / 2;

          if (distance >= minimumDistance) {
            continue;
          }

          const normalX = deltaX / distance;
          const normalY = deltaY / distance;
          const overlap = minimumDistance - distance;
          const relativeVelocity =
            (second.vx - first.vx) * normalX + (second.vy - first.vy) * normalY;

          first.x -= normalX * overlap * 0.5;
          first.y -= normalY * overlap * 0.5;
          second.x += normalX * overlap * 0.5;
          second.y += normalY * overlap * 0.5;

          if (relativeVelocity < 0) {
            const impulse = relativeVelocity * 0.58;
            first.vx += normalX * impulse;
            first.vy += normalY * impulse;
            second.vx -= normalX * impulse;
            second.vy -= normalY * impulse;
          }
        }
      }
    };

    const animate = (time: number) => {
      const previousTime = Number(field.dataset.lastFrame ?? time);
      const deltaTime = Math.min((time - previousTime) / 1000, 0.032);
      field.dataset.lastFrame = String(time);
      const drag = dragRef.current;

      if (bubblesRef.current.length) {
        const width = field.clientWidth;
        const height = field.clientHeight;

        bubblesRef.current.forEach((bubble) => {
          if (drag?.id === bubble.id) {
            return;
          }

          bubble.vx += Math.sin(time / 1000 * 0.55 + bubble.id) * 5 * deltaTime;
          bubble.vy += Math.cos(time / 1000 * 0.42 + bubble.id * 1.4) * 5 * deltaTime;
          bubble.vx *= Math.pow(0.997, deltaTime * 60);
          bubble.vy *= Math.pow(0.997, deltaTime * 60);
          bubble.x += bubble.vx * deltaTime;
          bubble.y += bubble.vy * deltaTime;
          bubble.rotation += bubble.spin * deltaTime;
        });

        resolveCollisions(width, height);
        setBubbles(bubblesRef.current.map((bubble) => ({ ...bubble })));
      }

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    measureField();
    const resizeObserver = new ResizeObserver(measureField);
    resizeObserver.observe(field);
    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const getPointerPosition = (event: React.PointerEvent) => {
    const field = fieldRef.current;
    if (!field) {
      return { x: 0, y: 0 };
    }

    const bounds = field.getBoundingClientRect();
    return {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
  };

  const handlePointerDown = (event: React.PointerEvent, bubble: BubbleState) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    const pointer = getPointerPosition(event);

    dragRef.current = {
      id: bubble.id,
      offsetX: pointer.x - bubble.x,
      offsetY: pointer.y - bubble.y,
      lastX: pointer.x,
      lastY: pointer.y,
      lastTime: performance.now(),
    };
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    const drag = dragRef.current;
    const field = fieldRef.current;

    if (!drag || !field) {
      return;
    }

    const bubble = bubblesRef.current.find((item) => item.id === drag.id);
    if (!bubble) {
      return;
    }

    const pointer = getPointerPosition(event);
    const now = performance.now();
    const elapsed = Math.max(now - drag.lastTime, 8);
    const width = field.clientWidth;
    const height = field.clientHeight;

    bubble.x = clamp(pointer.x - drag.offsetX, 0, width - bubble.size);
    bubble.y = clamp(pointer.y - drag.offsetY, 0, height - bubble.size);
    bubble.vx = ((pointer.x - drag.lastX) / elapsed) * 1000;
    bubble.vy = ((pointer.y - drag.lastY) / elapsed) * 1000;
    drag.lastX = pointer.x;
    drag.lastY = pointer.y;
    drag.lastTime = now;
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragRef.current = null;
  };

  return (
    <div ref={fieldRef} className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {bubbles.map((bubble) => (
        <img
          key={bubble.id}
          src={bubble.src}
          alt="Bolha interativa"
          draggable={false}
          decoding="async"
          onPointerDown={(event) => handlePointerDown(event, bubble)}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="pointer-events-auto absolute touch-none select-none opacity-70 drop-shadow-[0_12px_18px_rgba(46,126,190,0.18)] will-change-transform"
          style={{
            width: bubble.size,
            height: bubble.size,
            transform: `translate3d(${bubble.x}px, ${bubble.y}px, 0) rotate(${bubble.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}