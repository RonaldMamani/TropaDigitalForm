import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import DashboardProfile from "../Pages/DashboardProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: '/cadastro',
                element: <Cadastro />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <DashboardProfile />
            }
        ]
    }
])

export default router