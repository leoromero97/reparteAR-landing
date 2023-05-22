import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/Button";
import { assets } from "@/constants/assets";
import { texts } from "@/constants/texts";
import useMobileDetect from "@/hooks/useMobileDetected";
import { externalLink } from "@/constants/messageExternal";

function MessageTech() {
  const isMobile = useMobileDetect();

  return (
    <div
      className="flex flex-col items-center max-w-7xl px-8 w-full gap-12 md:gap-20 py-10">
      <div className={clsx('flex w-full items-center gap-12', isMobile ? 'flex-col text-center' : 'flex-row text-start')}>
        <span className="text-subtitle font-medium md:text-h3 md:font-bold">
          {texts.commons.techMessage}
        </span>
        <div className="flex w-u296 md:w-[580px] flex-shrink-0">
          <Image src={assets.illustrationBuild.src} alt={assets.illustrationBuild.alt} className="object-cover" />
        </div>
      </div>
      {!isMobile && (
        <div className="flex justify-center w-full py-2">
          <Button
            text={texts.actions.requestTrip}
            icon="WhatsApp"
            className="w-full max-w-sm"
            external
            to={externalLink}
          />
        </div>
      )}
    </div>
  );
}

export default MessageTech;
