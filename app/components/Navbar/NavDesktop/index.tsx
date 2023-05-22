import Button from "@/components/Button";
import { assets } from "@/constants/assets";
import { externalLink } from "@/constants/messageExternal";
import { navbarLinks } from "@/constants/navbarLinks";
import { texts } from "@/constants/texts";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

function NavDesktop() {
  return (
    <div className={clsx(
      'bg-white shadow-drop-3 flex items-center justify-center w-full fixed z-10'
    )}>
      <div className='max-w-8xl flex items-center justify-between w-full px-8 py-7'>
        <Link href="/" title='Ir al Home' className="w-[261px]">
          <Image
            src={assets.logoReparteAR.src}
            alt={assets.logoReparteAR.alt}
            priority
            width={261}
          />
        </Link>
        <ul className="flex items-center gap-2 font-medium">
          {navbarLinks.map((navItem) => (
            <li
              key={navItem.id}
              title={navItem.title}
              className={clsx(
                'w-full flex items-center rounded hover:bg-skyblue-100 text-lg p-2 h-12 w-34 text-center',
              )}
            >
              <Link
                href={navItem.href}
                scroll={false}
                className="w-full hover:text-skyblue active:font-semibold text-sm font-medium"
              >
                {navItem.title}
              </Link>
            </li>
          ))}
          <li className="flex justify-center w-full">
            <Button
              text={texts.actions.requestTrip}
              icon="WhatsApp"
              className="min-w-max"
              external
              to={externalLink}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavDesktop;
