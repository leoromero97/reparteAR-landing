import clsx from "clsx";
import Icon from "@/components/Icon";
import { texts } from "@/constants/texts";

type TToggleTheme = {
  className?: string;
  handleToggleTheme: () => void;
  theme: string;
  isDark: boolean;
}

function ToggleTheme({ className, handleToggleTheme, isDark, theme }: TToggleTheme) {
  const themeLabel = texts.commons.theme.concat(' ', theme);
  return (
    <div
      className={clsx(`
        flex 
        items-center 
        gap-2 
        cursor-pointer 
        border 
        w-fit 
        rounded-full
        ease-in-out
        duration-100`,
        isDark ? 'pl-3 border-r-0 bg-skyblue-900' : 'pr-3 border-l-0 bg-skyblue-white',
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
          h-8 
          w-8
          text-skyblue-600
          `,
          isDark ? 'bg-skyblue-200 order-2' : 'bg-skyblue-900 order-1',
        )}
      >
        <Icon icon={isDark ? 'Sun' : 'Moon'} />
      </div>
      <span
        className={clsx('text-label', isDark ? 'order-1' : 'order-2')}
      >
        {themeLabel}
      </span>
    </div>
  );
}

export default ToggleTheme;
