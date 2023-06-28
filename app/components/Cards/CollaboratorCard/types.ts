import { ImageProps } from "next/image";

export interface ICollaboratorCardProps {
  className?: string;
  href?: string;
  image?: ImageProps;
  name: string;
  roles?: string[];
}
