import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { assets } from "@/constants/assets";
import { externalLink } from "@/constants/messageExternal";
import { navbarLinks } from "@/constants/navbarLinks";
import { texts } from "@/constants/texts";
import { INavMobileProps } from "./types";

function NavMobile({ menuOpened, onClick } : INavMobileProps) {
  return (
    <div className={clsx(
      'bg-white shadow-drop-3 flex items-center justify-center w-full fixed z-10',
      menuOpened && 'flex-col z-50  h-screen justify-between'
    )}>
      <div className='max-w-8xl flex items-center justify-between w-full px-8 py-7 '>
        <Link href="/" title='Ir al Home' className="w-[142px]">
          <Image
            src={assets.logoReparteAR.src}
            alt={assets.logoReparteAR.alt}
            priority
            width={142}
          />
        </Link>
        <button
          className="flex items-center justify-center outline-none"
          onClick={onClick}
        >
          <Icon
            icon={menuOpened ? 'Close' : 'Menu'}
            className="text-skyblue transition-all"
          />
        </button>

      </div>
      {menuOpened && (
        <ul
          className={clsx(
            'flex items-center gap-2 flex-col w-full font-normal flex-1 justify-between',
          )}>
          <div className={clsx("flex w-full", 'flex-col flex-shrink-0 pt-40')}>
            {navbarLinks.map((navItem) => (
              <li
                key={navItem.id}
                title={navItem.title}
                className={clsx(
                  'w-full flex items-center rounded hover:bg-skyblue-100 text-lg',
                  'py-4 px-8',
                )}
                onClick={onClick}
              >
                <Link
                  href={navItem?.href}
                  scroll={false}
                  className="w-full hover:text-skyblue active:font-semibold text-sm font-medium"
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
          </div>
          <div className={clsx('flex justify-center w-full', 'pb-12 px-8')}>
            <Button
              text={texts.actions.requestTrip}
              icon="WhatsApp"
              className={'w-full max-w-sm'}
              external
              to={externalLink}
            />
          </div>
        </ul>
      )}
    </div>
  );
}

export default NavMobile;
