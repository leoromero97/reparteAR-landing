import clsx from "clsx";
import { services } from "../../../constants/services";
import { texts } from "../../../constants/texts";
import useMobileDetect from "../../../hooks/useMobileDetected";
import ServiceCard from "../../Cards/ServiceCard";

export interface IServicesProps {
  className?: string;
}

function Services({ className }: IServicesProps) {
  const isMobile = useMobileDetect();

  return (
    <section className="flex flex-col items-center w-full bg-skyblue-100">
      <div className={clsx('flex flex-col max-w-7xl px-8 w-full', className, isMobile ? 'items-center py-10' : 'py-40')}>
        <h3 className={clsx(isMobile ? 'text-subtitle font-bold' : 'text-h3 font-bold mb-6')}>{texts.services.titleServices}</h3>
        <div className={clsx('flex w-full py-6', isMobile ? 'overflow-scroll gap-4' : 'flex-wrap gap-10')}>
          {services.map(({ icon, id, title }) => (
            <ServiceCard key={id} icon={icon} title={title} className={clsx(isMobile ? 'w-36' : 'w-52')} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
