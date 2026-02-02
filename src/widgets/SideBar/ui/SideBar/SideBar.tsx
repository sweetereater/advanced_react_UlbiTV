import { useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib"
import { Button } from "shared/ui";
import { LangSwitcher } from "widgets/LangSwitcher";

import styles from './SideBar.module.scss';


interface SideBarProps {
  className?: string
}

const SideBar = ({ className }: SideBarProps) => {

  const [closed, setClosed] = useState(true);
  const { t } = useTranslation();

  const handleToggle = () => setClosed(prev => !prev);

  return (
    <div className={classNames(styles.SideBar, [className], { [styles.closed]: closed })}>
      <Button onClick={handleToggle}>
        {closed ? 
          t("sideBarExpand") : 
          t("sideBarClose")
        }
      </Button>
      <div className={styles.switchers}>
        {/* Проблемное место, так как LangSwitcher - виджет, как и SideBar, нельзя использовать на одном слое */}
        <LangSwitcher />
      </div>
    </div>
  )
}

export { SideBar }
