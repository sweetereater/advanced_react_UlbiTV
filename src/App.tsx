import { lazy, Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"

import HomePageAsync from "./pages/Home/HomePageAsync"
import AboutPageAsync from "./pages/About/AboutPageAsync"

import './index.scss'

const Counter = lazy(() => import('./components/Counter/Counter'));

export const App = () => {
  return (
    <div className="app">
      
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/counter">К счётчику!</Link>

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
