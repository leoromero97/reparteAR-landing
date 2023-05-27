import Image from "next/image";
import clsx from "clsx";
import { clients } from "@/constants/clients";
import { texts } from "@/constants/texts";
import useMobileDetect from "@/hooks/useMobileDetected";

function OurClients() {
  const isMobile = useMobileDetect();

  return (
    <div className="flex flex-col max-w-8xl px-8 w-full gap-6 pt-10">
      <span className={clsx(isMobile ? 'text-subtitle text-center' : 'text-h4 font-bold mb-6')}>
        {texts.commons.theyTrustUs}
      </span>
      <div className={clsx('flex w-full py-6 overflow-y-hidden', isMobile ? 'overflow-scroll px-3 gap-4' : 'flex-wrap gap-14')}>
        {clients.map(({ href, id, logo}) => (
          <a
            href={href}
            target="_blank"
            key={id}
            className="flex w-14 md:w-28 h-14 md:h-28 shadow-drop-3 rounded-full shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              title={logo.alt}
              className="object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default OurClients;
