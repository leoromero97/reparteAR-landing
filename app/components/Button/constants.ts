import { ButtonVariationType } from './types';

const baseStyles =
  'flex rounded-full gap-2 items-center justify-center text-sm font-medium px-6 py-3 transition-colors leading-none';

export const buttonStyles: { [key in ButtonVariationType]: string | string[] } = {
  primary: [
    baseStyles,
    'bg-skyblue text-black',
    'hover:bg-skyblue-600',
    'active:bg-skyblue-300',
    'disabled:bg-skyblue-white disabled:cursor-not-allowed',
  ],
  text: [
    'hover:text-skyblue active:font-semibold'
  ],
  FAB: [
    baseStyles,
    'shadow-lg'
  ],
};
