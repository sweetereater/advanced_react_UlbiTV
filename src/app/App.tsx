import { Suspense } from "react"

import { classNames } from "shared/lib"
import useTheme from "./theme/lib/useTheme"
import AppRouter from "./routes"
import { NavBar } from "widgets/NavBar"

import './styles/index.scss';


const App = () => {

  const theme = useTheme().theme;

  const appStyles = classNames('app', [theme])

  return (
    <div className={appStyles}>
      <NavBar />

      <Suspense fallback="Загрузка...">
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App;
