import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from '../pages/menu/Menu'
import Order from "../pages/Home/order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/SignUp";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
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
            }
        ]
    }
])