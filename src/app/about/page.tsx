'use client';
import React, { Suspense } from 'react';
import About from '../../components/About';
import Scene from '@/components/canvas/Scene';


const Abouts = () => {
  return (
    <div id="about" className="min-h-screen">
      <Suspense fallback={null}>
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
          <Scene />
        </div>
      </Suspense>
      <About />
    </div>
  )
}

export default Abouts
