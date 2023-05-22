import Image from "next/image";
import clsx from "clsx";
import { assets } from "@/constants/assets";
import { texts } from "@/constants/texts";
import { deliveryRequiredInformation } from "@/constants/deliveryRequiredInformation";
import useMobileDetect from "@/hooks/useMobileDetected";

function InformationRequired() {
  const isMobile = useMobileDetect();

  return (
    <div className="flex flex-col md:flex-row-reverse items-center max-w-8xl px-8 w-full gap-6 py-10 justify-between">
      <Image
        src={assets.informationRequiredImage.src}
        alt={assets.informationRequiredImage.alt}
        className={clsx('rounded-xl shadow-drop-3 shrink-0', isMobile ? 'w-[296px]' : 'w-[540px]')}
      />
      <div className={clsx('flex flex-col gap-6', isMobile ? 'items-center' : 'items-start')}>
        <span className={clsx(isMobile ? 'text-subtitle text-center' : 'text-h4 font-bold mb-6')}>
          {texts.services.neddedInformation.title}
        </span>
        <ul>
          {deliveryRequiredInformation.map((information, index) => (
            <div key={information.id} className="flex flex-col">
              <li className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-skyblue-900 shrink-0 flex"></span>
                <span className="text-label font-medium md:text-body">{information.text}</span>
              </li>
              {(deliveryRequiredInformation.length - 1 !== index) && (
                <div className="flex h-4 w-4 items-center justify-center">
                  <span className="h-4 w-[1px] bg-skyblue-900 flex"></span>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InformationRequired;
