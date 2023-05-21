import { IconList } from "@/components/Icon/types";

export interface ISocialNetworks {
  id: string;
  href: string;
  icon: IconList;
  name: string;
}

export const socialNetworks: ISocialNetworks[] = [
  {
    id: 'reparteARfacebook',
    href: 'https://www.facebook.com/people/Repartear/100089945971216/',
    icon: 'Facebook',
    name: 'Facebook'
  },
  {
    id: 'reparteARinstagram',
    href: 'https://www.instagram.com/repartear/',
    icon: 'Instagram',
    name: 'Instagram'
  },
  {
    id: 'reparteARlinkedin',
    href: 'https://www.linkedin.com/company/repartear/',
    icon: 'LinkedIn',
    name: 'LinkedIn'
  }
];
