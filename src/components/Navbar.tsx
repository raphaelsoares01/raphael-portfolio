"use client";

import { useEffect, useState } from "react";
import { useSitePreferences } from "@/app/SitePreferences";

const navItems = [
  { en: "Home", pt: "Início", target: "home" },
  { en: "About", pt: "Sobre", target: "about" },
  { en: "Skills", pt: "Habilidades", target: "skills" },
  { en: "Projects", pt: "Projetos", target: "projects" },
  { en: "Credentials", pt: "Certificados", target: "credentials" },
  { en: "Contact", pt: "Contato", target: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const { language } = useSitePreferences();

  useEffect(() => {
    const sections = navItems
      .map(({ target }) => document.getElementById(target))
      .filter((section): section is HTMLElement => section !== null);
    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      animationFrame = null;
      const referenceLine = Math.min(window.innerHeight * 0.35, 280);
      const currentSection = sections.reduce((activeSection, section) => {
        if (section.getBoundingClientRect().top <= referenceLine) {
          return section;
        }

        return activeSection;
      }, sections[0]);

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    const handleScroll = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6" aria-label="Main navigation">
      <div className="mx-auto flex w-fit max-w-full items-center gap-2 rounded-full border border-white/70 bg-white/35 p-2 shadow-[0_14px_45px_rgba(65,149,244,0.18)] ring-1 ring-white/35 backdrop-blur-2xl backdrop-saturate-150">
        <a
          href="#home"
          aria-label="Go to home"
          className="font-space flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white transition-transform hover:scale-105"
        >
          RS
        </a>

        <div className="flex max-w-[calc(100vw-6rem)] items-center gap-1 overflow-x-auto">
          {navItems.map(({ en, pt, target }) => {
            const isActive = activeSection === target;

            return (
              <a
                key={target}
                href={`#${target}`}
                aria-current={isActive ? "page" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  setActiveSection(target);
                  document.getElementById(target)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  window.history.replaceState(null, "", `#${target}`);
                }}
                className={`font-space whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold tracking-wide transition-colors sm:px-4 sm:text-sm ${
                  isActive
                    ? "bg-primary text-white shadow-[0_5px_15px_rgba(65,149,244,0.3)]"
                    : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                }`}
              >
                {language === "pt" ? pt : en}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}