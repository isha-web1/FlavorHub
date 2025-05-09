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
import AllUsers from "../pages/Dashboard/AllUsers";
import AddItems from "../pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Payment from "../pages/Dashboard/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome";

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
            // normal user routes
            {
                path : 'userHome',
                element : <UserHome/>

            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : 'payment',
                element : <Payment/>

            },
            {
                path : 'paymentHistory',
                element :<PaymentHistory/>
            },
            // admin only routes routes
            {
                path : 'adminHome',
                element : <AdminRoute><AdminHome/></AdminRoute>
            },
            {
                path : 'addItems',
                element : <AdminRoute> <AddItems/></AdminRoute>

            },
            {
                path : 'manageItems',
                element : <AdminRoute><ManageItems/></AdminRoute>
            },
            {
                path : 'updateItem/:id',
                element : <AdminRoute><UpdateItem/></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            
            {
               path : 'users',
               element :<AdminRoute><AllUsers/></AdminRoute>
            }
        ]
    }
])