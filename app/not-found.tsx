import Image from 'next/image';
import Button from '@/components/Button';
import { assets } from '@/constants/assets';
import { texts } from '@/constants/texts';

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center w-full h-auto min-h-screen">
      <div
        className='flex gap-10 max-w-8xl px-8 w-full items-center flex-col pb-10 pt-32 md:flex-row md:py-40 md:gap-20'
      >
        <div className='flex flex-col w-full max-w-3xl gap-6 items-center md:items-start'>
          <h1 className='font-bold text-h4 md:text-h2'>
            {texts.notFound.title}
          </h1>
          <p className='text-body max-w-sm md:text-subtitle'>
            {texts.notFound.description}
          </p>
          <Button
            text={texts.actions.goToMainPage}
            to="https://repartear.com"
            variation="primary"
            className='w-fit'
          />
        </div>
        <div className='flex w-[296px] md:w-[571px]'>
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
  );
}
