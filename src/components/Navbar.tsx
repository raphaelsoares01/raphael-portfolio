"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Credentials", target: "credentials" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map(({ target }) => document.getElementById(target))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-35% 0px -55%", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
          {navItems.map(({ label, target }) => {
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
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}