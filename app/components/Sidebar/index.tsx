import clsx from "clsx";

import Button from "@/components/Button";
import { externalLink } from "@/constants/messageExternal";
import { navbarLinks } from "@/constants/navbarLinks";
import { texts } from "@/constants/texts";
import useMobileDetect from "@/hooks/useMobileDetected";
import { ISidebarProps } from "./types";

function Sidebar({ className, handleOnClick }: ISidebarProps) {
  const isMobile = useMobileDetect();

  return (
    <ul
      className={clsx(
        'flex items-center gap-2',
        className,
        isMobile ? 'flex-col w-full font-normal flex-1 justify-between' : 'flex font-medium',
      )}>
      <div className={clsx("flex w-full", isMobile && 'flex-col flex-shrink-0 pt-40')}>
        {navbarLinks.map((navItem) => (
          <li
            key={navItem.id}
            title={navItem.title}
            className={clsx(
              'w-full flex items-center rounded hover:bg-skyblue-100 text-lg',
              isMobile ? 'py-4 px-8' : 'p-2 h-12 w-34 text-center',
            )}>
            <Button to={navItem.href} variation="text" className="w-full" onClick={handleOnClick}>
              {navItem.title}
            </Button>
          </li>
        ))}
      </div>
      <div className={clsx('flex justify-center w-full', isMobile ? 'pb-12 px-8' : '')}>
        <Button
          text={texts.actions.requestTrip}
          icon="WhatsApp"
          className={isMobile ? 'w-full max-w-sm' : 'min-w-max'}
          external
          to={externalLink}
        />
      </div>
    </ul>
  );
}

export default Sidebar;
