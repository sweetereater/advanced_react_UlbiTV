import { lazy, Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"

import HomePageAsync from "./pages/Home/HomePageAsync"
import AboutPageAsync from "./pages/About/AboutPageAsync"
import useTheme from "./theme/useTheme"
import classNames from "./helpers/classNames"

import './index.scss'


const Counter = lazy(() => import('./components/Counter/Counter'));

const App = () => {

  const { theme, toggleTheme } = useTheme();

  const appStyles = classNames('app', [theme, 'foo1', 'foo2'], { hovered: true, bordered: false })

  return (
    <div className={appStyles}>
      
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

export default App;
