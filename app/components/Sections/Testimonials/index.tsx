import clsx from "clsx";
import TestimonialCard from "@/components/Cards/TestimonialCard";
import { texts } from "@/constants/texts";
import { testimonialsByClients } from "@/constants/testimonialsByClients";
import useMobileDetect from "@/hooks/useMobileDetected";
import OurClients from "@/components/Sections/OurClients";

export interface ITestimonialsProps {
  className?: string;
}

function Testimonials({ className }: ITestimonialsProps) {
  const isMobile = useMobileDetect();

  return (
    <section
      id="testimonios"
      className={clsx(
        'flex flex-col items-center w-full',
        isMobile ? 'pt-20 pb-10' : 'py-40',
      )}
    >
      <div className={clsx('flex flex-col max-w-8xl px-8 w-full py-10', className, isMobile && 'items-center')}>
        <span className={clsx(isMobile ? 'text-subtitle font-bold text-center' : 'text-h3 font-bold mb-6')}>
          {texts.commons.testimonials}
        </span>
        <div
          className={clsx(
            'flex w-full py-6 overflow-y-hidden px-2',
            isMobile ? 'overflow-scroll px-3 gap-4' : 'flex-wrap gap-6 justify-between'
          )}
        >
          {testimonialsByClients.map(({ id, name, message, href }) => (
            <TestimonialCard
              key={id}
              message={message}
              name={name}
              href={href}
              className={isMobile ? 'h-46' : 'h-64'}
            />
          ))}
        </div>
      </div>
      <OurClients />
    </section>
  );
}

export default Testimonials;
