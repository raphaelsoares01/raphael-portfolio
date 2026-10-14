import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import FloatingBubbles from "@/components/FloatingBubbles";
import { SitePreferencesProvider } from "./SitePreferences";

export default function Home() {
  return (
    <SitePreferencesProvider>
      <Navbar />
    
      <main className="relative">
        <FloatingBubbles />
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </div>
      </main>
    </SitePreferencesProvider>
  );
}