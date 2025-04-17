'use client'

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-black" />,
})

const Experience = () => {
  return (
    <div id="experience" className="min-h-screen">
       <Suspense fallback={null}>
            <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
              <Scene />
            </div>
          </Suspense>
    </div>
  )
}

export default Experience
