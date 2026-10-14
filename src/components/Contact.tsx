"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { useSitePreferences } from "@/app/SitePreferences";

const contactDetails = [
	{
		label: "Email",
		value: "raphaelsoarescasado@gmail.com",
		href: "mailto:raphaelsoarescasado@gmail.com",
		icon: "/images/email-icon.png",
	},
	{
		label: "Phone",
		value: "+55 (13) 99648-2104",
		href: "tel:+5513996482104",
		icon: "/images/phone-icon.png",
	},
	{
		label: "Location",
		value: "São Paulo, SP - Brazil",
		href: "https://maps.google.com/?q=São+Paulo,+SP",
		icon: "/images/location-icon.png",
	},
];

export default function Contact() {
	const { language } = useSitePreferences();
	const isPortuguese = language === "pt";
	const [isSent, setIsSent] = useState(false);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSent(true);
		event.currentTarget.reset();
	};

	return (
		<section id="contact" className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10">
			<div className="pointer-events-none absolute -left-28 top-1/4 size-64 rounded-full bg-white/45 blur-3xl" />
			<div className="pointer-events-none absolute -right-24 bottom-10 size-72 rounded-full bg-primary/10 blur-3xl" />

			<div className="relative z-10 mx-auto grid w-full max-w-[1540px] gap-10 lg:grid-cols-[0.8fr_1.05fr_0.8fr] lg:items-center lg:gap-12">
				<motion.div
					initial={{ opacity: 0, x: -28 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: false, amount: 0.3 }}
					transition={{ duration: 0.65, ease: "easeOut" }}
				>
					<p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-primary">
						{isPortuguese ? "Entre em contato" : "Get in touch"}
					</p>
					<h2 className="font-space max-w-md text-5xl font-bold leading-[0.98] tracking-tight text-slate-950 sm:text-6xl">
						{isPortuguese ? "Vamos trabalhar juntos" : "Let's work together"}
					</h2>
					<p className="mt-7 max-w-sm text-base leading-7 text-slate-600">
						{isPortuguese
							? "Tem um projeto em mente? Vou adorar ouvir você."
							: "Have a project in mind? I would love to hear from you."}
					</p>
				</motion.div>

				<motion.form
					onSubmit={handleSubmit}
					className="rounded-[2rem] border border-white/65 bg-white/20 p-6 shadow-[0_24px_70px_rgba(65,149,244,0.12)] backdrop-blur-2xl sm:p-8"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.2 }}
					transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
				>
					<div className="space-y-5">
						<label className="block text-sm font-semibold text-slate-700">
							{isPortuguese ? "Nome" : "Name"}
							<input required name="name" type="text" placeholder={isPortuguese ? "Seu nome" : "Your name"} className="mt-2 h-12 w-full rounded-full border border-white/75 bg-white/20 px-5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20" />
						</label>
						<label className="block text-sm font-semibold text-slate-700">
							Email
							<input required name="email" type="email" placeholder="you@example.com" className="mt-2 h-12 w-full rounded-full border border-white/75 bg-white/20 px-5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20" />
						</label>
						<label className="block text-sm font-semibold text-slate-700">
							{isPortuguese ? "Assunto" : "Subject"}
							<input required name="subject" type="text" placeholder={isPortuguese ? "Como posso ajudar?" : "How can I help?"} className="mt-2 h-12 w-full rounded-full border border-white/75 bg-white/20 px-5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20" />
						</label>
						<label className="block text-sm font-semibold text-slate-700">
							{isPortuguese ? "Mensagem" : "Message"}
							<textarea required name="message" rows={4} placeholder={isPortuguese ? "Escreva sua mensagem..." : "Type your message..."} className="mt-2 w-full resize-none rounded-[1.25rem] border border-white/75 bg-white/20 px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20" />
						</label>
					</div>
					<button type="submit" className="mt-6 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-primary px-6 text-sm font-bold text-white shadow-[0_10px_25px_rgba(65,149,244,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
						{isSent ? (isPortuguese ? "Mensagem enviada" : "Message sent") : isPortuguese ? "Enviar mensagem" : "Send message"}
						<span aria-hidden="true">↗</span>
					</button>
				</motion.form>

				<motion.aside
					className="w-full lg:w-[410px] lg:justify-self-end"
					initial={{ opacity: 0, x: 28 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: false, amount: 0.3 }}
					transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
				>
					<p className="mb-4 text-[10px] font-bold uppercase tracking-[0.34em] text-primary">{isPortuguese ? "Contato" : "Contact info"}</p>
					<div className="space-y-2.5">
						{contactDetails.map((detail) => (
						<a key={detail.label} href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel={detail.href.startsWith("http") ? "noreferrer" : undefined} className="group flex h-[98px] min-h-0 items-center gap-4 rounded-[3rem] border border-white/55 bg-white/[0.27] px-2 py-0 shadow-[0_12px_30px_rgba(65,149,244,0.1)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.4]">
								<span className="relative flex size-22 shrink-0 items-center justify-center">
									<img src="/images/bubble-to-icon.png" alt="" aria-hidden="true" className="absolute inset-0 size-full object-contain" />
									<img src={detail.icon} alt="" aria-hidden="true" className="relative z-10 size-6 object-contain" style={{ filter: "brightness(0) saturate(100%) invert(51%) sepia(94%) saturate(1800%) hue-rotate(184deg) brightness(99%) contrast(95%)" }} />
								</span>
								<span className="min-w-0">
									<span className="block text-[13px] font-bold text-[#527b9d]">{isPortuguese && detail.label === "Location" ? "Localização" : isPortuguese && detail.label === "Phone" ? "Telefone" : detail.label}</span>
									<span className="mt-1 block truncate text-[11px] text-[#7195b2]">{detail.value}</span>
								</span>
							</a>
						))}
					</div>
					<div className="mt-8">
						<p className="mb-4 text-[10px] font-bold uppercase tracking-[0.34em] text-primary">{isPortuguese ? "Redes sociais" : "Socials"}</p>
						<div className="flex gap-3">
							{[
								["/images/github-logo.png", "https://github.com/raphaelsoares01", "GitHub"],
								["in", "https://www.linkedin.com/in/raphaelsoarescasado", "LinkedIn"],
							].map(([icon, href, label]) => (
								<a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex size-12 items-center justify-center rounded-full border border-white/80 bg-white/35 text-sm font-bold text-primary shadow-sm transition hover:-translate-y-1 hover:bg-white/70">
									{label === "GitHub" ? <img src={icon} alt="" aria-hidden="true" className="size-6 object-contain" style={{ filter: "brightness(0) saturate(100%) invert(51%) sepia(94%) saturate(1800%) hue-rotate(184deg) brightness(99%) contrast(95%)" }} /> : icon}
								</a>
							))}
						</div>
					</div>
				</motion.aside>
			</div>
		</section>
	);
}
