import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Layout/Home/Home";
import About from "../Layout/About/About";

export const router = createBrowserRouter([
 {
  path: '/',
  element: <Main />,
  errorElement: <ErrorPage />,
  children: [
   {
    index: true,
    element: <Home/>
   },
   {
    path: '#about',
    element:<About/>
   }
  ]
 }
])