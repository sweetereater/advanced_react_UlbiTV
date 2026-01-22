import { lazy, Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"

import HomePageAsync from "./pages/Home/HomePageAsync"
import AboutPageAsync from "./pages/About/AboutPageAsync"
import useTheme from "./theme/useTheme"

import './index.scss'


const Counter = lazy(() => import('./components/Counter/Counter'));

const App = () => {

  const { theme, toggleTheme } = useTheme();

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

export default App;
