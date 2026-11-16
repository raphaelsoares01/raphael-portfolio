"use client";

import { useEffect, useState } from "react";

const INTRO_SESSION_KEY = "portfolio-intro-seen-v2";

export default function IntroVideo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_SESSION_KEY)) {
      return;
    }

    const showIntro = window.setTimeout(() => {
      sessionStorage.setItem(INTRO_SESSION_KEY, "true");
      setIsVisible(true);
    }, 0);

    return () => window.clearTimeout(showIntro);
  }, []);

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
      <source src="/videos/intro-portfolio2.mp4" type="video/mp4" />
    </video>
  );
}