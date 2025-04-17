'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const sections = [
  { id: '/', name: 'Home' },
  { id: '/about', name: 'About' },
  // { id: '/projects', name: 'Projects' },
  // { id: '/experience', name: 'Experience' },
  { id: '/contact', name: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-gray-800 bg-black/80"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center font-roboto">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold text-white bg-clip-text "
        >
          <Link href="/">Hi... 👨‍💻</Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.id}
              className={`relative text-sm px-3 py-2 font-medium transition-colors duration-300 ${
                pathname === section.id
                  ? 'text-purple-400'
                  : 'text-gray-300 hover:text-purple-300'
              }`}
            >
              {section.name}
              {pathname === section.id && (
                <motion.div
                  layoutId="active-link"
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-purple-400 rounded-full"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/90 backdrop-blur-lg"
        >
          <div className="container mx-auto px-6 py-4 space-y-2">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={section.id}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg font-medium transition-colors ${
                  pathname === section.id
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-purple-200'
                }`}
              >
                {section.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
