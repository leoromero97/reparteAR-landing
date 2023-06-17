import Image from "next/image";
import clsx from "clsx";
import { ICollaboratorCardProps } from "./types";
import Icon from "@/components/Icon";
import useTheme from "@/hooks/useTheme";

function CollaboratorCard({ className, name, image, roles }: ICollaboratorCardProps) {
  const { isDark, isLight } = useTheme();

  return (
    <div 
      className={clsx(`
        w-[276px] 
        md:w-60 
        rounded-xl 
        py-4 
        px-2 
        gap-2 
        flex 
        flex-col 
        shrink-0 
        items-center`,
        isLight && 'bg-white shadow-drop-3',
        isDark && 'bg-skyblue-800',
        className)}>
      {image?.src ? (
        <div className="w-20 h-20 md:w-[140px] md:h-[140px] flex ease-in-out">
          <Image
            src={image.src}
            alt={image.alt}
            width={140}
            height={140}
            className="border-[5px] border-skyblue rounded-full object-cover"
          />
        </div>
      ) : (
        <Icon icon="User" className="w-20 h-20 md:w-[140px] md:h-[140px] text-skyblue border-[5px] border-skyblue rounded-full" />
      )}
      <span className="text-body font-semibold md:text-subtitle">
        {name}
      </span>
      <ul className="flex flex-wrap gap-1 text-center justify-center">
        {roles && roles?.map((role, index) => (
          <li
            key={role}
            className="flex items-center justify-center gap-1 text-body-extra-small font-semibold md:text-label md:font-bold break-words"
          >
            <span>
              {role}
            </span>
            {(roles.length - 1 !== index) && (
              <span>-</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollaboratorCard;
