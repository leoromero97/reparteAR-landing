import Image from "next/image";
import clsx from "clsx";
import { ICollaboratorCardProps } from "./types";

function CollaboratorCard({ className, name, image, roles }: ICollaboratorCardProps) {
  return (
    <div className={clsx('w-[276px] md:w-60 rounded-xl py-4 px-2 gap-2 bg-white shadow-drop-3 flex flex-col shrink-0 items-center', className)}>
      {image?.src && (
        <div className="w-20 h-20 md:w-[140px] md:h-[140px] flex">
          <Image src={image.src} alt={image.alt} className="border-2 border-skyblue rounded-full" />
        </div>
      )}
      <span className="text-body font-semibold text-skyblue md:text-subtitle">
        {name}
      </span>
      <ul className="flex flex-wrap gap-1 text-center justify-center">
        {roles && roles?.map((role, index) => (
          <div
            key={role}
            className="flex items-center justify-center gap-1 text-body-extra-small font-semibold md:text-label md:font-bold break-words"
          >
            <span>
              {role}
            </span>
            {(roles.length - 1 !== index) && (
              <span>-</span>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CollaboratorCard;