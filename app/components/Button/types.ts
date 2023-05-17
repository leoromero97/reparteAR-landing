import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { IconList } from '../Icon/types';


export type ButtonStatesType = 'default' | 'hover' | 'pressed' | 'disabled';

export type ButtonVariationType = 'primary' | 'fab';

export type ButtonIconPositionType = 'left' | 'right';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | ReactNode;
  className?: string;
  variation?: ButtonVariationType;
  text?: string;
  icon?: IconList;
  iconPosition?: ButtonIconPositionType;
  disabled?: boolean;
  to?: never;
  external?: never;
}

export interface IAnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: string;
  className?: string;
  variation?: ButtonVariationType;
  text?: string;
  icon?: IconList;
  iconPosition?: ButtonIconPositionType;
  to: string;
  disabled?: boolean;
  external?: boolean;
  onClick?: never;
  type?: never;
}
