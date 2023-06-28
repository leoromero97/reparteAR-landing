import { ButtonVariationType } from './types';

export const baseStyles =
  'flex rounded-full gap-2 items-center justify-center text-sm lg:text-lg font-medium px-6 py-3 leading-none ease-in-out duration-300';

export const buttonStyles: { [key in ButtonVariationType]: string | string[] } = {
  primary: [
    baseStyles,
    'bg-skyblue text-black',
    'hover:bg-skyblue-600',
    'active:bg-skyblue-300',
    'disabled:bg-skyblue-white disabled:cursor-not-allowed',
  ],
  FAB: [
    baseStyles,
    'bg-skyblue text-black',
    'hover:bg-skyblue-600',
    'active:bg-skyblue-300',
    'disabled:bg-skyblue-white disabled:cursor-not-allowed',
    'w-full max-w-sm shadow-drop-1'
  ],
};
