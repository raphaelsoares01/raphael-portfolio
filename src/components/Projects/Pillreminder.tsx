"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useSitePreferences } from "@/app/SitePreferences";

type GalleryImage = {
    src: string;
    alt: string;
};

const mockupImages = [
    {
        src: "/images/mockups/home-page.png",
        alt: "PillReminder home screen",
    },
    {
        src: "/images/mockups/profile-page.png",
        alt: "PillReminder profile screen",
    },
    {
        src: "/images/mockups/timer-page.png",
        alt: "PillReminder reminders screen",
    },
    {
        src: "/images/mockups/connect-device-page.png",
        alt: "PillReminder connect device screen",
    },
    {
        src: "/images/mockups/confirm-connection-page.png",
        alt: "PillReminder connection confirmation screen",
    },
    {
        src: "/images/mockups/already-connected-page.png",
        alt: "PillReminder connected device screen",
    },
    {
        src: "/images/mockups/sign-in-page.png",
        alt: "PillReminder sign-in screen",
    },
    {
        src: "/images/mockups/setup-page.png",
        alt: "PillReminder setup screen",
    },
    {
        src: "/images/mockups/setup-page2.png",
        alt: "PillReminder second setup screen",
    },
];

export default function Pillreminder() {
    const { language } = useSitePreferences();
    const isPortuguese = language === "pt";
    const [activeMockup, setActiveMockup] = useState(0);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    useEffect(() => {
        if (!selectedImage) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage]);

    const showPreviousMockup = () => {
        setActiveMockup((current) => (current - 1 + mockupImages.length) % mockupImages.length);
    };

    const showNextMockup = () => {
        setActiveMockup((current) => (current + 1) % mockupImages.length);
    };

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
                    <div className="flex flex-wrap items-center justify-start gap-8">
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
                                    Com o dispositivo em mãos, ao abrir o aplicativo, você terá acesso a tela de login e criação de conta, seguindo para a próxima etapa onde é definido alguns outros detalhes como peso, altura, idade e sexo, isso é importante para a personalização da experiência do usuário. Em seguida, será redirecionado para a tela principal do aplicativo (&quot;Home&quot;).
                                    <br />
                                    <br />
                                    Abaixo é possível ver a barra de navegação, que contém as principais funcionalidades, como a tela de &quot;Perfil&quot;, tela de &quot;Lembretes&quot;, e principalmente a tela de &quot;Conexão com o Dispositivo&quot;.
                                    <br />
                                    <br />
                                    Ao entrar na tela de &quot;Conexão com o Dispositivo&quot; você consegue conectar seu dispositivo com o aplicativo por meio de QR Code ou o código, feito a conexão, o dispositivo estará pronto para ser utilizado, e o usuário estará apto a definir os horários de medicação seguindo para a tela de &quot;Lembretes&quot;. Note que é possível definir 3 compartimentos para medicação (A, B e C) que correspondem com os compartimentos do dispositivo. Quando disparado o alarme, o usuário recebe uma notificação no celular, o dispositivo emite um som e acende a luz do compartimento correspondente, indicando qual a medicação a ser tomada.
                                    <br />
                                    <br />
                                    No visor é exibido uma mensagem de alerta, e quando não está em alerta o mesmo exibe a hora atual e quanto tempo falta para o próximo alarme.
                                    <br />
                                    <br />
                                    Para confirmar que a medicação foi tomada, deve-se apertar o botão do compartimento correspondente ou confirmar no aplicativo, em caso do usuário não confirmar, o aplicativo registra que não foi tomada.
                                </p>
                            ) : (
                                <p className="text-base leading-7 text-slate-600">
                                    With the device in hand, opening the app takes you to the login and account creation screen. Next, you enter details such as weight, height, age, and sex to personalize the experience. You are then taken to the app&apos;s home screen.
                                    <br />
                                    <br />
                                    The navigation bar gives access to the main features: Profile, Reminders, and Connect Device.
                                    <br />
                                    <br />
                                    From Connect Device, you can pair the device with the app using a QR code or a code. Once connected, the device is ready to use and you can set medication times on the Reminders screen.
                                    <br />
                                    <br />
                                    You can configure three medication compartments, A, B, and C, matching the compartments on the device. When an alarm goes off, the user receives a phone notification, the device plays a sound, and the corresponding compartment light turns on to indicate which medication should be taken.
                                    <br />
                                    <br />
                                    The display shows an alert message during an alarm. At other times, it shows the current time and how long remains until the next alarm.
                                    <br />
                                    <br />
                                    To confirm that the medication was taken, press the corresponding compartment button or confirm it in the app. If the user does not confirm, the app records that the medication was not taken.
                                </p>
                            )}
                            <div className="mt-10 flex flex-col items-center gap-5">
                                <div className="flex w-full items-center justify-between gap-4">
                                    <button
                                        type="button"
                                        onClick={showPreviousMockup}
                                        className="rounded-full border border-slate-300 px-4 py-2 text-2xl leading-none text-slate-600 transition-colors hover:border-primary hover:text-primary"
                                        aria-label={isPortuguese ? "Imagem anterior" : "Previous image"}
                                    >
                                        ←
                                    </button>
                                    <div className="flex h-[520px] w-[256px] items-center justify-center sm:h-[560px] sm:w-[276px]">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedImage(mockupImages[activeMockup])}
                                            className="size-full cursor-zoom-in"
                                            aria-label={isPortuguese ? "Ampliar imagem" : "Enlarge image"}
                                        >
                                            <AnimatePresence mode="wait">
                                                <motion.img
                                                    key={mockupImages[activeMockup].src}
                                                    src={mockupImages[activeMockup].src}
                                                    alt={mockupImages[activeMockup].alt}
                                                    className="block size-full object-contain"
                                                    initial={{ opacity: 0, x: 16 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -16 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                />
                                            </AnimatePresence>
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={showNextMockup}
                                        className="rounded-full border border-slate-300 px-4 py-2 text-2xl leading-none text-slate-600 transition-colors hover:border-primary hover:text-primary"
                                        aria-label={isPortuguese ? "Próxima imagem" : "Next image"}
                                    >
                                        →
                                    </button>
                                </div>
                                <div className="flex items-center gap-2" aria-label={isPortuguese ? "Imagem atual" : "Current image"}>
                                    {mockupImages.map((mockup, index) => (
                                        <button
                                            key={mockup.src}
                                            type="button"
                                            onClick={() => setActiveMockup(index)}
                                            className={`size-2.5 rounded-full transition-colors ${
                                                activeMockup === index ? "bg-primary" : "bg-slate-300"
                                            }`}
                                            aria-label={`${isPortuguese ? "Mostrar imagem" : "Show image"} ${index + 1}`}
                                            aria-current={activeMockup === index ? "true" : undefined}
                                        />
                                    ))}
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() =>
                                    setSelectedImage({
                                        src: "/images/pillbox_alpha_image.png",
                                        alt: "PillReminder physical device",
                                    })
                                }
                                className="mx-auto mt-10 block max-w-full cursor-zoom-in"
                                aria-label={isPortuguese ? "Ampliar imagem da caixa" : "Enlarge physical device image"}
                            >
                                <img
                                    src="/images/pillbox_alpha_image.png"
                                    alt="PillReminder physical device"
                                    className="max-w-full"
                                />
                            </button>
                        </div>
                        <div>
                            <h2 className="mb-3 font-space text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                {isPortuguese ? "Resultados" : "Results"}
                            </h2>
                            {isPortuguese ? (
                                <p className="text-base leading-7 text-slate-600">
                                    Após finalização projeto, o dispositivo e o aplicativo foram testados em conjunto, o resultado foi satisfatório atingindo todas as expectativas, sendo apresentado no Congresso Brasileiro de Iniciação Científica (COBRIC), onde foi possível demonstrar o funcionamento do dispositivo e do aplicativo, e como eles se comunicam entre si.
                                </p>
                            ) : (
                                <p className="text-base leading-7 text-slate-600">
                                    After the project was completed, the device and the application were tested together, achieving satisfactory results and meeting all expectations. The project was presented at the Brazilian Congress of Scientific Initiation (COBRIC), where we demonstrated how the device and the application work and communicate with each other.
                                </p>
                            )}
                            <div className="mt-10 grid justify-items-center gap-6 sm:grid-cols-2">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSelectedImage({
                                            src: "/images/cobric-project-picture.jpeg",
                                            alt: "PillReminder project at COBRIC",
                                        })
                                    }
                                    className="cursor-zoom-in"
                                    aria-label={isPortuguese ? "Ampliar imagem do projeto no COBRIC" : "Enlarge COBRIC project image"}
                                >
                                    <img
                                        src="/images/cobric-project-picture.jpeg"
                                        alt="PillReminder project at COBRIC"
                                        className="w-full max-w-[450px]"
                                    />
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSelectedImage({
                                            src: "/images/cobric-team-picture.jpeg",
                                            alt: "PillReminder team at COBRIC",
                                        })
                                    }
                                    className="cursor-zoom-in"
                                    aria-label={isPortuguese ? "Ampliar imagem da equipe no COBRIC" : "Enlarge COBRIC team image"}
                                >
                                    <img
                                        src="/images/cobric-team-picture.jpeg"
                                        alt="PillReminder team at COBRIC"
                                        className="w-full max-w-[450px]"
                                    />
                                </button>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-3 font-space text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                {isPortuguese ? "'Tecnologias & Técnica" : "Tech & Technique"}
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
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-6 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            role="dialog"
                            aria-modal="true"
                            aria-label={selectedImage.alt}
                        >
                            <motion.div
                                className="relative flex max-h-[92vh] max-w-[92vw] items-center justify-center"
                                initial={{ scale: 0.94, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.94, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                onClick={(event) => event.stopPropagation()}
                            >
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="max-h-[88vh] max-w-[88vw] object-contain"
                                />
                                <button
                                    type="button"
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute -right-3 -top-3 flex size-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-slate-700 shadow-lg transition-colors hover:bg-primary hover:text-white"
                                    aria-label={isPortuguese ? "Fechar imagem ampliada" : "Close enlarged image"}
                                >
                                    ×
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}