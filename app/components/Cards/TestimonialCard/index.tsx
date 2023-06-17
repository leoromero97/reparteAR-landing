import clsx from "clsx";
import { ITestomonialCardProps } from "./types";
import useTheme from "@/hooks/useTheme";

function TestimonialCard({ className, message, name, href }: ITestomonialCardProps) {
  const { isDark, isLight } = useTheme();
  const customMessage = message.length >= 140 ? message.slice(0, 137) + '...' : message;

  return (
    <a
      href={href}
      target="_blank"
      className={clsx(`
        w-60
        md:w-u280 
        rounded-xl 
        py-4 
        px-2 
        gap-3
        md:gap-5 
        flex 
        flex-col 
        shrink-0 
        hover:cursor-pointer
        hover:ring-skyblue 
        hover:ring-[5px]
        justify-between
        ease-in-out 
        duration-300`,
        isLight && 'bg-white shadow-drop-3',
        isDark && 'bg-skyblue-800',
        className
      )}
    >
      <p className="text-label lg:text-body">
        {customMessage}
      </p>
      <span className="text-body-extra-small md:text-label md:font-bold text-right">
        {name}
      </span>
    </a>
  );
}

export default TestimonialCard;
