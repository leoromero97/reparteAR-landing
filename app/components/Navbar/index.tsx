import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import Icon from '../Icon';
import Sidebar from '../Sidebar';
import { assets } from '../../constants/assets';
import useMobileDetect from '../../hooks/useMobileDetected';

import { INavbarProps } from './types';

function Navbar({ className }: INavbarProps) {
  const isMobile = useMobileDetect();
  const [menuOpened, setMenuOpened] = useState(false);
  const onOpenMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className={clsx(
      'bg-white shadow-drop-3 flex items-center justify-center w-full fixed',
      className,
      menuOpened && 'flex-col z-50  h-screen justify-between'
    )}>
      <div className='max-w-7xl flex items-center justify-between w-full px-8 py-7'>
        <Link href="/" title='Ir al Home'>
          <Image
            src={assets.logoReparteAR.src}
            alt={assets.logoReparteAR.alt}
            className={clsx(isMobile ? 'w-[142px]' : 'w-[261px]')}
          />
        </Link>
        {isMobile ? (
          <button
            className="flex items-center justify-center outline-none"
            onClick={onOpenMenu}
          >
            <Icon
              icon={menuOpened ? 'Close' : 'Menu'}
              className="text-skyblue transition-all"
            />
          </button>
        ) : (
          <Sidebar handleOnClick={onOpenMenu} />
        )}
      </div>
      {menuOpened && isMobile && (
        <Sidebar handleOnClick={onOpenMenu} />
      )}
    </div>
  );
}

export default Navbar;
