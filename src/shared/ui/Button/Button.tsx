import { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib"

import styles from './Button.module.scss';

const enum ButtonTheme {
  CLEAR = "clear"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

const Button = (props: ButtonProps) => {
  const { 
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button 
      className={classNames(styles.Button, [className, styles[theme]])}
      {...otherProps}
    >
      {children}  
    </button>
  )
}

export { 
  Button, 
  ButtonTheme 
}
