import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../Pages/DashBoard/DashBoards/DashBoard";
import ManageDoctors from "../../Pages/DashBoard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/DashBoard/MyAppointment/MyAppointment";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/Home/Signup/SignUp";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"/appointment",
                element:<Appointment></Appointment>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:"/dashboard",
                element:<MyAppointment></MyAppointment>
            },
            {
                path:"/dashboard/allUsers",
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:"/dashboard/addDoctor",
                element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path:"/dashboard/manageDoctors",
                element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path:"/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://doctors-portal-server-tarikulk.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])