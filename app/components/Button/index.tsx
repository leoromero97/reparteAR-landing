import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { buttonStyles } from './constants';
import { IAnchorButtonProps, IButtonProps } from './types';
import Icon from '../Icon';

function Button({
  onClick,
  className,
  children,
  disabled,
  external,
  text,
  title,
  variation = 'primary',
  icon,
  iconPosition = 'left',
  type = 'button',
  to,
  ...props
}: IButtonProps | IAnchorButtonProps) {
  if (to) {
    return (
      <Link
        href={to}
        className={clsx(
          buttonStyles[variation],
          disabled ? 'pointer-events-none opacity-50' : '',
          className,
        )}
        title={title}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {iconPosition === 'left' && icon && <Icon icon={icon} />}
        {children || text || title}
        {iconPosition === 'right' && icon && <Icon icon={icon} />}
      </Link>
    );
  }

  if (external) {
    return (
      <a
        href={to}
        rel="noopener noreferrer"
        target="_blank"
        className={clsx(buttonStyles[variation], disabled ? 'pointer-events-none' : '', className)}
        title={title}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {iconPosition === 'left' && icon && <Icon icon={icon} />}
        {children || text || title}
        {iconPosition === 'right' && icon && <Icon icon={icon} />}
      </a>
    );
  }

  return (
    <button
      className={clsx(buttonStyles[variation], className)}
      title={title}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {iconPosition === 'left' && icon && <Icon icon={icon} />}
      {children || text || title}
      {iconPosition === 'right' && icon && <Icon icon={icon} />}
    </button>
  );
}

export default Button;
