import { useState } from 'react';
import useMobileDetect from '@/hooks/useMobileDetected';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

type INavbar = {
  isMobile: boolean;
}

function Navbar({ isMobile }: INavbar) {
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
