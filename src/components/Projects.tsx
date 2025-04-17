'use client'

import { motion } from 'framer-motion'

const projects = [
  { title: '3D Visualization', tech: 'Three.js / React', description: 'Interactive 3D product configurator' },
  { title: 'E-commerce Platform', tech: 'Next.js / Node.js', description: 'High-performance online store' },
  { title: 'AR Experience', tech: 'WebXR / Babylon.js', description: 'Web-based augmented reality app' },
]

export default function ProjectsSection() {
  return (
    <section className="min-h-screen px-8 md:px-24 py-24">
      <h2 className="text-4xl font-bold mb-16 text-lime-50">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500 transition-all group"
          >
            <div className="mb-4">
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 group-hover:bg-purple-900 transition-colors" />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-purple-400 mb-2">{project.tech}</p>
              <p className="text-gray-400">{project.description}</p>
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center text-purple-400 cursor-pointer"
            >
              <span className="mr-2">View Project</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}