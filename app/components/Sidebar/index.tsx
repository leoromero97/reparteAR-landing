import clsx from "clsx";

import Button from "../Button";
import { navbarLinks } from "../../constants/navbarLinks";
import useMobileDetect from "../../hooks/useMobileDetected";
import { ISidebarProps } from "./types";

function Sidebar({ className, handleOnClick }: ISidebarProps) {
  const isMobile = useMobileDetect();

  return (
    <ul
      className={clsx(
        'flex items-center gap-2',
        className,
        isMobile ? 'flex-col w-full font-normal flex-1 justify-center' : 'flex font-medium',
      )}>
      {navbarLinks.map((navItem) => (
        <li
          key={navItem.id}
          className={clsx(
            'w-full flex items-center rounded hover:bg-skyblue-100 text-lg',
            isMobile ? 'py-4 px-8' : 'p-2 h-12 w-34 text-center',
          )}>
          <Button to={navItem.href} variation="text" className="w-full" onClick={handleOnClick}>
            {navItem.title}
          </Button>
        </li>
      ))}
      <div className={clsx('flex justify-center w-full', isMobile ? 'py-20 px-8' : '')}>
        <Button text="Pedir envio" icon="WhatsApp" className={isMobile ? 'w-full max-w-sm' : 'min-w-max'} />
      </div>
    </ul>
  );
}

export default Sidebar;
