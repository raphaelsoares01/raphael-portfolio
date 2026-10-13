"use client";

import { useEffect, useState } from "react";
import { useSitePreferences } from "@/app/SitePreferences";

export default function Hero() {
  const { language, setLanguage, bubblesEnabled, setBubblesEnabled } = useSitePreferences();
  const isPortuguese = language === "pt";
  const [isAtHeroTop, setIsAtHeroTop] = useState(true);

  useEffect(() => {
    const updateHeroTopState = () => setIsAtHeroTop(window.scrollY < 32);

    updateHeroTopState();
    window.addEventListener("scroll", updateHeroTopState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeroTopState);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className={`absolute left-3 top-20 z-40 flex flex-col items-start gap-1 transition-[opacity,transform] duration-300 sm:left-12 sm:top-24 ${isAtHeroTop ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}>
        <div className="flex items-start gap-1 sm:gap-2">
        <div className="flex flex-col items-center gap-0">
        <p className="font-space text-[9px] font-semibold uppercase leading-none tracking-[0.2em] text-slate-500/80">
          {isPortuguese ? "Idioma" : "Language"}
        </p>
        <div className="relative aspect-[1792/1024] w-32 transition duration-300 hover:scale-[1.03] sm:w-36">
          <img src="/images/liquid-container-eng-port.png" alt="" aria-hidden="true" className="absolute inset-0 size-full object-contain" />
          <div className="pointer-events-auto absolute inset-0 z-10 flex items-center gap-1 px-[18%] sm:gap-2">
            <button type="button" onClick={() => setLanguage("en")} aria-pressed={!isPortuguese} aria-label="Switch site language to English" className="group flex h-full flex-1 cursor-pointer items-center justify-center">
              <span className={`rounded-full px-2 py-1 text-[9px] font-bold tracking-[0.1em] transition-all duration-300 group-hover:bg-white/60 sm:text-[10px] ${!isPortuguese ? "text-primary drop-shadow-[0_0_5px_rgba(65,149,244,0.35)]" : "text-slate-500/80 group-hover:text-slate-800"}`}>ENG</span>
            </button>
            <button type="button" onClick={() => setLanguage("pt")} aria-pressed={isPortuguese} aria-label="Mudar idioma do site para português" className="group flex h-full flex-1 cursor-pointer items-center justify-center">
              <span className={`rounded-full px-2 py-1 text-[9px] font-bold tracking-[0.1em] transition-all duration-300 group-hover:bg-white/60 sm:text-[10px] ${isPortuguese ? "text-primary drop-shadow-[0_0_5px_rgba(65,149,244,0.35)]" : "text-slate-500/80 group-hover:text-slate-800"}`}>PT</span>
            </button>
          </div>
        </div>
        </div>
        <div className="flex flex-col items-center gap-0">
        <p className="font-space text-[9px] font-semibold uppercase leading-none tracking-[0.2em] text-slate-500/80">
          {isPortuguese ? "Bolhas" : "Bubbles"}
        </p>
        <div className="relative aspect-[1792/1024] w-32 transition duration-300 hover:scale-[1.03] sm:w-36">
          <img src="/images/liquid-container-eng-port.png" alt="" aria-hidden="true" className="absolute inset-0 size-full object-contain" />
          <div className="pointer-events-auto absolute inset-0 z-10 flex items-center gap-1 px-[18%] sm:gap-2">
            <button type="button" onClick={() => setBubblesEnabled(true)} aria-pressed={bubblesEnabled} aria-label="Enable floating bubbles" className="group flex h-full flex-1 cursor-pointer items-center justify-center">
              <span className={`rounded-full px-2 py-1 text-[9px] font-bold tracking-[0.1em] transition-all duration-300 group-hover:bg-white/60 sm:text-[10px] ${bubblesEnabled ? "text-emerald-600 drop-shadow-[0_0_5px_rgba(52,211,153,0.35)]" : "text-slate-500/80 group-hover:text-slate-800"}`}>ON</span>
            </button>
            <button type="button" onClick={() => setBubblesEnabled(false)} aria-pressed={!bubblesEnabled} aria-label="Disable floating bubbles" className="group flex h-full flex-1 cursor-pointer items-center justify-center">
              <span className={`rounded-full px-2 py-1 text-[9px] font-bold tracking-[0.1em] transition-all duration-300 group-hover:bg-white/60 sm:text-[10px] ${!bubblesEnabled ? "text-primary drop-shadow-[0_0_5px_rgba(65,149,244,0.35)]" : "text-slate-500/80 group-hover:text-slate-800"}`}>OFF</span>
            </button>
          </div>
        </div>
        </div>
        </div>
      </div>
      <div className="group relative z-10 translate-y-8 sm:translate-y-12">

      {/* < */}
      <img
        src="/images/left-arrow.png"
        alt=""
        className="absolute left-[-8vw] top-1/2 h-auto w-[80vw] max-w-[1050px] -translate-y-1/2 scale-[1.5] transition-transform duration-500 ease-out group-hover:-translate-x-30"
      />

      {/* > */}
      <img
        src="/images/right-arrow.png"
        alt=""
        className="absolute right-[-8vw] top-1/2 h-auto w-[80vw] max-w-[1050px] -translate-y-1/2 scale-[1.5] transition-transform duration-500 ease-out group-hover:translate-x-30"
      />

      {/* Keep the English title as the fixed layout reference for the images. */}
      <div aria-hidden="true" className="invisible text-center">
        <h1 className="font-space text-6xl md:text-[130px] font-semibold">
          SOFTWARE
        </h1>

        <h1 className="font-space text-6xl md:text-[130px] font-semibold">
          ENGINEER
        </h1>
      </div>

      {/* Título */}
      <div className="absolute left-1/2 top-0 z-10 w-screen -translate-x-1/2 text-center">
        <h1 className="font-space whitespace-nowrap text-6xl md:text-[130px] font-semibold">
          {isPortuguese ? "ENGENHEIRO DE" : "SOFTWARE"}
        </h1>

        <h1 className="font-space whitespace-nowrap text-6xl md:text-[130px] font-semibold">
          {isPortuguese ? "SOFTWARE" : "ENGINEER"}
        </h1>
      </div>

    </div>
    </section>
  );
}

      {/*
      <img
        src="/images/hero-background.png"
        alt=""
        className="absolute w-[95%] h-auto opacity-60"
      />
      */}