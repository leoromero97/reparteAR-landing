import Image from "next/image";
import clsx from "clsx";

import { assets } from "@/constants/assets";
import { texts } from "@/constants/texts";

export interface IHeroProps {
  className?: string;
}

function Hero({ className }: IHeroProps) {
  return (
    <section
      className={clsx(
        'flex gap-10 max-w-8xl px-8 w-full flex-col items-center pb-10 pt-32 md:flex-row md:pb-30 md:pt-56',
        className,
      )}
    >
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className='font-bold text-center text-h4 md:text-start md:text-h2'>
          {texts.hero.title}
        </h1>
        <p className='text-body max-w-sm md:text-subtitle md:max-w-full'>
          {texts.hero.description}
        </p>
      </div>
      <div className='flex w-[296px] md:w-[571px]'>
        <Image
          src="https://repartear.com/illustration-hero.png"
          alt={assets.heroVector.alt}
          priority
          className="object-cover"
          width={571}
          height={580}
          unoptimized
        />
      </div>
    </section>
  );
}

export default Hero;
