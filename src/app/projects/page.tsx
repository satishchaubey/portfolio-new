'use client';

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-black" />,
})

const Project = () => {
  return (
    <div id="projects" className="min-h-screen">
       <section >
       <Suspense fallback={null}>
            <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
              <Scene />
            </div>
          </Suspense>
        </section>
    </div>
  )
}

export default Project
