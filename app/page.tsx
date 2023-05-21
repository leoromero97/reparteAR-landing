'use client';

import Hero from '@/components/Sections/Hero';
import Navbar from '@/components/Navbar'
import Services from '@/components/Sections/Services';
import Testimonials from '@/components/Sections/Testimonials';
import UsSection from '@/components/Sections/UsSection';
import SupportSection from '@/components/Sections/SupportSection';
import Footer from '@/components/Footer/indext';

export default function Home() {

  return (
    <main className="flex flex-col items-center w-full h-auto min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <UsSection />
      <SupportSection />
      <Footer />
    </main>
  )
}
