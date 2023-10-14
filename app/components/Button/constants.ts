import { ButtonVariationType } from './types';

export const baseStyles =
  'flex rounded-full gap-2 items-center justify-center font-semibold text-body-small-medium font-poppins px-6 py-3 ease-in-out duration-300';

export const buttonStyles: { [key in ButtonVariationType]: string | string[] } = {
  primary: [
    baseStyles,
    'bg-skyblue text-black',
    'hover:bg-skyblue-60',
    'active:bg-skyblue-70',
    'focus:ring-4 focus:ring-skyblue-10 focus:outline-none',
    'disabled:cursor-not-allowed disabled:pointer-events-none',
  ],
  FAB: [
    baseStyles,
    'bg-skyblue text-black',
    'hover:bg-skyblue-60',
    'active:bg-skyblue-30',
    'disabled:bg-skyblue-white disabled:cursor-not-allowed',
    'w-full max-w-sm shadow-drop-1'
  ],
};
