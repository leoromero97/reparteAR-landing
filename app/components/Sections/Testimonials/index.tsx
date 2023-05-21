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
    <section id="testimonios" className="flex flex-col items-center w-full py-20">
      <div className={clsx('flex flex-col max-w-7xl px-8 w-full py-10', className, isMobile && 'items-center')}>
        <h3 className={clsx(isMobile ? 'text-subtitle font-bold text-center' : 'text-h3 font-bold mb-6')}>
          {texts.commons.testimonials}
        </h3>
        <div className={clsx('flex w-full py-6 overflow-y-hidden', isMobile ? 'overflow-scroll px-3 gap-4' : 'flex-wrap gap-6')}>
          {testimonialsByClients.map(({ id, name, message }) => (
            <TestimonialCard key={id} message={message} name={name} />
          ))}
        </div>
      </div>
      <OurClients />
    </section>
  );
}

export default Testimonials;
