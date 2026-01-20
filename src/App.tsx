import { Link, Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter/Counter"
import Home from "./pages/Home/Home"
import AboutPage from "./pages/About/AboutPage"

import './index.scss'

export const App = () => {
  return (
    <div className="app">
      
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Counter />
    </div>
  )
}
