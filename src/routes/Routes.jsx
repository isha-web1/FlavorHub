import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from '../pages/menu/Menu'
import Order from "../pages/Home/order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/SignUp";
import Secret from "../pages/shared/Secret";
import PrivateRoute from "./PrivetRoute";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : 'menu',
                element : <Menu/>
            },
            {
                path : 'order/:category',
                element : <Order/>
            },
            {
                path : 'login',
                element : <Login/>
            },
            {
                path : 'signup',
                element : <SignUp/>
            },
            {
                path : 'secret',
                element : <PrivateRoute><Secret/></PrivateRoute>
            }
        ]
    },
    {
        path : 'dashboard',
        element : <PrivateRoute><Dashboard/></PrivateRoute>,
        children : [
            {
                path : 'cart',
                element : <Cart/>
            }
        ]
    }
])