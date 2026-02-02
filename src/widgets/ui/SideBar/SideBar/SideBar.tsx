import { useState } from "react";
import { classNames } from "shared/lib"

import styles from './SideBar.module.scss';
import { Button } from "shared/ui/Button/Button";


interface SideBarProps {
  className?: string
}

const SideBar = ({ className }: SideBarProps) => {

  const [closed, setClosed] = useState(true);

  const handleToggle = () => setClosed(prev => !prev);

  return (
    <div className={classNames(styles.SideBar, [className], { [styles.closed]: closed })}>
      <Button onClick={handleToggle}>
        {closed ? 'Развернуть' : 'Свернуть'}
      </Button>
    </div>
  )
}

export { SideBar }
