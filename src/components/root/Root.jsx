import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
             <div className="sticky top-0 z-50 bg-white shadow-md">
                <Navbar />
            </div>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;