export default function About() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#eeeeee] px-6 py-24 sm:px-10">
      <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-[minmax(220px,0.8fr)_1.2fr] md:gap-20">
        <img
          src="/images/profile.png"
          alt="Portrait of Raphael Soares Casado"
          className="mx-auto w-full max-w-[18rem] rounded-[2rem] object-cover shadow-[12px_12px_0_#d7d7d7] sm:max-w-[22rem]"
        />

        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            About me
          </p>
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Hey!
          </h1>

          <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
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
        </div>
      </div>
    </section>
  );
}