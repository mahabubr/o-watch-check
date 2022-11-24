import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import MyProfile from "../../Pages/Other/MyProfile/MyProfile";
import NotFound from "../../Pages/Other/NotFound/NotFound";
import Login from "../../Pages/Page/Login/Login";
import SignUp from "../../Pages/Page/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
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
                element: <MyProfile />
            }
        ]
    }
])

export default router