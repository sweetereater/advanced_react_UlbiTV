import { Suspense } from "react"

import { classNames } from "shared/lib"
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import useTheme from "./theme/lib/useTheme"
import AppRouter from "./routes"

import 'shared/config/i18nConfig';
import './styles/index.scss';


const App = () => {

  const theme = useTheme().theme;

  const appStyles = classNames('app', [theme])

  return (
    <div className={appStyles}>
      <Suspense fallback="Загрузка...">
        <NavBar />
        
        <div className="main">
          <SideBar />
          <div className="content">
              <AppRouter />
          </div>
        </div>
        
      </Suspense>
    </div>
  )
}

export default App;
