"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="flex min-h-screen items-center justify-center px-6 py-24 sm:px-10">
      <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-[minmax(220px,0.8fr)_1.2fr] md:gap-20">
        <div className="relative mx-auto aspect-[1085/1452] w-full max-w-[18rem] sm:max-w-[22rem]">
          <img
            src="/images/profile.png"
            alt="Portrait of Raphael Soares Casado"
            className="absolute inset-x-[7%] bottom-[5%] top-[7%] z-10 h-[88%] w-[86%] rounded-[2rem] object-cover"
          />
          <img
            src="/images/large-liquid-container.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-0 h-full w-full object-fill opacity-80"
          />
        </div>

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            About me
          </p>
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Hey!
          </h1>

          <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
            <p>
              I&apos;m Raphael Soares Casado — a Computer Engineering student and
              developer with a strong focus on building practical, well-structured
              solutions. I enjoy understanding how things work under the hood,
              solving problems through code, and constantly pushing myself to learn
              new technologies.
            </p>

            <p>
              Driven by curiosity and self-learning, I thrive on challenging
              problems and turning ideas into reliable, thoughtful software.
              I&apos;m currently focused on growing as a full-stack developer
              while building a strong foundation in software engineering.
            </p>
          </div>

          <a
            href="file:///C:/Users/Professor/Desktop/CURRICULO_RAPHAEL_SOARES_CASADO.pdf"
            target="_blank"
            rel="noreferrer"
            download
            aria-label="Download resume PDF"
            className="group mt-8 inline-flex items-center gap-3 text-base font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:text-slate-900"
          >
            Resume
            <span
              aria-hidden="true"
              className="size-5 bg-primary transition-[background-color,transform] duration-300 group-hover:translate-y-0.5 group-hover:bg-slate-900 [mask-image:url('/images/download-icon.png')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}