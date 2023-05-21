import clsx from "clsx";
import { IChipProps } from "./types";

function Chip({ className, isActive = false, onclick, text }: IChipProps) {
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
        md:hover:bg-skyblue-200
        md:hover:text-skyblue-600
        active:bg-skyblue-200
        active:text-skyblue-100`,
        className,
        isActive ? 'bg-skyblue-600 text-skyblue-100 border-skyblue-100' :
          'border-skyblue-600 text-skyblue-100 bg-skyblue-200',
      )}
      onClick={onclick}
    >
      <span className={clsx(
        'text-label md:hover:text-skyblue-600',
        isActive ? 'text-skyblue-100' : 'text-skyblue-600'
      )}
      >
        {text}
      </span>
    </button>
  );
}

export default Chip;
