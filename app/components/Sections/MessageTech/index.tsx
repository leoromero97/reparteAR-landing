import Image from "next/image";
import { assets } from "@/constants/assets";
import { texts } from "@/constants/texts";

function MessageTech() {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl px-8 w-full gap-6 md:gap-12 py-10 md:py-20">
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
