import useTheme from "app/theme/lib/useTheme";
import { AppRoutesPaths } from "shared/config/routesConfig"
import { classNames } from "shared/lib"
import { AppLink, AppLinkTheme } from "shared/ui";

import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

const NavBar = ({ className }: NavBarProps) => {

  const toggleTheme = useTheme().toggleTheme;

  return (
    <div className={classNames(styles.navbar, [className])}>
      <div className={styles.navbarLinks}>
        <AppLink to={AppRoutesPaths.main}>Главная</AppLink>
        <AppLink to={AppRoutesPaths.about} theme={AppLinkTheme.SECONDARY}>О нас</AppLink>
      </div>

      <button onClick={toggleTheme}> Сменить тему </button>
    </div>
  )
}

export { NavBar }
