import { icons } from './constants';
import { IIconProps } from './types';

const Icon = ({ className, icon }: IIconProps) => {
  const IconSelected = icons[icon];

  if (IconSelected) {
    return <IconSelected className={className} />;
  } else {
    console.error(`Couldn't find icon ${icon}`);
    return null;
  }
};

export default Icon;
