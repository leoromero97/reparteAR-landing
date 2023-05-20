import { ImageProps } from "next/image";

export interface ICollaboratorCardProps {
  className?: string;
  image?: ImageProps;
  name: string;
  roles?: string[];
}
