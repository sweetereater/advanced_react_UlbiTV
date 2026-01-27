import { Route, Routes } from "react-router-dom"
import { appRoutes } from "shared/config/routesConfig"

const AppRouter = () => {
  return (
    <Routes>
      {appRoutes.map(({ element, path }) => (
        <Route 
          element={element}
          path={path}
          key={path}
        />
    ))}
    </Routes>
  )
}

export default AppRouter;
