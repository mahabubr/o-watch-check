import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import MyProfile from "../../Pages/Other/MyProfile/MyProfile";
import NotFound from "../../Pages/Other/NotFound/NotFound";
import HomeComponents from "../../Pages/Page/Home/HomeComponents/HomeComponents";
import WatchItems from "../../Pages/Page/Home/ProductCategories/WatchItems/WatchItems";
import Login from "../../Pages/Page/Login/Login";
import SignUp from "../../Pages/Page/SignUp/SignUp";

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
                element: <MyProfile />
            },
            {
                path: '/watch-category/:id',
                element: <WatchItems />,
                loader: async ({ params }) => fetch(`http://localhost:5000/watch-category/${params.id}`)
            }
        ]
    }
])

export default router