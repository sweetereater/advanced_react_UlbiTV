import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import { classNames } from "shared/lib"

import styles from './AppLink.module.scss';


const enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

const AppLink = (props: AppLinkProps) => {

  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link 
      to={to}
      className={classNames(styles.AppLink, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}

export { AppLink, AppLinkTheme }
