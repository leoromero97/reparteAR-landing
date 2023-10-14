import clsx from "clsx";
import { IChipProps } from "./types";
import useTheme from "@/hooks/useTheme";

function Chip({ className, isActive = false, onclick, text }: IChipProps) {
  const { isDark, isLight } = useTheme();

  return (
    <button
      className={clsx(`
        flex
        items-center
        text-center 
        py-1 
        px-4 
        rounded-lg 
        border 
        text-label
        `,
        className,
        isLight && !isActive && 'hover:bg-skyblue-30',
        isDark && !isActive && 'hover:bg-skyblue-80',
        isActive && isLight && !isDark &&
          'bg-skyblue-60 hover:cursor-not-allowed text-skyblue-10 border-skyblue-10',
          !isActive && isLight && !isDark && 'border-skyblue-60 text-skyblue-60 bg-skyblue-10',
          isActive && isDark && !isLight &&
          'bg-skyblue-60 hover:cursor-not-allowed text-skyblue-10 border-skyblue-20',
          !isActive && isDark && !isLight && 'border-skyblue-60 text-skyblue-60 bg-skyblue-90',
      )}
      onClick={onclick}
    >
      {text}
    </button>
  );
}

export default Chip;
