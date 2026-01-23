import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"

import { AboutPage } from "pages/About"
import { HomePage } from "pages/Home"
import { classNames } from "shared/lib"
import useTheme from "./theme/lib/useTheme"

import './styles/index.scss';


const App = () => {

  const { theme, toggleTheme } = useTheme();

  const appStyles = classNames('app', [theme])

  return (
    <div className={appStyles}>
      
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/counter">К счётчику!</Link>

      <button onClick={toggleTheme} >Сменить тему</button>

      <Suspense fallback="Загрузка...">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>

    </div>
  )
}

export default App;
