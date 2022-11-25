import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../../Assets/clock.png'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {

    const { logOut, user } = useContext(AuthContext)

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

    const menuBar = <React.Fragment>
        <NavLink to='/' className={({ isActive }) => isActive
            ?
            'px-3 py-2 flex items-center uppercase font-bold leading-snug mr-6 text-orange-600 border-b-2 border-orange-600'
            :
            'px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug mr-6'
        }>
            <ul>Home</ul>
        </NavLink>
        <NavLink to='/blog' className={({ isActive }) => isActive
            ?
            'px-3 py-2 flex items-center uppercase font-bold leading-snug mr-6 text-orange-600 border-b-2 border-orange-600'
            :
            'px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug mr-6'
        }>
            <ul>Blog</ul>
        </NavLink>
        {
            user &&
            <NavLink to='/dashboard' className={({ isActive }) => isActive
                ?
                'px-3 py-2 flex items-center uppercase font-bold leading-snug mr-6 text-orange-600 border-b-2 border-orange-600'
                :
                'px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug mr-6'
            }>
                <ul>Dashboard</ul>
            </NavLink>
        }
    </React.Fragment>

    return (
        <div className='bg-slate-200'>
            <nav className="navbar md:w-11/12 md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuBar}
                        </ul>
                    </div>
                    <Link to="/"
                        className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                    >
                        <div className='flex justify-center items-center'>
                            <img className='w-10 h-10' src={logo} alt="" />
                            <p className='text-xl text-blue-900'>O-Watch Check</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuBar}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" className="btn btn-primary ml-20 drawer-button lg:hidden">
                    <AiOutlineAlignRight />
                </label>
                <div className="navbar-end hidden md:flex">

                    {
                        user
                            ?
                            <>
                                <Link to='/my-profile' data-tip={user?.displayName} className="tooltip tooltip-bottom">
                                    <div className="avatar">
                                        <div className="w-16 ml-4 mask mask-hexagon">
                                            <img src={user?.photoURL} alt='' />
                                        </div>
                                    </div>
                                </Link>
                                <button onClickCapture={handleSignOut} className="btn btn-secondary ml-2 btn-outline">Log Out</button>
                            </>
                            :
                            <>
                                <Link to='/login'>
                                    <button className="btn btn-accent mr-2">Login</button>
                                </Link>
                                <Link to='/signup'>
                                    <button className="btn btn-accent ml-2 btn-outline">Sign Up</button>
                                </Link>

                            </>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;