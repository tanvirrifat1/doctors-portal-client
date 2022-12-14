import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../Hooks/UseAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Tittle from '../Hook/Tittle'

const DashboardLayout = () => {
    Tittle('AllOptions')
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
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
                    <ul className="menu p-4 w-80 text-base-content">

                        <li className='text-black'><Link to='/dashboard'>My Appointments</Link></li>
                        {
                            isAdmin && <>
                                <li className='text-black'><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li className='text-black'><Link to='/dashboard/adddoctor'>Add a Doctor</Link></li>
                                <li className='text-black'><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;