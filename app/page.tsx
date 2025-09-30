"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useSectionHighlight } from "@/hooks/use-section-highlight";

export default function Home() {
  const sectionOrder = ["home", "skills", "about", "projects", "contact"] as const;
  const activeSection = useSectionHighlight(sectionOrder as unknown as string[]);

  return (
    <div className="space-y-32 sm:space-y-40">
      <Hero isActive={activeSection === "home"} />
      <Skills isActive={activeSection === "skills"} />
      <About isActive={activeSection === "about"} />
      <Projects isActive={activeSection === "projects"} />
      <Contact isActive={activeSection === "contact"} />
    </div>
  );
}