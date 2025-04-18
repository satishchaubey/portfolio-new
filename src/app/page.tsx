'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import HeroSection from '@/components/Hero'
import SkillsSection from '@/components/Skills'
import BlogArticles from '@/components/Contact'

const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
  loading: () => <div className="w-full h-screen " />,
})

export default function Home() {
  return (
    <>
      <main className="pt-20">
        <section id="/" className="min-h-screen">
          <Suspense fallback={null}>
            <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
              <Scene />
            </div>
          </Suspense>

          <main className="relative z-10">
            <HeroSection />
            <SkillsSection />
            <BlogArticles />
          </main>
        </section>
      </main>

    </>
  )
}