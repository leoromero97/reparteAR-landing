import Image from "next/image";
import { assets } from "@/constants/assets";
import { texts } from "@/constants/texts";
import useMobileDetect from "@/hooks/useMobileDetected";
import clsx from "clsx";

function MessageTech() {
  const isMobile = useMobileDetect();

  return (
    <div
      className={clsx(
        'flex items-center max-w-7xl px-8 w-full gap-12',
        isMobile ? 'flex-col py-10' : 'flex-row py-20', 
      )}
    >
      <span className="text-subtitle font-medium text-center md:text-start md:text-h3 md:font-bold">
        {texts.commons.techMessage}
      </span>
      <div className="flex w-u296 md:w-[580px] flex-shrink-0">
        <Image src={assets.illustrationBuild.src} alt={assets.illustrationBuild.alt} className="object-cover" />
      </div>
    </div>
  );
}

export default MessageTech;
