import clsx from "clsx";
import Icon from "@/components/Icon";
import useMobileDetect from "@/hooks/useMobileDetected";
import { IServiceCardProps } from "./types";
import useTheme from "@/hooks/useTheme";

function ServiceCard({ className, icon, title }: IServiceCardProps) {
  const isMobile = useMobileDetect();
  const { isDark, isLight } = useTheme();

  return (
    <div
      className={clsx(
        'flex flex-col items-center shrink-0 gap-4 py-4 px-2 lg:px-6 rounded-xl text-center',
        className,
        isDark && 'bg-skyblue-800 text-skyblue-200',
        isLight && 'bg-white text-skyblue-900 shadow-drop-3',
      )}>
      <Icon icon={icon} className={clsx(isMobile ? 'h-11 w-11' : 'h-20 w-20')} />
      <span className={clsx(isMobile ? 'text-label font-medium' : 'text-body font-semibold')}>
        {title}
      </span>
    </div>
  );
}

export default ServiceCard;
