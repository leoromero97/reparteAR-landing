import clsx from "clsx";
import Icon from "@/components/Icon";
import useTheme from "@/hooks/useTheme";
import { IServiceCardProps } from "./types";

function ServiceCard({ className, icon, title }: IServiceCardProps) {
  const { isDark, isLight } = useTheme();

  return (
    <div
      className={clsx(
        'flex flex-col items-center shrink-0 gap-4 py-4 px-2 lg:px-6 rounded-xl text-center',
        className,
        isDark && 'bg-skyblue-80 text-skyblue-20',
        isLight && 'bg-white text-skyblue-90 shadow-drop-3',
      )}>
      <Icon icon={icon} className='h-11 w-11 md:h-20 md:w-20' />
      <span className='text-label font-medium md:text-body md:font-semibold'>
        {title}
      </span>
    </div>
  );
}

export default ServiceCard;
