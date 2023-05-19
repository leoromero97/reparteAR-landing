'use client';

import Hero from './components/Sections/Hero';
import Navbar from './components/Navbar'
import Services from './components/Sections/Services';

export default function Home() {

  return (
    <main className="flex flex-col items-center w-full h-auto min-h-screen">
      <Navbar />
      <Hero />
      <Services />
    </main>
  )
}
