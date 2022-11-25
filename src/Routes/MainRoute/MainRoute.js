import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import MyProfile from "../../Pages/Other/MyProfile/MyProfile";
import NotFound from "../../Pages/Other/NotFound/NotFound";
import Dashboard from "../../Pages/Page/Dashboard/Dashboard";
import MyOrders from "../../Pages/Page/Dashboard/MyOrders/MyOrders";
import HomeComponents from "../../Pages/Page/Home/HomeComponents/HomeComponents";
import WatchItems from "../../Pages/Page/Home/ProductCategories/WatchItems/WatchItems";
import Login from "../../Pages/Page/Login/Login";
import SignUp from "../../Pages/Page/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <HomeComponents />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/my-profile',
                element:
                    <PrivateRoute>
                        <MyProfile />
                    </PrivateRoute>
            },
            {
                path: '/watch-category/:id',
                element:
                    <PrivateRoute>
                        <WatchItems />
                    </PrivateRoute>,
                loader: async ({ params }) => fetch(`http://localhost:5000/watch-category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element:
            <PrivateRoute>
                <DashboardLayout />,
            </PrivateRoute>,
        errorElement: <NotFound />,
        children: [
            {
                path: '/dashboard',
                element:
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
            },
            {
                path: '/dashboard/my-orders',
                element:
                    <PrivateRoute>
                        <MyOrders />
                    </PrivateRoute>
            }
        ]
    }
])

export default router