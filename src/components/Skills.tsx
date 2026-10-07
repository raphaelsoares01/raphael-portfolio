export default function Skills() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20 sm:px-10">
      <h1 className="mb-12 text-center text-5xl font-bold sm:text-6xl">Skills</h1>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* HTML */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
              
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,184,53,0.3),transparent_48%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/html-logo.png" alt="Logo de HTML" className="size-14 object-contain sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">HTML</p>
            </div>
          </div>
        </article>

        {/* CSS */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,119,255,0.22),transparent_48%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="#" alt="Logo de CSS" className="size-14 object-contain sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">CSS</p>
            </div>
          </div>
        </article>

        {/* JavaScript */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,119,255,0.22),transparent_48%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="#" alt="Logo de JavaScript" className="size-14 object-contain sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">JavaScript</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}