import { RouteProps } from "react-router-dom";

import { HomePage } from "pages/Home";
import { AboutPage } from "pages/About";


export enum AppRoutesPages {
  MAIN = "main",
  ABOUT = "about"
}

export const AppRoutesPaths: Record<AppRoutesPages, string> = {
  [AppRoutesPages.MAIN]: '/',
  [AppRoutesPages.ABOUT]: '/about',
}

export const appRoutes: Array<RouteProps> = [
  {
    path: AppRoutesPaths[AppRoutesPages.MAIN],
    element: <HomePage />,
  },
  {
    path: AppRoutesPaths[AppRoutesPages.ABOUT],
    element: <AboutPage />,
  }
]