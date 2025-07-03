'use client'

import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { useState } from 'react'

interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  github: string
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div id = "home" className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center py-4">
            
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-2">
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#home" className="block py-2 text-gray-600">Home</a>
              <a href="#about" className="block py-2 text-gray-600">About</a>
              <a href="#projects" className="block py-2 text-gray-600">Projects</a>
              <a href="#contact" className="block py-2 text-gray-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />
      {/* Skills Section */}
      <Skills />

      {/* About Section */}
      <section id = "about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
      <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 text-lg mb-8">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:kennethjezreel1@gmail.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Email Me
            </a>
            <a 
              onClick={() => window.open(process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL, '_blank')}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL, '_blank')}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Kenneth Jezreel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}