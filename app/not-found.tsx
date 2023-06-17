'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Button from '@/components/Button';
import { assets } from '@/constants/assets';
import { texts } from '@/constants/texts';
import useMobileDetect from '@/hooks/useMobileDetected';

export default function NotFoundPage() {
  const isMobile = useMobileDetect();

  return (
    <main className="flex flex-col items-center w-full h-auto min-h-screen">
      <div
        className={clsx(
          'flex gap-10 max-w-8xl px-8 w-full items-center',
          isMobile ? 'flex-col items-center pb-10 pt-32' : 'flex-row py-40 gap-20'
        )}
      >
        <div className={clsx('flex flex-col w-full max-w-3xl gap-6', isMobile && 'items-center')}>
          <h1 className={clsx('font-bold', isMobile ? 'text-h4' : 'text-h2')}>
            {texts.notFound.title}
          </h1>
          <p className={clsx(isMobile ? 'text-body max-w-sm' : 'text-subtitle')}>
            {texts.notFound.description}
          </p>
          <Button
            text={texts.actions.goToMainPage}
            to="https://repartear.com"
            variation="primary"
            className='w-fit'
          />
        </div>
        <div className={clsx('flex', isMobile ? 'w-[296px]' : 'w-[571px]')}>
          <Image
            src={assets.illustrationWebSearching.src}
            alt={assets.illustrationWebSearching.alt}
            priority
            className="object-cover"
            width={571}
          />
        </div>
      </div>
    </main>
  )
}
