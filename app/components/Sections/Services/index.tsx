import clsx from "clsx";
import ServiceCard from "@/components/Cards/ServiceCard";
import HowWeWork from "@/components/Sections/HowWeWork";
import InformationRequired from "@/components/Sections/InformationRequired";
import { services } from "@/constants/services";
import { texts } from "@/constants/texts";
import useMobileDetect from "@/hooks/useMobileDetected";

export interface IServicesProps {
  className?: string;
}

function Services({ className }: IServicesProps) {
  const isMobile = useMobileDetect();

  return (
    <section
      id="servicios"
      className={clsx(
        'flex flex-col items-center w-full',
        isMobile ? 'pt-20 pb-10' : 'py-40',
      )}
    >
      <div className={clsx('flex flex-col max-w-8xl px-8 w-full py-10', className, isMobile && 'items-center')}>
        <span className={clsx(isMobile ? 'text-subtitle font-bold text-center' : 'text-h3 font-bold mb-6')}>
          {texts.services.titleServices}
        </span>
        <div
          className={clsx(
            'flex w-full py-6 overflow-y-hidden',
            isMobile ? 'overflow-scroll gap-4 px-3' : 'flex-wrap gap-10 justify-between'
          )}
        >
          {services.map(({ icon, id, title }) => (
            <ServiceCard key={id} icon={icon} title={title} className={clsx(isMobile ? 'w-36' : 'w-52')} />
          ))}
        </div>
      </div>
      <HowWeWork />
      <InformationRequired />
    </section>
  );
}

export default Services;
