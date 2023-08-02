import TestimonialCard from "@/components/Cards/TestimonialCard";
import OurClients from "@/components/Sections/OurClients";
import { texts } from "@/constants/texts";
import { testimonialsByClients } from "@/constants/testimonialsByClients";

function Testimonials() {
  return (
    <section
      id="testimonios"
      className=
      'flex flex-col items-center w-full pt-20 pb-10 md:py-40'
    >
      <div className='flex flex-col max-w-8xl px-8 w-full py-10 items-center md:items-start'>
        <span className='text-subtitle font-bold text-center md:text-h3 md:font-bold md:mb-6'>
          {texts.commons.testimonials}
        </span>
        <div
          className=
          'flex w-full py-6 overflow-y-hidden overflow-scroll px-3 gap-4 md:flex-wrap md:gap-6 md:justify-between md:overflow-hidden'
        >
          {testimonialsByClients.map(({ id, name, message, href }) => (
            <TestimonialCard
              key={id}
              message={message}
              name={name}
              href={href}
              className='h-46 md:h-64'
            />
          ))}
        </div>
      </div>
      <OurClients />
    </section>
  );
}

export default Testimonials;
