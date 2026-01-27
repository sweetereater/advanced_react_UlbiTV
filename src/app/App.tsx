import { Suspense } from "react"
import { Link } from "react-router-dom"

import { classNames } from "shared/lib"
import useTheme from "./theme/lib/useTheme"
import AppRouter from "./routes"

import './styles/index.scss';


const App = () => {

  const { theme, toggleTheme } = useTheme();

  const appStyles = classNames('app', [theme])

  return (
    <div className={appStyles}>
      
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>

      <button onClick={toggleTheme}> Сменить тему </button>

      <Suspense fallback="Загрузка...">
        <AppRouter />
      </Suspense>

    </div>
  )
}

export default App;
