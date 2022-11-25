import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Navbar from '../../Pages/Shared/Navbar/Navbar';


const DashboardLayout = () => {

    const { user } = useContext(AuthContext)


    const { data: userData, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetch(`http://localhost:5000/user/?email=${user.email}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-20 bg-gray-50">
                    {/* <!-- Page content here --> */}

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-8 w-80 bg-teal-500 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <Link to='/dashboard' className='text-xl mb-4 border-b-2 border-black text-center font-bold'>
                            <li>O Watch - Dashboard</li>
                        </Link>
                        <div className="flex items-center p-4 space-x-4 bg-teal-100 mb-6 rounded-lg shadow-xl">
                            <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full bg-gray-500" />
                            <div>
                                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                                <p className='text-base text-green-600 font-bold'>{userData.role}</p>
                                <span className="flex items-center space-x-1">
                                    <Link to="/my-profile" className="text-xs hover:underline text-blue-600">View profile</Link>
                                </span>
                            </div>
                        </div>

                        {
                            userData.role === "buyer" &&
                            <NavLink to='/dashboard/my-orders'
                                className={({ isActive }) => isActive
                                    ?
                                    'px-6 py-3 flex items-center uppercase font-bold leading-snug mr-6 bg-teal-700 border-b-2 rounded-xl text-white'
                                    :
                                    'px-3 py-2 flex items-center border-b-2 border-teal-700 text-lg uppercase font-bold leading-snug mr-6'
                                }
                            >
                                <li>My Orders</li>
                            </NavLink>
                        }

                        {
                            userData.role === "seller" &&
                            <NavLink to='/dashboard/add-products'
                                className={({ isActive }) => isActive
                                    ?
                                    'px-6 py-3 flex items-center uppercase font-bold leading-snug mr-6 bg-teal-700 border-b-2 rounded-xl text-white'
                                    :
                                    'px-3 py-2 flex items-center border-b-2 border-teal-700 text-lg uppercase font-bold leading-snug mr-6'
                                }
                            >
                                    <li>Add products</li>
                            </NavLink>
                        }



                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;