import { useEffect, useState } from 'react';

import { breakpointDesktop } from '../constants/breakpoints';

function useMobileDetect(width = breakpointDesktop): boolean {
  const [isMobile, setIsMobile] = useState(false);
  const handleSizeChange = () => setIsMobile(window.innerWidth < width);
  useEffect(() => {
    setIsMobile(window.innerWidth < width);
    window.addEventListener('resize', handleSizeChange);
    return () => {
      window.removeEventListener('resize', handleSizeChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isMobile;
}

export default useMobileDetect;