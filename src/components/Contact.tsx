'use client'

import { motion } from 'framer-motion'
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react'

export default function ContactSection() {
  return (
    <section className="min-h-screen px-8 md:px-24 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-6"
          >
            <a href="#" className="flex items-center space-x-4 hover:text-purple-400 transition-colors">
              <IconMail size={32} />
              <span className="text-xl">hello@example.com</span>
            </a>
            <a href="#" className="flex items-center space-x-4 hover:text-purple-400 transition-colors">
              <IconBrandGithub size={32} />
              <span className="text-xl">github/yourusername</span>
            </a>
            <a href="#" className="flex items-center space-x-4 hover:text-purple-400 transition-colors">
              <IconBrandLinkedin size={32} />
              <span className="text-xl">linkedin/yourprofile</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}