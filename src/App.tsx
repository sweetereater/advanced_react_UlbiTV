import { lazy, Suspense, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"

import HomePageAsync from "./pages/Home/HomePageAsync"
import AboutPageAsync from "./pages/About/AboutPageAsync"

import './index.scss'

const enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const Counter = lazy(() => import('./components/Counter/Counter'));

export const App = () => {

  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  }

  return (
    <div className={`app ${theme}`}>
      
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/counter">К счётчику!</Link>

      <button onClick={toggleTheme} >Сменить тему</button>

      <Suspense fallback="Загрузка...">
        <Routes>
          <Route path="/" element={<HomePageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Suspense>

    </div>
  )
}
