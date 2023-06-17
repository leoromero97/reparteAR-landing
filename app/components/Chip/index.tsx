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
        isLight && !isActive && 'hover:bg-skyblue-300',
        isDark && !isActive && 'hover:bg-skyblue-800',
        isActive && isLight && !isDark &&
          'bg-skyblue-600 hover:cursor-not-allowed text-skyblue-100 border-skyblue-100',
          !isActive && isLight && !isDark && 'border-skyblue-600 text-skyblue-600 bg-skyblue-100',
          isActive && isDark && !isLight &&
          'bg-skyblue-600 hover:cursor-not-allowed text-skyblue-100 border-skyblue-200',
          !isActive && isDark && !isLight && 'border-skyblue-600 text-skyblue-600 bg-skyblue-900',
      )}
      onClick={onclick}
    >
      {text}
    </button>
  );
}

export default Chip;
