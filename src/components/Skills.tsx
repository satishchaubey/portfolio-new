'use client'

import { motion } from 'framer-motion'
import { IconBrandThreejs, IconBrandReact, IconBrandNextjs, IconBrandNodejs, IconSql, IconCloud } from '@tabler/icons-react'

const skills = [
  { name: 'Three.js', icon: <IconBrandThreejs size={40} />, color: 'text-[#049EF4]' },
  { name: 'React', icon: <IconBrandReact size={40} />, color: 'text-[#61DAFB]' },
  { name: 'Next.js', icon: <IconBrandNextjs size={40} />, color: 'text-white' },
  { name: 'Node.js', icon: <IconBrandNodejs size={40} />, color: 'text-[#539E43]' },
  { name: 'SQL', icon: <IconSql size={40} />, color: 'text-[#00758F]' },
  { name: 'AWS', icon: <IconCloud size={40} />, color: 'text-[#FF9900]' },
]

export default function SkillsSection() {
  return (
    <section className=" px-8 md:px-24 py-24">
      <h2 className="text-4xl font-bold mb-16 text-white">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500 transition-all duration-300"
          >
            <div className={`${skill.color} mb-4`}>
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-center text-white">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}