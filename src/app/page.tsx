import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import FloatingBubbles from "@/components/FloatingBubbles";

export default function Home() {
  return (
    <>
      <Navbar />
    
      <main className="relative">
        <FloatingBubbles />
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
        </div>
      </main>
    </>
  );
}