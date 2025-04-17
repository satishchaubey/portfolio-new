'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data?: FormData) => {
    if (!data) return toast.error('Please fill in all the required fields. 😅')
    setIsSubmitting(true)
    try {
      const response = {
        ok: true,
      }

      if (response.ok) {
        toast.success( 'Message sent successfully! 🎉')
        reset()  // Try moving this line after toast if needed
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch {
      toast.error('Failed to send message. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="max-w-2xl mx-auto py-12 px-4 mt-16">
      {/* Toaster container */}
      <Toaster position="top-center" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                {...register('name')}
                className="w-full p-3 rounded-lg bg-gray-100 border text-gray-700 border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {errors.name && (
                <p className="text-red-400 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                {...register('email')}
                className="w-full p-3 rounded-lg bg-gray-100 border text-gray-700 border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {errors.email && (
                <p className="text-red-400 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                {...register('message')}
                rows={5}
                className="w-full p-3 rounded-lg bg-gray-100 border text-gray-700 border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {errors.message && (
                <p className="text-red-400 mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6  text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none cursor-pointer focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
