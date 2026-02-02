import { Suspense } from "react"

import { classNames } from "shared/lib"
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import useTheme from "./theme/lib/useTheme"
import AppRouter from "./routes"

import './styles/index.scss';


const App = () => {

  const theme = useTheme().theme;

  const appStyles = classNames('app', [theme])

  return (
    <div className={appStyles}>
      <NavBar />
      
      <div className="main">
        <SideBar />
        <div className="content">
          <Suspense fallback="Загрузка...">
            <AppRouter />
          </Suspense>
        </div>
      </div>

    </div>
  )
}

export default App;
