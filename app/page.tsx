'use client';

import Hero from './components/Hero';
import Navbar from './components/Navbar'

export default function Home() {

  return (
    <main className="flex flex-col items-center w-full h-auto min-h-screen">
      <Navbar />
      <Hero />
    </main>
  )
}
