import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/Button";
import ToggleTheme from "@/components/ToggleTheme";
import { assets } from "@/constants/assets";
import { externalLink } from "@/constants/messageExternal";
import { navbarLinks } from "@/constants/navbarLinks";
import { texts } from "@/constants/texts";
import useTheme from "@/hooks/useTheme";

function NavDesktop() {
  const { isDark, isLight, toggleTheme } = useTheme();

  return (
    <header className={clsx(
      `flex items-center 
      justify-center 
      w-full 
      fixed z-10`,
      isDark && 'bg-skyblue-800 text-skyblue-200',
      isLight && 'bg-white text-skyblue-900 shadow-drop-3',
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
              className="w-full flex items-center"
            >
              <Link
                href={navItem.href}
                scroll={false}
                className={clsx(
                  `w-full 
                  hover:text-skyblue 
                  active:font-semibold 
                  font-medium 
                  ease-in-out 
                  duration-100 
                  rounded 
                  text-lg 
                  py-2
                  px-3 
                  h-12 
                  w-34 
                  text-center`,
                  isDark && 'hover:bg-skyblue-900',
                  isLight && 'hover:bg-skyblue-100',
                )}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
          <li>
            <ToggleTheme
              handleToggleTheme={toggleTheme}
              isDark={isDark}
              isLight={isLight}
              className="mx-4"
            />
          </li>
          <li>
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
    </header>
  );
}

export default NavDesktop;
