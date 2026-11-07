"use client";

import { KeyboardEvent } from "react";
import { motion } from "motion/react";
import { useSitePreferences } from "@/app/SitePreferences";

type Certificate = {
  title: string;
  date: string;
  issuer: string;
  image: string;
  url?: string;
  technologies: string[];
};

const certificates: Certificate[] = [
  {
    title: "Responsive Web Design",
    date: "02 Sep, 2026",
    issuer: "freeCodeCamp",
    image: "/images/certificates/responsive-web-design-certificate.png",
    url: "https://www.freecodecamp.org/certification/raphael_soares/responsive-web-design-v9",
    technologies: ["HTML", "CSS", "Accessibility"],
  },
  {
    title: "COBRIC",
    date: "11 Nov, 2026",
    issuer: "Congresso Brasileiro de Iniciação Científica",
    image: "/images/certificates/certificado-cobric.jpg",
    url: "/images/certificates/certificado-autor.pdf",
    technologies: ["Flutter", "IoT", "Embedded system"],
  },
];

export default function Certificates() {
  const { language } = useSitePreferences();
  const isPortuguese = language === "pt";

  const openCertificate = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, url?: string) => {
    if (url && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openCertificate(url);
    }
  };

  return (
    <section id="credentials" className="flex min-h-screen flex-col items-center justify-center px-6 py-20 sm:px-10">
      <motion.h1
        className="font-space mb-12 w-full max-w-[1200px] text-left text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        {isPortuguese ? "Certificados" : "Credentials"}
        <span className="mt-3 block h-1 w-20 rounded-full bg-yellow-500" />
      </motion.h1>

      <motion.div
        className="grid w-full max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[repeat(2,384px)] lg:gap-x-40"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
      >
        {certificates.map((certificate) => {
          const certificateLink = certificate.url ?? certificate.image;

          return (
            <div
              key={certificate.title}
              tabIndex={0}
              role="link"
              aria-label={isPortuguese ? `Certificado de ${certificate.title}` : `${certificate.title} certificate`}
              onClick={() => openCertificate(certificateLink)}
              onKeyDown={(event) => handleCardKeyDown(event, certificateLink)}
              className="group relative w-full cursor-pointer overflow-hidden rounded-[1.35rem] [perspective:1200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:w-[calc(100%+8rem)]"
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
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
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
                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                        {isPortuguese ? "Certificado" : "Certificate"}
                      </p>
                      <h2 className="font-space max-w-[18rem] text-2xl font-bold tracking-tight sm:text-3xl">
                        {certificate.title}
                      </h2>
                      <p className="mt-3 text-sm text-slate-500">{certificate.date}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {certificate.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-end justify-between gap-4 text-sm">
                      <span className="text-slate-500">{certificate.issuer}</span>
                      <a
                        href={certificateLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:text-slate-900"
                      >
                        {isPortuguese ? "Ver certificado" : "View certificate"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}