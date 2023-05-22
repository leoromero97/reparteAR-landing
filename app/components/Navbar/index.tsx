import { useState } from 'react';
import Image from 'next/image';
import useMobileDetect from '@/hooks/useMobileDetected';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function Navbar() {
  const isMobile = useMobileDetect();
  const [menuOpened, setMenuOpened] = useState(false);
  const onOpenMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    isMobile ? (
      <NavMobile menuOpened={menuOpened} onClick={onOpenMenu} />
    ) : (
      <NavDesktop />
    )
  );
}

export default Navbar;
