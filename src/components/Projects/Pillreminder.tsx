"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useSitePreferences } from "@/app/SitePreferences";

export default function Pillreminder() {
    const { language } = useSitePreferences();
    const isPortuguese = language === "pt";
    const imageSectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: imageSectionRef,
        offset: ["start 90%", "start 25%"],
    });
    const detailsOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const imageY = useTransform(scrollYProgress, [0, 1], [140, -80]);

    return (
        <main className="min-h-screen overflow-x-clip px-6 py-8 text-slate-950 sm:px-10 sm:py-10">
            <div className="mx-auto max-w-6xl">
                <Link
                    href="/#projects"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
                >
                    <span className="text-xl leading-none transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true">
                        ←
                    </span>
                    Back
                </Link>

                <motion.section
                    style={{ opacity: detailsOpacity }}
                    className="sticky top-0 z-0 mx-auto flex min-h-[calc(100vh-7rem)] max-w-[560px] flex-col justify-center py-20"
                >
                    <div className="flex flex-wrap items-center gap-4">
                        <h1 className="font-space text-5xl font-bold tracking-tight sm:text-7xl">
                            PillReminder
                        </h1>
                        <a
                            href="https://github.com/raphaelsoares01"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex h-12 items-center gap-3 rounded-full border border-white/80 bg-white/35 px-5 shadow-[0_10px_28px_rgba(65,149,244,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1"
                            aria-label={isPortuguese ? "Abrir PillReminder no GitHub" : "Open PillReminder on GitHub"}
                        >
                            <img
                                src="/images/simple_icons/github-simple-icon.svg"
                                alt=""
                                aria-hidden="true"
                                className="size-5 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className="text-sm font-semibold text-slate-700">GitHub</span>
                        </a>
                    </div>

                    <div className="mt-16 space-y-9">
                        <div>
                            <h2 className="mb-3 font-space text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                {isPortuguese ? "Sobre" : "About"}
                            </h2>
                            <p className="text-base leading-7 text-slate-600">
                                {isPortuguese
                                    ? "O projeto acadêmico PillReminder, foi desenvolvido em prol da participação em um congresso de inciação científica, tendo como principal regra a implementação da técnologia na área da saúde e bem estar"
                                    : "PillReminder is a thoughtful medication management experience designed to make daily routines simpler, clearer, and more reliable."}
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-3 font-space text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                {isPortuguese ? "Descrição" : "Description"}
                            </h2>
                            <p className="text-base leading-7 text-slate-600">
                                {isPortuguese
                                    ? "A proposta executada foi a criação de um dispositivo móvel integrado com um aplicativo, onde ambos se comunicam por meio da IoT (Internet das Coisas) e trabalham em conjunto para auxiliar o usuário a manter sua rotina de medicação em dia"
                                    : "PillReminder is a thoughtful medication management experience designed to make daily routines simpler, clearer, and more reliable."}
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-3 font-space text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                {isPortuguese ? "Como Funciona" : "How It Works"}
                            </h2>
                            <p className="text-base leading-7 text-slate-600">
                                {isPortuguese
                                    ? "Com o dispositivo em mãos, ao abrir o aplicativo, você terá acesso a tela de login e criação de conta, seguindo para a próxima etapa onde é definido alguns outros detalhes como peso, altura, idade e sexo, isso é importante para a personalização da experiência do usuário. Em seguida, será redirecionado para a tela principal do aplicativo, abaixo é possível ver a barra de navegação, que contém as principais funcionalidades, como a tela de \"Perfil\", tela de \"Lembrete\"s, e principalmente a tela de \"Conexão com o Dispositivo\" (quebra de linha + 3 imagens: ) Ao entrar na tela de \"Conexão com o Dispositivo\" você consegue conectar seu dispositivo com o aplicativo por meio de QR Code ou o código, feito a conexão, o dispositivo estará pronto para ser utilizado, e o usuário estará apto a definir os horários de medicação seguindo para a tela de \"Lembretes\". (quebra de linha 1 imagem), Note que é possível definir 3 compartimentos para medicação (A, B e C) que correspondem com os compartimentos do dispositivo (quebra de linha). Quando disparado o alarme, o usuário recebe uma notificação no celular, o dispositivo emite um som e acende a luz do compartimento correspondente, indicando qual a medicação a ser tomada (quebra de linha). No visor é exibido uma mensagem de alerta, e quando não está em alerta o mesmo exibe a hora atual e quanto tempo falta para o próximo alarme (quebra de linha + imagem: pillbox_alpha_image). Para confirmar que a medicação foi tomada, deve-se apertar o botão do compartimento correspondente ou confirmar no aplicativo, em caso do usuário não confirmar, o aplicativo registra que não foi tomada"
                                    : "PillReminder is a thoughtful medication management experience designed to make daily routines simpler, clearer, and more reliable."}
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-3 font-space text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                {isPortuguese ? "Tecnologias & Técnica" : "Tech & Technique"}
                            </h2>
                            <p className="text-base leading-7 text-slate-600">
                                {isPortuguese
                                    ? "Flutter, Dart, Firebase, Arduino IDE, Fusion, Kicad, Sistemas embarcados"
                                    : "Flutter, Dart, Firebase, and thoughtful product design."}
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-3 font-space text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                {isPortuguese ? "Ano" : "Year"}
                            </h2>
                            <p className="text-base leading-7 text-slate-600">2026</p>
                        </div>
                    </div>
                </motion.section>

                <section ref={imageSectionRef} className="relative z-10 min-h-[140vh]">
                    <motion.div style={{ y: imageY }} className="mx-auto w-full max-w-[660px]">
                        <img
                            src="/images/pillreminder-project-image.png"
                            alt="PillReminder project preview"
                            className="block h-auto w-full object-cover"
                        />
                    </motion.div>

                    <p className="mt-32 text-center font-space text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                        raphaelsoarescasado@gmail.com
                    </p>
                </section>
            </div>
        </main>
    );
}