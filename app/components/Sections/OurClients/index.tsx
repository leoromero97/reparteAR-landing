import Image from "next/image";
import { clients } from "@/constants/clients";
import { texts } from "@/constants/texts";

function OurClients() {
  return (
    <div className="flex flex-col max-w-8xl px-8 w-full gap-6 pt-10 items-center md:items-start">
      <span className='text-subtitle text-center md:text-h4 md:font-bold md:mb-6'>
        {texts.commons.theyTrustUs}
      </span>
      <div className='flex w-full py-6 overflow-y-hidden px-2 md:flex-wrap gap-4 md:gap-14 md:overflow-hidden'>
        {clients.map(({ href, id, logo }) => (
          <a
            href={href}
            target="_blank"
            key={id}
            className="flex w-14 md:w-28 h-14 md:h-28 shadow-drop-3 rounded-full shrink-0 hover:ring-skyblue hover:ring-[5px] ease-in-out duration-300"
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
