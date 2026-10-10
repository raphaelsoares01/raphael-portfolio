export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="group relative z-10">

      {/* < */}
      <img
        src="/images/left-arrow.png"
        alt=""
        className="
        absolute left-[-8vw] top-1/2 -translate-y-1/2
        w-[80vw] max-w-[1050px] h-auto scale-[1.5]
        transition-transform duration-500 ease-out
        group-hover:-translate-x-30
      "
      />

      {/* > */}
      <img
        src="/images/right-arrow.png"
        alt=""
        className="
          absolute right-[-8vw] top-1/2 -translate-y-1/2
          w-[80vw] max-w-[1050px] h-auto scale-[1.5]
          transition-transform duration-500 ease-out
          group-hover:translate-x-30
        "
      />

      {/* Título */}
      <div className="relative z-10 text-center">
        <h1 className="font-space text-6xl md:text-[130px] font-semibold">
          SOFTWARE
        </h1>

        <h1 className="font-space text-6xl md:text-[130px] font-semibold">
          ENGINEER
        </h1>
      </div>

    </div>
    </section>
  );
}

      {/*
      <img
        src="/images/hero-background.png"
        alt=""
        className="absolute w-[95%] h-auto opacity-60"
      />
      */}