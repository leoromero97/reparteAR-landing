import clsx from "clsx";
import CollaboratorCard from "@/components/Cards/CollaboratorCard";
import MessageTech from "@/components/Sections/MessageTech";
import { collaborators } from "@/constants/collaborators";
import { texts } from "@/constants/texts";
import useMobileDetect from "@/hooks/useMobileDetected";
import { IUsSectionProps } from "./types";

export interface IServicesProps {
  className?: string;
}

function UsSection({ className }: IUsSectionProps) {
  const isMobile = useMobileDetect();

  return (
    <section id="nosotros" className="flex flex-col items-center w-full md:py-20">
      <div className={clsx('flex flex-col max-w-7xl px-8 w-full py-10 gap-6', className, isMobile && 'items-center')}>
        <h3 className={clsx(isMobile ? 'text-subtitle font-bold text-center' : 'text-h3 font-bold mb-6')}>
          {texts.commons.us}
        </h3>
        <span className="text-body md:text-subtitle">
          {texts.commons.usMessage}
        </span>
        <div className={clsx('flex w-full py-6 overflow-y-hidden', isMobile ? 'overflow-scroll gap-4 px-3' : 'flex-wrap gap-10')}>
          {collaborators && collaborators?.map((collaborator) => (
            <CollaboratorCard
              key={collaborator.id}
              name={collaborator.name}
              image={collaborator.image}
              roles={collaborator.roles}
            />
          ))}
        </div>
      </div>
      <MessageTech />
    </section>
  );
}

export default UsSection;
