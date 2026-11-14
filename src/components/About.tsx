"use client";

import { motion } from "motion/react";
import { useSitePreferences } from "@/app/SitePreferences";

export default function About() {
  const { language } = useSitePreferences();
  const isPortuguese = language === "pt";
  return (
    <section id="about" className="flex min-h-screen items-center justify-center px-6 py-24 sm:px-10">
      <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-[minmax(220px,0.8fr)_1.2fr] md:gap-20">
        <div className="relative -mx-6 w-[calc(100%+3rem)] sm:-mx-10 sm:w-[calc(100%+5rem)] md:left-[min(calc((72rem_-_100vw)/2),_-2.5rem)] md:mx-0 md:w-[min(40vw,30rem)] lg:w-[min(48vw,36rem)] 2xl:w-[min(72vw,52rem)]">
          <img
            src={isPortuguese ? "/images/aboutme-picture-ptbr.png" : "/images/aboutme-picture.png"}
            alt={
              isPortuguese
                ? "Retrato de Raphael Soares Casado com informações sobre sua localização e atuação como desenvolvedor full-stack"
                : "Portrait of Raphael Soares Casado with information about his location and work as a full-stack developer"
            }
            className="block h-auto w-full"
          />
        </div>

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-5 flex items-center gap-5 text-xs font-bold uppercase tracking-[0.3em] text-primary sm:text-sm">
            <span>{isPortuguese ? "Sobre mim" : "About me"}</span>
            <span className="h-px w-24 bg-primary/45 sm:w-40" aria-hidden="true" />
          </div>
          <h1 className="mb-7 text-5xl font-bold leading-none tracking-tight text-slate-950 sm:text-6xl">
            Hey, I&apos;m <span className="text-primary">Raphael.</span>
          </h1>

          <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
            <p>
              {isPortuguese
                ? "Sou Raphael Soares Casado, estudante de Engenharia da Computação e desenvolvedor focado em criar soluções práticas e bem estruturadas. Gosto de entender como as coisas funcionam, resolver problemas com código e aprender novas tecnologias."
                : "I'm Raphael Soares Casado — a Computer Engineering student and developer with a strong focus on building practical, well-structured solutions. I enjoy understanding how things work under the hood, solving problems through code, and constantly pushing myself to learn new technologies."}
            </p>

            <p>
              {isPortuguese
                ? "Movido por curiosidade e aprendizado autodidata, gosto de enfrentar problemas desafiadores e transformar ideias em software confiável. Atualmente, foco em crescer como desenvolvedor full-stack e fortalecer minha base em engenharia de software."
                : "Driven by curiosity and self-learning, I thrive on challenging problems and turning ideas into reliable, thoughtful software. I'm currently focused on growing as a full-stack developer while building a strong foundation in software engineering."}
            </p>
          </div>

          <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
            <a
              href="#contact"
              className="group relative flex h-16 items-center gap-3 overflow-hidden rounded-full border border-white/80 bg-white/35 px-4 shadow-[0_10px_28px_rgba(65,149,244,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1"
              aria-label={isPortuguese ? "Ir para contato" : "Go to contact"}
            >
              <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/60 shadow-sm">
                <img
                  src="/images/simple_icons/message-simple-icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-5 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </span>
              <span className="relative z-10 text-sm font-semibold leading-tight text-slate-700">
                {isPortuguese ? "Contato" : "Contact"}
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/raphaelsoarescasado"
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-16 items-center gap-3 overflow-hidden rounded-full border border-white/80 bg-white/35 px-4 shadow-[0_10px_28px_rgba(65,149,244,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1"
              aria-label="Open Raphael's LinkedIn profile"
            >
              <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/60 shadow-sm">
                <img
                  src="/images/simple_icons/linkedin-simple-icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-5 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </span>
              <span className="relative z-10 text-sm font-semibold text-slate-700">LinkedIn</span>
            </a>

            <a
              href="https://github.com/raphaelsoares01"
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-16 items-center gap-3 overflow-hidden rounded-full border border-white/80 bg-white/35 px-4 shadow-[0_10px_28px_rgba(65,149,244,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1"
              aria-label="Open Raphael's GitHub profile"
            >
              <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/60 shadow-sm">
                <img
                  src="/images/simple_icons/github-simple-icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="size-5 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </span>
              <span className="relative z-10 text-sm font-semibold text-slate-700">GitHub</span>
            </a>
          </div>

          <a
            href="/documents/CURRICULO_RAPHAEL_SOARES_CASADO.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Open resume PDF"
            className="group mt-8 inline-flex items-center gap-3 text-base font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:text-slate-900"
          >
            {isPortuguese ? "Currículo" : "Resume"}
            <span aria-hidden="true" className="text-2xl leading-none text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-900">
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}