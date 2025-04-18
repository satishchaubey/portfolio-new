'use client'

import { motion } from 'framer-motion'
import Earth from './Earth'

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-24 relative overflow-hidden">
      {/* Text Content */}
      <div className="space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="text-2xl md:text-3xl text-gray-400 font-mono">
            Hi, I&apos;m
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mt-2"
          >
            Satish Kumar Chaubey
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.h2
            whileTap={{ scale: 0.95 }}
            className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
            suppressHydrationWarning
          >
            Full Stack Developer
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-600 mt-2"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mt-8 leading-relaxed"
        >
          Crafting immersive digital experiences with
          <motion.span
            whileHover={{ color: '#EC4899' }}
            className="font-semibold text-purple-400 mx-2"
          >
            modern web technologies
          </motion.span>
          and
          <motion.span
            whileHover={{ color: '#3B82F6' }}
            className="font-semibold text-blue-400 mx-2"
          >
            3D graphics
          </motion.span>
        </motion.p>
      </div>

      {/* Earth Canvas */}
      <div className="relative w-full h-[400px] md:h-[600px] z-0">
        <Earth />
      </div>

      {/* Decorative Background Blurs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-0 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"
      />
    </section>
  )
}
