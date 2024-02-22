import CollaboratorCard from "@/components/Cards/CollaboratorCard";
import MessageTech from "@/components/Sections/MessageTech";
import { collaborators } from "@/constants/collaborators";
import { texts } from "@/constants/texts";
import clsx from "clsx";

function UsSection() {
  return (
    <section
      id="nosotros"
      className="flex flex-col items-center w-full pt-20 pb-10 md:py-40"
    >
      <div className="flex flex-col max-w-8xl px-8 w-full gap-6 py-10 items-center md:items-start">
        <span className="text-subtitle font-bold text-center md:text-h3 md:font-bold md:mb-6">
          {texts.commons.us}
        </span>
        <span className="text-body md:text-subtitle">
          {texts.commons.usMessage}
        </span>
        <div
          className={clsx(
            `flex w-full py-6 overflow-y-hidden overflow-scroll gap-4 px-3 lg:grid md:gap-10 lg:overflow-hidden lg:grid-cols-3 lg:place-items-center`
          )}
        >
          {collaborators &&
            collaborators?.map(({ id, name, roles, href, image }) => (
              <CollaboratorCard
                key={id}
                name={name}
                href={href}
                image={image}
                roles={roles}
              />
            ))}
        </div>
      </div>
      <MessageTech />
    </section>
  );
}

export default UsSection;
