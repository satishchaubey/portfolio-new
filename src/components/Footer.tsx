'use client'

import { motion } from 'framer-motion'
import { useSelectedLayoutSegments } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaWhatsapp,
} from 'react-icons/fa'
import { SiUpwork, SiFiverr } from 'react-icons/si'

// Footer using only Framer Motion for animations
export default function Footer() {

    const segmments = useSelectedLayoutSegments()
    const [takeEmail, setTakeEmail] = useState("")

    const handleClick = () => {
        toast.success('Welcome To My Portfolio.. 🎉');
        setTakeEmail("")
    }
    
    console.log(segmments.at(0),"segmments.at(0)")

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=" text-white py-12"
        >
            <div className="container mx-auto px-6">
                {/* Heading */}
                {
                    segmments.at(0) !== "contact" && (
                        <div className='flex justify-around items-center'>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-center mb-8"
                            >
                                <h3 className="text-2xl font-bold">Let&rsquo;s Connect</h3>
                                <p className="text-indigo-300 mt-2">
                                    Feel free to drop a message or follow on my social profiles below.
                                </p>
                            </motion.div>

                            {/* Contact Input & Button */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="flex flex-col md:flex-row justify-center items-center gap-2 mb-8"
                            >
                                <motion.input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={takeEmail}
                                    onChange={(e) => setTakeEmail(e.target.value)}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="w-full md:w-auto flex-1 p-2 rounded-md bg-white/10 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <motion.button
                                    type="button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className="text-white bg-gradient-to-r mt-1 from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                    onClick={handleClick}
                                >
                                    Contact Me
                                </motion.button>
                            </motion.div>
                        </div>
                    )
                }


                {/* Social Links */}
                <motion.div
                    className="flex justify-center gap-6 mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <motion.a href="https://github.com/satishchaubey" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                        <FaGithub size={24} className="text-[#333]" />
                    </motion.a>
                    <motion.a href="https://linkedin.com/in/satish-chaubey" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                        <FaLinkedin size={24} className="text-[#0A66C2]" />
                    </motion.a>
                    <motion.a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                        <FaTwitter size={24} className="text-[#1DA1F2]" />
                    </motion.a>
                    <motion.a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                        <FaInstagram size={24} className="text-[#E1306C]" />
                    </motion.a>
                    <motion.a href="https://wa.me/8299805407" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                        <FaWhatsapp size={24} className="text-[#25D366]" />
                    </motion.a>
                    <motion.a href="https://www.upwork.com/freelancers/~your-profile-id" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                        <SiUpwork size={24} className="text-[#6fda44]" />
                    </motion.a>
                    <motion.a href="https://www.fiverr.com/your_username" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                        <SiFiverr size={24} className="text-[#1DBF73]" />
                    </motion.a>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    className="text-center text-indigo-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    © {new Date().getFullYear()} Satish Kumar Chaubey. All rights reserved.
                </motion.div>
            </div>
        </motion.footer>
    )
}