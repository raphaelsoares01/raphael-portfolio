"use client";

import { useState } from "react";

export default function IntroVideo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <video
      className="pointer-events-none fixed inset-0 z-[100] size-full object-cover"
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      onEnded={() => setIsVisible(false)}
      onError={() => {
        console.error("Unable to play the portfolio intro video.");
        setIsVisible(false);
      }}
    >
      <source src="/videos/intro-portfolio.mp4" type="video/mp4" />
    </video>
  );
}