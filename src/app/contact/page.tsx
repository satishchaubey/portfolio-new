import Scene from '@/components/canvas/Scene'
import ContactForm from '@/components/Contacts'
import React, { Suspense } from 'react'

const Experience = () => {
  return (
    <div id="contact" className="min-h-screen">
      <Suspense fallback={null}>
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
          <Scene />
        </div>
      </Suspense>
      <main className="relative z-10">

      <ContactForm />
      </main>
    </div>
  )
}

export default Experience
