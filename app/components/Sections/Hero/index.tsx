import Image from "next/image";
import clsx from "clsx";

import { assets } from "../../../constants/assets";
import { texts } from "../../../constants/texts";
import useMobileDetect from "../../../hooks/useMobileDetected";

export interface IHeroProps {
  className?: string;
}

function Hero({ className }: IHeroProps) {
  const isMobile = useMobileDetect();

  return (
    <section className={clsx('flex gap-10 max-w-7xl px-8', className, isMobile ? 'flex-col items-center pb-10 pt-32' : 'flex-row py-40')}>
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className={clsx('font-bold', isMobile ? 'text-center text-h4' : 'text-start text-h2')}>{texts.hero.title}</h1>
        <p className={clsx(isMobile ? 'text-body max-w-sm' : 'text-subtitle')}>{texts.hero.description}</p>
      </div>
      <Image
        src={assets.heroVector.src}
        alt={assets.heroVector.alt}
        priority
        className={clsx(isMobile ? 'w-[296px]' : 'w-[571px]')}
      />
    </section>
  );
}

export default Hero;