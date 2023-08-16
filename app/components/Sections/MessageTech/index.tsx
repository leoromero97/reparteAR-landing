import Image from "next/image";
import Button from "@/components/Button";
import { assets } from "@/constants/assets";
import { texts } from "@/constants/texts";
import { externalLink } from "@/constants/messageExternal";

function MessageTech() {
  return (
    <div
      className="flex flex-col items-center max-w-8xl px-8 w-full gap-12 md:gap-20 py-10">
      <div className='flex w-full items-center gap-12 flex-col text-center md:flex-row md:text-start'>
        <span className="text-subtitle font-medium lg:text-h3 lg:font-bold">
          {texts.commons.techMessage}
        </span>
        <div className="flex w-u296 lg:w-[580px] flex-shrink-0">
          <Image
            src={assets.illustrationBuild.src}
            alt={assets.illustrationBuild.alt}
            className="object-cover"
          />
        </div>
      </div>
      <div className="hidden md:flex justify-center w-full py-2">
        <Button
          text={texts.actions.requestTrip}
          icon="WhatsApp"
          external
          to={externalLink}
        />
      </div>
    </div>
  );
}

export default MessageTech;
