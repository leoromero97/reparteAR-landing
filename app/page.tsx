'use client';

import { Suspense } from 'react';
import clsx from 'clsx';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Hero from '@/components/Sections/Hero';
import Navbar from '@/components/Navbar'
import NavMobile from '@/components/Navbar/NavMobile';
import Services from '@/components/Sections/Services';
import Testimonials from '@/components/Sections/Testimonials';
import ToggleTheme from '@/components/ToggleTheme';
import UsSection from '@/components/Sections/UsSection';
import SupportSection from '@/components/Sections/SupportSection';
import { texts } from '@/constants/texts';
import { externalLink } from '@/constants/messageExternal';
import useMobileDetect from '@/hooks/useMobileDetected';
import useTheme from '@/hooks/useTheme';

export default function Home() {
  const isMobile = useMobileDetect();
  const { toggleTheme, isDark, isLight, labelTheme } = useTheme();

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
        isDark && 'bg-skyblue-900 text-skyblue-200',
        isLight && 'bg-skyblue-white text-skyblue-900',
      )}
    >
      <Suspense fallback={<NavMobile />}>
        <Navbar isMobile={isMobile} />
      </Suspense>
      <Hero />
      <Services />
      <Testimonials />
      <UsSection />
      <SupportSection />
      {isMobile ? (
        <div className="flex justify-center w-full py-2 px-8 fixed top-[86%] z-30">
          <Button
            text={texts.actions.requestTrip}
            icon="WhatsApp"
            className="w-full max-w-sm shadow-drop-1"
            external
            to={externalLink}
          />
        </div>
      ) : (
        <div className="flex justify-end w-full py-2 max-w-8xl px-8 fixed top-[90%] z-30">
          <ToggleTheme
            handleToggleTheme={toggleTheme}
            isDark={isDark}
            theme={labelTheme}
          />
        </div>
      )}
      <Footer />
    </main>
  )
}
