import Image from "next/image";
import clsx from "clsx";
import { assets } from "@/constants/assets";
import { texts } from "@/constants/texts";
import { deliveryRequiredInformation } from "@/constants/deliveryRequiredInformation";
import useMobileDetect from "@/hooks/useMobileDetected";
import useTheme from "@/hooks/useTheme";

function InformationRequired() {
  const isMobile = useMobileDetect();
  const { isDark, isLight } = useTheme();

  return (
    <div className="flex flex-col md:flex-row-reverse items-center max-w-8xl px-8 w-full gap-6 py-10 justify-between">
      <Image
        src="https://repartear.com/Example-msj-wpp.jpg"
        alt={assets.informationRequiredImage.alt}
        width={441}
        height={380}
        className={clsx('rounded-xl shadow-drop-3 shrink-0', isMobile ? 'w-[296px]' : 'w-[540px]')}
        unoptimized
      />
      <div className={clsx('flex flex-col gap-6', isMobile ? 'items-center' : 'items-start')}>
        <span className={clsx(isMobile ? 'text-subtitle text-center' : 'text-h4 font-bold mb-6')}>
          {texts.services.neddedInformation.title}
        </span>
        <ul>
          {deliveryRequiredInformation.map((information, index) => (
            <li key={information.id} className="flex flex-col">
              <div className="flex items-center gap-3">
                <span
                  className={clsx(`
                    h-4 
                    w-4 
                    rounded-full 
                    shrink-0 
                    flex`,
                    isLight && 'bg-skyblue-900',
                    isDark && 'bg-skyblue-200',
                  )}
                ></span>
                <span className="text-label font-medium md:text-body">{information.text}</span>
              </div>
              {(deliveryRequiredInformation.length - 1 !== index) && (
                <div className="flex h-4 w-4 items-center justify-center">
                  <span
                    className={clsx(`
                      h-4 
                      w-[1px] 
                      flex`,
                      isLight && 'bg-skyblue-900',
                      isDark && 'bg-skyblue-200',
                    )}
                  ></span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InformationRequired;
