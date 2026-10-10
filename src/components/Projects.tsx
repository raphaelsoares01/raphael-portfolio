"use client";

import { motion } from "motion/react";
import { useState } from "react";

const projects = [
    { name: "PillReminder", technologies: ["Flutter", "Dart", "Firebase"] },
    { name: "Project 02", technologies: ["React", "TypeScript", "Tailwind CSS"] },
    { name: "Project 03", technologies: ["Next.js", "Node.js", "PostgreSQL"] },
    { name: "Project 04", technologies: ["HTML", "CSS", "JavaScript"] }, 
];

export default function Projects() {
    const [activeProject, setActiveProject] = useState(0);
    const selectedProject = projects[activeProject];

    return (
        <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24 sm:px-10">
            <div className="w-full max-w-6xl">
                <div className="mb-12">
                    <h1 className="font-space text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                        Projects
                    </h1>
                    <span className="mt-3 block h-1 w-20 rounded-full bg-primary" />
                </div>

                <div className="grid items-start gap-12 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[minmax(0,1fr)_minmax(280px,460px)] lg:gap-20">
                    <div>
                        {projects.map((project, index) => {
                            const isActive = activeProject === index;

                            return (
                                <motion.article
                                    key={project.name}
                                    className="border-b border-slate-300/70 py-6 first:pt-0 last:border-b-0"
                                    initial={{ opacity: 0, y: 32 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
                                    onMouseEnter={() => setActiveProject(index)}
                                >
                                    <button
                                        type="button"
                                        className="group w-full cursor-pointer text-left"
                                        onFocus={() => setActiveProject(index)}
                                        aria-label={`Selecionar projeto ${project.name}`}
                                    >
                                        <div className="mb-3 flex items-center gap-4">
                                            <span className="font-space text-sm font-semibold text-slate-400">
                                                _0{index + 1}
                                            </span>
                                            <div className="relative overflow-hidden">
                                                <h2 className="font-space text-4xl font-bold tracking-tight text-slate-400 transition-colors duration-300 sm:text-6xl">
                                                    {project.name}
                                                </h2>
                                                <motion.h2
                                                    aria-hidden="true"
                                                    className="absolute inset-0 font-space text-4xl font-bold tracking-tight text-primary sm:text-6xl"
                                                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                                                    animate={{
                                                        clipPath: isActive
                                                            ? "inset(0 0 0 0)"
                                                            : "inset(0 100% 0 0)",
                                                    }}
                                                    transition={{ duration: 0.28, ease: "easeOut" }}
                                                >
                                                    {project.name}
                                                </motion.h2>
                                            </div>
                                        </div>

                                        <div className="ml-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
                                            {project.technologies.map((technology, technologyIndex) => (
                                                <span key={technology} className="flex items-center gap-3">
                                                    {technologyIndex > 0 && (
                                                        <span
                                                            aria-hidden="true"
                                                            className="size-1.5 rounded-full bg-primary"
                                                        />
                                                    )}
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </button>
                                </motion.article>
                            );
                        })}
                    </div>

                    <div className="h-fit lg:sticky lg:top-16 lg:-mt-16 lg:self-start">
                        <div
                            className="relative mx-auto aspect-[0.73] w-full max-w-[460px]"
                            data-selected-project={selectedProject.name}
                        >
                            <img
                                src="/images/large-liquid-container.png"
                                alt=""
                                aria-hidden="true"
                                className="absolute inset-0 size-full object-contain"
                            />
                            <div className="absolute inset-[12%] flex items-center justify-center text-center">
                                {/* Project preview content will be added here later. */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}