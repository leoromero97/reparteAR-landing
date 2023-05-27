'use client';

import Button from '@/components/Button';
import Hero from '@/components/Sections/Hero';
import Navbar from '@/components/Navbar'
import Services from '@/components/Sections/Services';
import Testimonials from '@/components/Sections/Testimonials';
import UsSection from '@/components/Sections/UsSection';
import SupportSection from '@/components/Sections/SupportSection';
import Footer from '@/components/Footer/indext';
import { texts } from '@/constants/texts';
import { externalLink } from '@/constants/messageExternal';
import useMobileDetect from './hooks/useMobileDetected';

export default function Home() {
  const isMobile = useMobileDetect();

  return (
    <main className="flex flex-col items-center w-full h-auto min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <UsSection />
      <SupportSection />
      {isMobile && (
        <div className="flex justify-center w-full py-2 px-8 fixed top-[86%] z-30">
          <Button
            text={texts.actions.requestTrip}
            icon="WhatsApp"
            className="w-full max-w-sm shadow-drop-1"
            external
            to={externalLink}
          />
        </div>
      )}
      <Footer />
    </main>
  )
}
