
import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative">
        <section id="hero" className="min-h-screen">
          <Hero setActiveSection={setActiveSection}/>
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="techstack" className="py-20 bg-slate-800/50">
          <TechStack />
        </section>
        
        <section id="tools" className="py-20">
          <Tools />
        </section>
        
        <section id="projects" className="py-20 bg-slate-800/50">
          <Projects />
        </section>
        
        <section id="experience" className="py-20">
          <Experience />
        </section>
        
        <section id="achievements" className="py-20 bg-slate-800/50">
          <Achievements />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
