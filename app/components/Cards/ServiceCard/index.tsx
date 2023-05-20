import clsx from "clsx";
import Icon from "@/components/Icon";
import useMobileDetect from "@/hooks/useMobileDetected";
import { IServiceCardProps } from "./types";

function ServiceCard({ className, icon, title }: IServiceCardProps) {
  const isMobile = useMobileDetect();

  return (
    <div
      className={clsx(
        'flex flex-col items-center shrink-0 gap-4 py-4 px-2 lg:px-6 text-skyblue-900 bg-white rounded-xl shadow-drop-3 text-center',
        className
      )}>
      <Icon icon={icon} className={clsx(isMobile ? 'h-11 w-11' : 'h-20 w-20')} />
      <span className={clsx(isMobile ? 'text-label font-medium' : 'text-body font-semibold')}>{title}</span>
    </div>
  );
}

export default ServiceCard;
