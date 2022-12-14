import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { toast.warning('LogOut Successfully', { autoClose: 500 }) })
            .catch(err => console.error(err))
    }

    const menuItems = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/appointment'>Appointment</Link></li>
        <li className='font-bold'><Link to='/about'>About</Link></li>
        {user?.uid ?
            <>
                <li className='font-bold'><button onClick={handleLogOut}>Sign Out</button></li>
                <li className='font-bold'><Link to='/dashboard'>Dashboard</Link></li>
            </>
            :
            <li className='font-bold'><Link to='/login'>Login</Link></li>
        }
        {user?.photoURL ?
            <img className=' w-12 h-12 rounded-full dark:bg-gray-500'
                src={user?.photoURL} alt=""></img>
            :
            <></>
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl font-bold hover:text-red-700 hover:text-3xl">Doctors Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;