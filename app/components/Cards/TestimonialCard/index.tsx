import clsx from "clsx";
import { ITestomonialCardProps } from "./types";

function TestimonialCard({ className, message, name, href }: ITestomonialCardProps) {
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
        gap-5 
        bg-white 
        shadow-drop-3 
        flex 
        flex-col 
        shrink-0 
        hover:cursor-pointer
        hover:ring-skyblue 
        hover:ring-[5px]
        justify-between
        ease-in-out 
        duration-300`,
        className
      )}
    >
      <p className="text-label md:text-body">
        {customMessage}
      </p>
      <span className="text-body-extra-small md:text-label md:font-bold text-right">{name}</span>
    </a>
  );
}

export default TestimonialCard;
