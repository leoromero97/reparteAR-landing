import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import Icon from '../Icon';
import Sidebar from '../Sidebar';
import { assets } from '../../constants/assets';
import useMobileDetect from '../../hooks/useMobileDetected';

import { INavbarProps } from './types';
import Link from 'next/link';

function Navbar({ className }: INavbarProps) {
  const isMobile = useMobileDetect();
  const [menuOpened, setMenuOpened] = useState(false);
  const onOpenMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className={clsx(
      'bg-white shadow-drop-3 flex items-center justify-center w-full sticky',
      className,
      menuOpened && 'flex-col z-50  h-screen justify-between'
    )}>
      <div className='max-w-7xl flex items-center justify-between w-full px-8 py-7'>
        <Link href="/" title='Ir al Home'>
          <Image
            src={assets.reparteARLogotipo.src}
            alt={assets.reparteARLogotipo.alt}
            height={assets.reparteARLogotipo.dimensions.height}
            width={assets.reparteARLogotipo.dimensions.width}
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
