import clsx from "clsx";
import { texts } from "@/constants/texts";
import { socialNetworks } from "@/constants/socialNetworks";
import Icon from "@/components/Icon";
import useTheme from "@/hooks/useTheme";

function Footer() {
  const { isDark, isLight } = useTheme();
  const date = new Date();
  const rightsReserved = `©`.concat(' 2020 - ' + date.getFullYear().toString() + ' ' + texts.commons.allRightsReserved);

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
        'flex flex-col max-w-8xl w-full p-8 items-center gap-12 pt-24 pb-40 md:justify-between'
      )}
      >
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-12 md:py-20">
          <div className="flex flex-col items-center gap-4">
            <span className='text-center text-subtitle md:text-h4 md:font-bold'>
              {texts.commons.followUs}
            </span>
            <ul className="flex items-center gap-4">

              {socialNetworks.map(({ href, icon, id, name }) => (
                <li key={id}>
                  <a href={href} target="_blank" title={name} className="hover:text-skyblue ease-in-out duration-300">
                    <Icon icon={icon} className='w-6 h-6 md:w-11 md:h-11' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className='font-semibold text-center text-body-extra-small md:text-body'>
              {rightsReserved}
            </span>
            <Icon icon="ReparteAR" className='w-[100px] h-4 md:w-[178px] md:h-[30px]' />
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
