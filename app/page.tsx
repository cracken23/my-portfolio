'use client'

import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div id="home" className="min-h-screen">
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}