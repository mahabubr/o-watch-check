import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Blog from "../../Pages/Other/Blog/Blog";
import MyProfile from "../../Pages/Other/MyProfile/MyProfile";
import NotFound from "../../Pages/Other/NotFound/NotFound";
import AddProducts from "../../Pages/Page/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../../Pages/Page/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Page/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Page/Dashboard/Dashboard";
import MyOrders from "../../Pages/Page/Dashboard/MyOrders/MyOrders";
import Payment from "../../Pages/Page/Dashboard/MyOrders/Payment/Payment";
import MyProducts from "../../Pages/Page/Dashboard/MyProducts/MyProducts";
import HomeComponents from "../../Pages/Page/Home/HomeComponents/HomeComponents";
import WatchItems from "../../Pages/Page/Home/ProductCategories/WatchItems/WatchItems";
import Login from "../../Pages/Page/Login/Login";
import SignUp from "../../Pages/Page/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerPrivateRoute from "../SellerPrivateRoute/SellerPrivateRoute";
import UserPrivateRoute from "../UserPrivateRoute/UserPrivateRoute";

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
                path: '/blog',
                element: <Blog />
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
                    <UserPrivateRoute>
                        <MyOrders />
                    </UserPrivateRoute>

            },
            {
                path: '/dashboard/payment/:id',
                loader: async ({ params }) => fetch(`http://localhost:5000/my-orders/${params.id}`),
                element:
                    <UserPrivateRoute>
                        <Payment />
                    </UserPrivateRoute>
            },
            {
                path: '/dashboard/add-products',
                element:
                    <SellerPrivateRoute>
                        <AddProducts />
                    </SellerPrivateRoute>
            },
            {
                path: '/dashboard/my-products',
                element:
                    <SellerPrivateRoute>
                        <MyProducts />
                    </SellerPrivateRoute>
            },
            {
                path: '/dashboard/all-sellers',
                element:
                    <AdminRoute>
                        <AllSellers />
                    </AdminRoute>
            },
            {
                path: '/dashboard/all-buyers',
                element:
                    <AdminRoute>
                        <AllBuyers />
                    </AdminRoute>
            }
        ]
    }
])

export default router