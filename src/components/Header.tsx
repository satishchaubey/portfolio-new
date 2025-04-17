'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(['/', 'projects', 'experience', 'contact'][0])
  const { scrollYProgress } = useScroll();
  
  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0.9]
  )

  const sections = [
    { id: '/', name: 'Home' },
    { id: 'projects', name: 'Projects' },
    { id: 'experience', name: 'Experience' },
    { id: 'contact', name: 'Contact' },
  ]

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-gray-800 bg-black/80"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold bg-amber-50 bg-clip-text text-transparent"
        >
          <Link href="#home">Hi 🙋‍♂️</Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`${section.id}`}
              onClick={() => setActiveSection(section.id)}
              className={`relative px-3 py-2 transition-colors ${
                activeSection === section.id 
                  ? 'text-purple-400'
                  : 'text-gray-300 hover:text-purple-200'
              }`}
            >
              {section.name}
              {activeSection === section.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-px bg-purple-400"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: -20 }
        }}
        className="md:hidden absolute w-full bg-black/95 backdrop-blur-lg"
      >
        <div className="container mx-auto px-6 py-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`${section.id}`}
              onClick={() => {
                setActiveSection(section.id)
                setIsMenuOpen(false)
              }}
              className={`block py-3 text-lg ${
                activeSection === section.id
                  ? 'text-purple-400'
                  : 'text-gray-300 hover:text-purple-200'
              }`}
            >
              {section.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
  )
}