import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div className='text-black'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li className='text-black'><Link to='/dashboard'>My Appointments</Link></li>
                        <li className='text-black'><Link to='/dashboard/allusers'>All Users</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;