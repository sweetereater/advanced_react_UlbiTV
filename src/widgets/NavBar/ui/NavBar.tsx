import { useTranslation } from "react-i18next";

import { AppRoutesPaths } from "shared/config/routesConfig"
import { classNames } from "shared/lib"
import { AppLink, AppLinkTheme } from "shared/ui";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

const NavBar = ({ className }: NavBarProps) => {

  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, [className])}>
      <div className={styles.navbarLinks}>
        <AppLink to={AppRoutesPaths.main}>
          {t("MainPageLinkText")}
        </AppLink>
        <AppLink to={AppRoutesPaths.about} theme={AppLinkTheme.SECONDARY}>
          {t("AboutPageLinkText")}         
        </AppLink>
      </div>
      
      {/* Проблемное место, так как ThemeSwitcher - виджет, как и NavBar, нельзя использовать на одном слое */}
      <ThemeSwitcher />
    </div>
  )
}

export { NavBar }
