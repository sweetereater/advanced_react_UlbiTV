import { createContext } from "react";

export const enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const LOCAL_STORAGE_THEME_KEY = 'currentTheme';

interface ContextProps {
  theme?: Theme,
  setTheme?: (theme: Theme) => void,
}

const ThemeContext = createContext<ContextProps>({})

export default ThemeContext;
