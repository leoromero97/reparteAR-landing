import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import ToggleTheme from "@/components/ToggleTheme";
import { assets } from "@/constants/assets";
import { externalLink } from "@/constants/messageExternal";
import { navbarLinks } from "@/constants/navbarLinks";
import { texts } from "@/constants/texts";
import useTheme from "@/hooks/useTheme";
import { INavMobileProps } from "./types";

function NavMobile({ menuOpened, onClick }: INavMobileProps) {
  const { isDark, isLight, labelTheme, toggleTheme } = useTheme();

  return (
    <div className={clsx(
      'flex items-center justify-center w-full fixed z-10',
      menuOpened && 'flex-col z-50  h-screen justify-between',
      isDark && 'bg-skyblue-800 text-skyblue-200',
      isLight && 'bg-white text-skyblue-900 shadow-drop-3',
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
        <div
          className="flex items-center justify-center outline-none hover:cursor-pointer"
          onClick={onClick}
        >
          <Icon
            icon={menuOpened ? 'Close' : 'Menu'}
            className="text-skyblue transition-all"
          />
        </div>
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
                className="w-full flex items-center"
                onClick={onClick}
              >
                <Link
                  href={navItem?.href}
                  scroll={false}
                  className={clsx(`
                    w-full 
                    hover:text-skyblue 
                    active:font-semibold 
                    font-medium 
                    rounded  
                    text-lg 
                    ease-in-out 
                    duration-100 
                    py-4 
                    px-8`,
                    isDark && 'hover:bg-skyblue-900',
                    isLight && 'hover:bg-skyblue-100',
                  )}
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
          </div>
          <div className="flex flex-col justify-center w-full pb-14 px-8 gap-8">
            <ToggleTheme
              handleToggleTheme={toggleTheme}
              isDark={isDark}
              theme={labelTheme}
            />
          </div>
          <div className="flex justify-center w-full pb-14 px-8 gap-8">
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
