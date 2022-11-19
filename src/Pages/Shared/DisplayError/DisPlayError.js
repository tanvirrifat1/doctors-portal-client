import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { FaDizzy } from "react-icons/fa";

const DisPlayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }
    return (
        <div className=' text-black mt-20 font-bold'>
            <p p className='text-red-500 flex justify-center' > Something went wrong!!!</p >
            <p className='text-red-400 flex justify-center'>{error.statusText || error.message}</p>
            <h4 className="text-3xl flex justify-center"><i> Please </i><button onClick={handleLogOut}><i>Sign out</i></button><i> and log back in</i></h4>
            <p className=' flex justify-center mt-6 text-red-400 font-bold'><FaDizzy className='text-5xl' ></FaDizzy></p>
        </div >
    );
};

export default DisPlayError;