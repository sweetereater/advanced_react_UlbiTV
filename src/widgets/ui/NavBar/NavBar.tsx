import { AppRoutesPaths } from "shared/config/routesConfig"
import { classNames } from "shared/lib"
import { AppLink, AppLinkTheme } from "shared/ui";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

const NavBar = ({ className }: NavBarProps) => {

  return (
    <div className={classNames(styles.navbar, [className])}>
      <div className={styles.navbarLinks}>
        <AppLink to={AppRoutesPaths.main}>Главная</AppLink>
        <AppLink to={AppRoutesPaths.about} theme={AppLinkTheme.SECONDARY}>О нас</AppLink>
      </div>
      
      <ThemeSwitcher />
    </div>
  )
}

export { NavBar }
