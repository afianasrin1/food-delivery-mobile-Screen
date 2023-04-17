import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Registration from "../components/Registration";
import StartedPage from "../components/StartedPage";
import Home from '../components/Home/Home'
import FoodDetails from "../components/Foods/FoodDetails";
import SearchItems from "../components/Home/SearchItems";

export const router = createBrowserRouter
  ([
    { path: '/', element: <StartedPage /> },
    { path: '/log', element: <Login /> },
    { path: '/reg', element: <Registration /> },
    { path: '/home', element: <Home /> },
    { path: '/food/:id', element: <FoodDetails /> },
    { path: '/search', element: <SearchItems /> },
  ])