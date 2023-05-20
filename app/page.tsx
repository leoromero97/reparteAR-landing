'use client';

import Hero from '@/components/Sections/Hero';
import Navbar from '@/components/Navbar'
import Services from '@/components/Sections/Services';
import Testimonials from '@/components/Sections/Testimonials';

export default function Home() {

  return (
    <main className="flex flex-col items-center w-full h-auto min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
    </main>
  )
}
