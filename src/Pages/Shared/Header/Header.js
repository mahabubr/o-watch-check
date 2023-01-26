import React from 'react';
import mainLogo from '../../../Assets/mainlogo.png'
import { BsArrowDownLeftSquareFill, BsCart4, BsFillPeopleFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineLogout, AiFillHome } from 'react-icons/ai';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { FaSearch, FaUserAlt, FaBloggerB } from 'react-icons/fa';
import { CgAdd } from 'react-icons/cg';
import { FiWatch } from 'react-icons/fi';
import { MdDashboard, MdProductionQuantityLimits, MdReport } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
// import ShoppingCart from '../../../Components/ShoppingCart/ShoppingCart';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';


const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const { data: userData, isLoading } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: () => fetch(`https://owatch-check-server.vercel.app/user/?email=${user?.email}`)
            .then(res => res.json())
    })

    const handleSearchBar = () => {
        alert('Developer Working Now')
    }

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Sign Out',
                    'Come Back Soon',
                    'success'
                )
            })
            .catch(e => {
                toast.error(e.message)
            })
    }

    return (
        <div>
            {/* Top Nav Start  */}
            <div className='bg-black p-3 hidden md:block'>
                <div className='w-8/12 mx-auto flex justify-between items-center'>
                    <div>
                        <p className='font-bold text-orange-400'>Welcome to Website. {userData && <span className='text-amber-200'>{userData?.role} Role</span>}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="text-white flex items-center font-bold cursor-pointer">
                                    English
                                    <div>
                                        <BsArrowDownLeftSquareFill className='text-xl font-bold text-white ml-2' />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-6 shadow bg-base-100 rounded-box w-36">
                                    <li className='border-b-2 my-2 border-gray-500'>France</li>
                                    <li className='border-b-2 my-2 border-gray-500'>Hindi</li>
                                    <li className='border-b-2 my-2 border-gray-500'>Russia</li>
                                    <li>Japanese</li>
                                </ul>
                            </div>
                        </div>
                        <span className='border-2 w-4 mx-8 rotate-90 border-orange-400'></span>
                        <div className='flex justify-center items-center'>
                            <div className="dropdown">
                                <label tabIndex={0} className="text-white flex items-center font-bold cursor-pointer">
                                    USD
                                    <div>
                                        <BsArrowDownLeftSquareFill className='text-xl font-bold text-white ml-2' />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-6 shadow bg-base-100 rounded-box w-36">
                                    <li className='border-b-2 my-2 border-gray-500'>Eur</li>
                                    <li className='border-b-2 my-2 border-gray-500'>Pound</li>
                                    <li className='border-b-2 my-2 border-gray-500'>Franc</li>
                                    <li>Dirham</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Nav End  */}
            {/* Middle Nav Start  */}
            <div className='mt-10 w-10/12 mx-auto'>
                <div className='cursor-pointer flex w-full justify-around items-center text-white bg-indigo-600 py-4 px-6 mb-8 md:hidden'>
                    <Link to='/'>
                        <AiFillHome className='text-4xl' />
                    </Link>
                    <Link to='/all-watches'>
                        <FiWatch className='text-4xl' />
                    </Link>
                    <Link to='/blog'>
                        <FaBloggerB className='text-4xl' />
                    </Link>
                    {/* <Link to='/dashboard'>
                        <MdDashboard className='text-4xl' />
                    </Link> */}
                </div>
                <div className='flex justify-between items-center'>
                    <Link to='/'>
                        <div className='flex justify-center items-center'>
                            <img src={mainLogo} className="w-16 hidden md:block" alt="" />
                            <h1 className='text-3xl mt-3 ml-4 font-bold hidden lg:block'>O-<span className='text-orange-500 text-4xl'>Watch</span> Check</h1>
                        </div>
                    </Link>
                    <div className='flex justify-center items-center space-x-3'>
                        <div className='cursor-pointer tooltip' onClick={handleSearchBar} data-tip="Search">
                            <FaSearch className='text-2xl' />
                        </div>
                        <span className='border w-8 border-gray-800 rotate-90'></span>
                        {
                            user
                                ?
                                <div onClick={handleSignOut} className='flex justify-center items-center cursor-pointer tooltip' data-tip="Log Out">
                                    <AiOutlineLogout className='text-2xl mr-2' />
                                    <p className='hidden md:block'>Log Out</p>
                                </div>
                                :
                                <Link to='/login'>
                                    <div className='flex justify-center items-center cursor-pointer tooltip' data-tip="Login">
                                        <FaUserAlt className='text-2xl mr-2' />
                                        <p className='hidden md:block'>Login / Register</p>
                                    </div>
                                </Link>
                        }

                        <span className='border w-8 border-gray-800 rotate-90'></span>
                        {
                            userData?.role === "buyer" &&
                            <>
                                <NavLink to='/my-orders' className={({ isActive }) => isActive
                                    ?
                                    'text-lg font-semibold text-rose-600 tooltip'
                                    :
                                    'text-lg font-semibold tooltip'
                                } data-tip="Cart">
                                    <div className='cursor-pointer'>
                                        <BsCart4 className='text-2xl' />
                                    </div>
                                </NavLink>
                                <span className='border w-8 border-gray-800 rotate-90'></span>
                                <NavLink to='/my-wishlist' className={({ isActive }) => isActive
                                    ?
                                    'text-lg font-semibold text-rose-600 tooltip'
                                    :
                                    'text-lg font-semibold tooltip'
                                } data-tip="Wishlist">
                                    <div className='cursor-pointer'>
                                        <AiFillHeart className='text-2xl' />
                                    </div>
                                </NavLink>
                            </>
                        }
                        {
                            userData?.role === "seller" &&
                            <>
                                <NavLink to='/add-products' className={({ isActive }) => isActive
                                    ?
                                    'text-lg font-semibold text-rose-600 tooltip'
                                    :
                                    'text-lg font-semibold tooltip'
                                } data-tip="Add Products">
                                    <div className='cursor-pointer'>
                                        <CgAdd className='text-2xl' />
                                    </div>
                                </NavLink>
                                <span className='border w-8 border-gray-800 rotate-90'></span>
                                <NavLink to='/my-products' className={({ isActive }) => isActive
                                    ?
                                    'text-lg font-semibold text-rose-600 tooltip'
                                    :
                                    'text-lg font-semibold tooltip'
                                } data-tip="My Products">
                                    <div className='cursor-pointer'>
                                        <MdProductionQuantityLimits className='text-2xl' />
                                    </div>
                                </NavLink>
                            </>
                        }
                        {
                            userData?.role === "admin" &&
                            <>
                                <NavLink to='/all-sellers' className={({ isActive }) => isActive
                                    ?
                                    'text-lg font-semibold text-rose-600 tooltip'
                                    :
                                    'text-lg font-semibold tooltip'
                                } data-tip="All Sellers">
                                    <div className='cursor-pointer'>
                                        <IoPeopleCircleOutline className='text-2xl' />
                                    </div>
                                </NavLink>
                                <span className='border w-8 border-gray-800 rotate-90'></span>
                                <NavLink to='/all-buyers' className={({ isActive }) => isActive
                                    ?
                                    'text-lg font-semibold text-rose-600 tooltip'
                                    :
                                    'text-lg font-semibold tooltip'
                                } data-tip="All Buyers">
                                    <div className='cursor-pointer'>
                                        <BsFillPeopleFill className='text-2xl' />
                                    </div>
                                </NavLink>
                                <span className='border w-8 border-gray-800 rotate-90'></span>
                                <NavLink to='/reported-items' className={({ isActive }) => isActive
                                    ?
                                    'text-lg font-semibold text-rose-600 tooltip'
                                    :
                                    'text-lg font-semibold tooltip'
                                } data-tip="Reported Items">
                                    <div className='cursor-pointer'>
                                        <MdReport className='text-2xl' />
                                    </div>
                                </NavLink>
                            </>
                        }
                        {
                            user &&
                            <Link to='/my-profile' data-tip={user?.displayName} className="tooltip tooltip-bottom hidden md:block">
                                <div className="avatar">
                                    <div className="w-16 ml-4 mask mask-hexagon">
                                        <img src={user?.photoURL} alt='' />
                                    </div>
                                </div>
                            </Link>
                        }
                    </div>
                </div>
            </div>
            {/* Middle Nav End  */}
            {/* Bottom Nav Start  */}
            <div className='hidden md:block mt-10 bg-slate-100 p-6 drop-shadow-lg border border-gray-300'>
                <div className='w-9/12 mx-auto flex justify-center space-x-8 items-center'>
                    <NavLink to='/' className={({ isActive }) => isActive
                        ?
                        'text-lg font-semibold text-rose-600'
                        :
                        'text-lg font-semibold'
                    }>
                        <ul>Home</ul>
                    </NavLink>
                    <NavLink to='/all-watches' className={({ isActive }) => isActive
                        ?
                        'text-lg font-semibold text-rose-600'
                        :
                        'text-lg font-semibold'
                    }>
                        <ul>All Watches</ul>
                    </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive
                        ?
                        'text-lg font-semibold text-rose-600'
                        :
                        'text-lg font-semibold'
                    }>
                        <ul>Blog</ul>
                    </NavLink>
                    {/* {
                        user &&
                        <NavLink to='/dashboard' className={({ isActive }) => isActive
                            ?
                            'text-lg font-semibold text-rose-600'
                            :
                            'text-lg font-semibold'
                        }>
                            <ul>Dashboard</ul>
                        </NavLink>
                    } */}
                </div>
            </div>
            {/* Bottom Nav End  */}
        </div>
    );
};

export default Header;