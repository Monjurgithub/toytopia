import React from 'react';
import Navber from '../Shared/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Layout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;