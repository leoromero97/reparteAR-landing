import ServiceCard from "@/components/Cards/ServiceCard";
import HowWeWork from "@/components/Sections/HowWeWork";
import InformationRequired from "@/components/Sections/InformationRequired";
import { services } from "@/constants/services";
import { texts } from "@/constants/texts";

function Services() {
  return (
    <section
      id="servicios"
      className='flex flex-col items-center w-full pt-20 pb-10 md:py-40'
    >
      <div className='flex flex-col max-w-8xl px-8 w-full py-10 items-center md:items-start'>
        <span className='text-subtitle font-bold sm:text-center md:text-h3 md:font-bold md:mb-6'>
          {texts.services.titleServices}
        </span>
        <div
          className='flex w-full py-6 overflow-y-hidden overflow-scroll gap-4 px-3 md:flex-wrap md:gap-10 md:justify-between md:overflow-hidden'
        >
          {services.map(({ icon, id, title }) => (
            <ServiceCard key={id} icon={icon} title={title} className='w-36 md:w-52' />
          ))}
        </div>
      </div>
      <HowWeWork />
      <InformationRequired />
    </section>
  );
}

export default Services;
