"use client";

import { motion } from "motion/react";

export default function Certificates() {
  return (
    <section id="credentials" className="flex min-h-screen flex-col items-center justify-center px-6 py-20 sm:px-10">
      <motion.h1
        className="font-space mb-12 w-full max-w-[1200px] text-left text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        Credentials
        <span className="mt-3 block h-1 w-20 rounded-full bg-yellow-500" />
      </motion.h1>

      <motion.div
        className="grid w-full max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
      >
        {/* Responsive Web Design */}
        <div
          tabIndex={0}
          aria-label="Responsive Web Design certificate"
          className="group relative w-full overflow-hidden rounded-[1.35rem] [perspective:1200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:w-[calc(100%+8rem)]"
        >
          <div className="relative aspect-[1578/1008] w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 overflow-hidden rounded-[1.35rem] [backface-visibility:hidden]">
              <img
                src="/images/liquid-container.png"
                alt=""
                aria-hidden="true"
                className="relative z-0 block size-full object-fill opacity-80"
              />
              <img
                src="/images/certificates/responsive-web-design-certificate.png"
                alt="Responsive Web Design certificate"
                className="absolute inset-[10%] z-10 size-[80%] object-contain"
              />
            </div>

            <div className="absolute inset-0 overflow-hidden rounded-[1.35rem] [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <img
                src="/images/liquid-container.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 size-full object-fill opacity-80"
              />
              <div className="absolute inset-[10%] flex flex-col justify-between rounded-[1.35rem] border border-primary/40 bg-white/15 p-6 text-slate-900 backdrop-blur-[2px] sm:p-8">
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Certificate</p>
                  <h2 className="font-space max-w-[18rem] text-2xl font-bold tracking-tight sm:text-3xl">
                    Responsive Web Design
                  </h2>
                  <p className="mt-3 text-sm text-slate-500">02 Sep, 2026</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    HTML
                  </span>
                  <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    CSS
                  </span>
                  <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    Accessibility
                  </span>
                </div>

                <div className="flex items-end justify-between gap-4 text-sm">
                  <span className="text-slate-500">freeCodeCamp</span>
                  <a
                    href="https://www.freecodecamp.org/certification/raphael_soares/responsive-web-design-v9"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:text-slate-900"
                  >
                    View certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}