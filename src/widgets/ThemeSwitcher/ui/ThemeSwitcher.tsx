import { Theme, useTheme } from "app";
import DarkTheme from "shared/assets/icons/dark_theme.svg";
import LightTheme from "shared/assets/icons/light_theme.svg";
import { Button, ButtonTheme } from "shared/ui";
import { classNames } from "shared/lib";

import styles from './ThemeSwitcher.module.scss';


interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {

  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      onClick={toggleTheme} 
      theme={ButtonTheme.CLEAR}
      className={classNames(styles.ThemeSwitcher, [className])}
    >
      {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
    </Button>
  )
}

export { ThemeSwitcher }
