import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from '../pages/menu/Menu'
import Order from "../pages/Home/order/Order";

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
            }
        ]
    }
])