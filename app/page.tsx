'use client';

import clsx from 'clsx';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Hero from '@/components/Sections/Hero';
import Navbar from '@/components/Navbar'
import Services from '@/components/Sections/Services';
import Testimonials from '@/components/Sections/Testimonials';
import UsSection from '@/components/Sections/UsSection';
import SupportSection from '@/components/Sections/SupportSection';
import { texts } from '@/constants/texts';
import { externalLink } from '@/constants/messageExternal';
import useTheme from '@/hooks/useTheme';

export default function Home() {
  const { isDark, isLight } = useTheme();

  return (
    <main
      className={clsx(`
        flex 
        flex-col 
        items-center 
        w-full 
        h-auto 
        min-h-screen
        `,
        isDark && 'bg-skyblue-90 text-skyblue-20',
        isLight && 'bg-skyblue-white text-skyblue-90',
      )}
    >
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <UsSection />
      <SupportSection />
      <div className="flex md:hidden justify-center w-full py-2 px-8 fixed top-[86%] z-30">
        <Button
          text={texts.actions.requestTrip}
          icon="WhatsApp"
          className="w-full max-w-sm shadow-drop-1"
          external
          to={externalLink}
        />
      </div>
      <Footer />
    </main>
  )
}
