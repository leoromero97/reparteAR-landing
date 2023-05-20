import clsx from "clsx";
import { ITestomonialCardProps } from "./types";

function TestimonialCard({ className, message, name }: ITestomonialCardProps) {
  return (
    <div className={clsx('w-60 md:w-u280 rounded-xl py-4 px-2 gap-5 bg-white shadow-drop-3 flex flex-col shrink-0', className)}>
      <p className="text-label md:text-body">{message}</p>
      <span className="text-body-extra-small md:text-label md:font-bold text-right">{name}</span>
    </div>
  );
}

export default TestimonialCard;
