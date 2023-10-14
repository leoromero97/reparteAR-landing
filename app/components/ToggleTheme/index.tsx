import clsx from "clsx";
import Icon from "@/components/Icon";
import { texts } from "@/constants/texts";

type TToggleTheme = {
  className?: string;
  handleToggleTheme: () => void;
  theme?: string;
  isDark?: boolean;
  isLight?: boolean;
}

function ToggleTheme({ className, handleToggleTheme, isDark, isLight, theme }: TToggleTheme) {
  const themeLabel = texts.commons.theme.concat(' ', theme);
  return (
    <div
      className={clsx(`
        flex 
        items-center 
        cursor-pointer 
        w-fit 
        rounded-full
        ease-in-out
        duration-100`,
        theme && isDark && 'pl-3 border-r-0 bg-skyblue-90',
        theme && isLight && 'pr-3 border-l-0 bg-skyblue-white',
        theme ? 'border gap-2' : 'p-0',
        className
      )}
      onClick={handleToggleTheme}
    >
      <div
        className={clsx(`
          flex
          items-center
          justify-center  
          rounded-full
          h-12 
          w-12
          text-skyblue-60
          ease-in-out
          duration-300
          `,
          isDark && 'bg-skyblue-20 order-2 hover:bg-skyblue-90',
          isLight && 'bg-skyblue-90 order-1 hover:bg-skyblue-10',
        )}
      >
        <Icon icon={isDark ? 'Sun' : 'Moon'} />
      </div>
      {theme && (
        <span
          className={clsx('text-label font-medium ', isDark ? 'order-1' : 'order-2')}
        >
          {themeLabel}
        </span>
      )}
    </div>
  );
}

export default ToggleTheme;
