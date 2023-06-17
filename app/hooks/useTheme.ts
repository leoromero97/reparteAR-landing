import { useContext } from "react";
import { ThemeContext } from "context/theme";
import { texts } from "@/constants/texts";

export default function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const labelTheme = theme === 'dark' ? texts.commons.dark.toLowerCase() : texts.commons.light.toLowerCase();
  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  return { isDark, isLight, labelTheme, toggleTheme  };
}

