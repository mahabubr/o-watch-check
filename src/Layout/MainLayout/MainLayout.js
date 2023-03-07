import React from 'react';
import { Outlet } from 'react-router-dom';
// import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';
import MainFooter from '../../Pages/Shared/MainFooter/MainFooter';
// import Navbar from '../../Pages/Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            <MainFooter></MainFooter>
        </div>
    );
};

export default MainLayout;