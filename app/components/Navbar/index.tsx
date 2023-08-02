import { useState } from 'react';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const onOpenMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <NavMobile
        menuOpened={menuOpened}
        onClick={onOpenMenu}
      />
      <NavDesktop />
    </>
  );
}

export default Navbar;
