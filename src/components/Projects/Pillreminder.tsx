"use client";

import Link from "next/link";
import { useSitePreferences } from "@/app/SitePreferences";

export default function Pillreminder() {
    const { language } = useSitePreferences();
    const isPortuguese = language === "pt";

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

                <section className="mx-auto flex max-w-[760px] flex-col py-20">
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
                                    : "PillReminder is an academic project created for participation in a scientific initiation conference. Its main goal was to apply technology to healthcare and well-being."}
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-3 font-space text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                {isPortuguese ? "Descrição" : "Description"}
                            </h2>
                            <p className="text-base leading-7 text-slate-600">
                                {isPortuguese
                                    ? "A proposta executada foi a criação de um dispositivo móvel integrado com um aplicativo, onde ambos se comunicam por meio da IoT (Internet das Coisas) e trabalham em conjunto para auxiliar o usuário a manter sua rotina de medicação em dia"
                                    : "The project combines a physical device with a mobile application. They communicate through IoT (Internet of Things) and work together to help users stay on top of their medication schedule."}
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-3 font-space text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                {isPortuguese ? "Como Funciona" : "How It Works"}
                            </h2>
                            {isPortuguese ? (
                                <p className="text-base leading-7 text-slate-600">
                                    Com o dispositivo em mãos, ao abrir o aplicativo, você terá acesso a tela de login e criação de conta, seguindo para a próxima etapa onde é definido alguns outros detalhes como peso, altura, idade e sexo, isso é importante para a personalização da experiência do usuário. Em seguida, será redirecionado para a tela principal do aplicativo (&quot;Home&quot;). Abaixo é possível ver a barra de navegação, que contém as principais funcionalidades, como a tela de &quot;Perfil&quot;, tela de &quot;Lembretes&quot;, e principalmente a tela de &quot;Conexão com o Dispositivo&quot;. Ao entrar na tela de &quot;Conexão com o Dispositivo&quot; você consegue conectar seu dispositivo com o aplicativo por meio de QR Code ou o código, feito a conexão, o dispositivo estará pronto para ser utilizado, e o usuário estará apto a definir os horários de medicação seguindo para a tela de &quot;Lembretes&quot;. Note que é possível definir 3 compartimentos para medicação (A, B e C) que correspondem com os compartimentos do dispositivo. Quando disparado o alarme, o usuário recebe uma notificação no celular, o dispositivo emite um som e acende a luz do compartimento correspondente, indicando qual a medicação a ser tomada. No visor é exibido uma mensagem de alerta, e quando não está em alerta o mesmo exibe a hora atual e quanto tempo falta para o próximo alarme. Para confirmar que a medicação foi tomada, deve-se apertar o botão do compartimento correspondente ou confirmar no aplicativo, em caso do usuário não confirmar, o aplicativo registra que não foi tomada.
                                </p>
                            ) : (
                                <div className="space-y-8 text-base leading-7 text-slate-600">
                                    <p>
                                        With the device in hand, opening the app takes you to the login and account creation screen. Next, you enter details such as weight, height, age, and sex to personalize the experience. You are then taken to the app&apos;s home screen.
                                    </p>
                                    <img
                                        src="/images/mockups/home-page.png"
                                        alt="PillReminder home screen"
                                        className="block h-[420px] w-[207px] object-contain"
                                    />
                                    <p>
                                        The navigation bar gives access to the main features: Profile, Reminders, and Connect Device.
                                    </p>
                                    <div className="grid justify-items-start gap-6 sm:grid-cols-3">
                                        <img
                                            src="/images/mockups/profile-page.png"
                                            alt="PillReminder profile screen"
                                            className="block h-[420px] w-[207px] object-contain"
                                        />
                                        <img
                                            src="/images/mockups/timer-page.png"
                                            alt="PillReminder reminders screen"
                                            className="block h-[420px] w-[207px] object-contain"
                                        />
                                        <img
                                            src="/images/mockups/connect-device-page.png"
                                            alt="PillReminder connect device screen"
                                            className="block h-[420px] w-[207px] object-contain"
                                        />
                                    </div>
                                    <p>
                                        From Connect Device, you can pair the device with the app using a QR code or a code. Once connected, the device is ready to use and you can set medication times on the Reminders screen.
                                    </p>
                                    <div className="grid justify-items-start gap-6 sm:grid-cols-2">
                                        <img
                                            src="/images/mockups/confirm-connection-page.png"
                                            alt="PillReminder connection confirmation screen"
                                            className="block h-[420px] w-[207px] object-contain"
                                        />
                                        <img
                                            src="/images/mockups/already-connected-page.png"
                                            alt="PillReminder connected device screen"
                                            className="block h-[420px] w-[207px] object-contain"
                                        />
                                    </div>
                                    <p>
                                        You can configure three medication compartments, A, B, and C, matching the compartments on the device. When an alarm goes off, the user receives a phone notification, the device plays a sound, and the corresponding compartment light turns on to indicate which medication should be taken.
                                    </p>
                                    <p>
                                        The display shows an alert message during an alarm. At other times, it shows the current time and how long remains until the next alarm.
                                    </p>
                                    <img
                                        src="/images/pillbox_alpha_image.png"
                                        alt="PillReminder physical device"
                                        className="block max-w-full"
                                    />
                                    <p>
                                        To confirm that the medication was taken, press the corresponding compartment button or confirm it in the app. If the user does not confirm, the app records that the medication was not taken.
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            <h2 className="mb-3 font-space text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                {isPortuguese ? "Tecnologias & Técnica" : "Tech & Technique"}
                            </h2>
                            <p className="text-base leading-7 text-slate-600">
                                {isPortuguese
                                    ? "Flutter, Dart, Firebase, Arduino IDE, Fusion, Kicad, Sistemas embarcados"
                                    : "Flutter, Dart, Firebase, Arduino IDE, Fusion 360, KiCad, and embedded systems."}
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-3 font-space text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                {isPortuguese ? "Ano" : "Year"}
                            </h2>
                            <p className="text-base leading-7 text-slate-600">2026</p>
                        </div>
                    </div>
                </section>

                <section className="relative z-10">
                    <div className="w-full max-w-[660px]">
                        <img
                            src="/images/pillreminder-project-image.png"
                            alt="PillReminder project preview"
                            className="block h-auto w-full object-cover"
                        />
                    </div>

                    <p className="mt-32 text-center font-space text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                        raphaelsoarescasado@gmail.com
                    </p>
                </section>
            </div>
        </main>
    );
}