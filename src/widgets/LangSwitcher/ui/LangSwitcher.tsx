import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib"
import { Button, ButtonTheme } from "shared/ui";

import styles from './LangSwitcher.module.scss';


interface LangSwitcherProps {
  className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {

  const { t, i18n } = useTranslation();
  const { language, changeLanguage } = i18n;

  const handleChangeLanguage = () => {
    changeLanguage(language === "en" ? "ru" : "en")
  }

  return (
    <Button 
      onClick={handleChangeLanguage}
      className={classNames(styles.LangSwitcher, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {t("langSwitcherText")}
    </Button>
  )
}

export { LangSwitcher }
