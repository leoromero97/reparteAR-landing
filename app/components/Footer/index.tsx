import clsx from "clsx";
import useMobileDetect from "@/hooks/useMobileDetected";
import { texts } from "@/constants/texts";
import { socialNetworks } from "@/constants/socialNetworks";
import Icon from "../Icon";
import useTheme from "@/hooks/useTheme";

export interface IFooterProps {
  className?: string;
}

function Footer({ className }: IFooterProps) {
  const isMobile = useMobileDetect();
  const { isDark, isLight } = useTheme();
  const date = new Date();
  const rightsReserved = `©`.concat(' ' + date.getFullYear().toString() + ' ' + texts.commons.allRightsReserved);

  return (
    <footer
      className={clsx(`
      w-full 
      flex 
      flex-col 
      items-center`,
      isLight && 'bg-skyblue-200',
      isDark && 'bg-skyblue-800',
      )}
    >
      <div className={clsx(
        'flex flex-col max-w-8xl w-full p-8',
        className,
        isMobile ? 'items-center gap-12 py-32' : 'justify-between'
      )}
      >
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-12 md:py-20">
          <div className="flex flex-col items-center gap-4">
            <span className={clsx('text-center', isMobile ? 'text-subtitle' : 'text-h4 font-bold')}>
              {texts.commons.followUs}
            </span>
            <ul className="flex items-center gap-4">

              {socialNetworks.map(({ href, icon, id, name }) => (
                <li key={id}>
                  <a href={href} target="_blank" title={name} className="hover:text-skyblue ease-in-out duration-300">
                    <Icon icon={icon} className={isMobile ? 'w-6 h-6' : 'w-11 h-11'} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className={clsx('font-semibold text-center', isMobile ? 'text-body-extra-small' : 'text-body')}>
              {rightsReserved}
            </span>
            <Icon icon="ReparteAR" className={isMobile ? 'w-[100px] h-4' : 'w-[178px] h-[30px]'} />
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/leonardogerbacioromero/"
          target="_blank"
          className="flex flex-col items-center gap-2 hover:text-skyblue ease-in-out duration-300"
        >
          <span className="text-label font-bold">
            {texts.commons.didYouLikeThisLandingPage}
          </span>
          <span className="text-label text-center">
            {texts.commons.developmentBy}
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
