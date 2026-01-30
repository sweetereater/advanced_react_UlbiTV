import { Link } from "react-router-dom"

import { AppRoutesPaths } from "shared/config/routesConfig"
import { classNames } from "shared/lib"
import useTheme from "app/theme/lib/useTheme";

import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

const NavBar = ({ className }: NavBarProps) => {

  const toggleTheme = useTheme().toggleTheme;

  return (
    <div className={classNames(styles.navbar, [className])}>
      <div className={styles.navbarLinks}>
        <Link to={AppRoutesPaths.main}>Главная</Link>
        <Link to={AppRoutesPaths.about}>О нас</Link>
      </div>

      <button onClick={toggleTheme}> Сменить тему </button>
    </div>
  )
}

export { NavBar }
