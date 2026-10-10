export default function Skills() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20 sm:px-10">
      <h1 className="mb-12 w-full max-w-[1200px] text-left text-5xl font-bold sm:text-6xl">
        Skills
        <span className="mt-3 block h-1 w-20 rounded-full bg-pink-500" />
      </h1>

      <div className="w-full max-w-[1200px] space-y-16">
        <section className="grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-10">
          <h2 className="mb-0 text-left text-4xl font-bold uppercase lg:pt-2">Frontend</h2>
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* HTML */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
              
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/html-logo-liquid-glass.png" alt="Logo de HTML" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
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
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/css-logo-liquid-glass.png" alt="Logo de CSS" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
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
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/javascript-logo-liquid-glass.png" alt="Logo de JavaScript" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">JavaScript</p>
            </div>
          </div>
        </article>

        {/* TypeScript */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/typescript-logo-liquid-glass.png" alt="Logo de TypeScript" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">TypeScript</p>
            </div>
          </div>
        </article>

        {/* React */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/react-logo-liquid-glass.png" alt="Logo de React" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">React</p>
            </div>
          </div>
        </article>

        {/* Tailwind CSS */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/tailwind-logo-liquid-glass.png" alt="Logo de Tailwind CSS" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">Tailwind CSS</p>
            </div>
          </div>
        </article>

        {/* Next.js */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/nextjs-logo-liquid-glass.png" alt="Logo de Next.js" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">Next.js</p>
            </div>
          </div>
        </article>

          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-10">
          <h2 className="mb-0 text-left text-4xl font-bold uppercase lg:pt-2">Backend</h2>
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {/* Java */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/java-logo-liquid-glass.png" alt="Logo de Java" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">Java</p>
            </div>
          </div>
        </article>

        {/* Python */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/python-logo-liquid-glass.png" alt="Logo de Python" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">Python</p>
            </div>
          </div>
        </article>

        {/* C# */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/csharp-logo-liquid-glass.png" alt="Logo de C#" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">C#</p>
            </div>
          </div>
        </article>

        {/* C++ */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/cpp-logo-liquid-glass.png" alt="Logo de C++" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">C++</p>
            </div>
          </div>
        </article>

        {/* Dart */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/dart-logo-liquid-glass.png" alt="Logo de Dart" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">Dart</p>
            </div>
          </div>
        </article>

        {/* Node.js */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/nodejs-logo-liquid-glass.png" alt="Logo de Node.js" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">Node.js</p>
            </div>
          </div>
        </article>

          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-10">
          <h2 className="mb-0 text-left text-4xl font-bold uppercase lg:pt-2">Database</h2>
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {/* SQL */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/sql-logo-liquid-glass.png" alt="Logo de SQL" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">SQL</p>
            </div>
          </div>
        </article>

        {/* Firebase */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/firebase-logo-liquid-glass.png" alt="Logo de Firebase" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">Firebase</p>
            </div>
          </div>
        </article>

          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-10">
          <h2 className="mb-0 text-left text-4xl font-bold uppercase lg:pt-2">Tools</h2>
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


        {/* GitHub */}
        <article className="group relative flex flex-col items-center transition duration-300 hover:-translate-y-1">
          <div className="relative w-full max-w-[18rem] overflow-hidden rounded-[1.35rem]">
            <img
              src="/images/liquid-container.png"
              alt=""
              aria-hidden="true"
              className="relative block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img src="/images/skills/github-logo-liquid-glass.png" alt="Logo de GitHub" className="size-14 object-contain transition-transform duration-300 group-hover:scale-110 sm:size-16" />
              <p className="text-lg font-semibold tracking-wide text-slate-700">GitHub</p>
            </div>
          </div>
        </article>

          </div>
        </section>
      </div>
    </section>
  );
}