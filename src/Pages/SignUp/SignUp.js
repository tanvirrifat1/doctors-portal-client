import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';
import Tittle from '../../Hook/Tittle';
import { ThreeDots } from 'react-loader-spinner'
// import { json } from 'node:stream/consumers';
// import { data } from 'autoprefixer';



const SignUp = () => {
    Tittle('SignUp')
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, googleSignIn, updateUser, loading } = useContext(AuthContext)
    const [signupError, setSignupError] = useState('')
    const navigate = useNavigate()


    const handleSignUp = (data) => {
        console.log(data)
        setSignupError('')

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('signUp successful0', { autoClose: 500 })
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.photoURL,
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(er => console.error(er))
            })
            .catch(err => {
                console.error(err)
                setSignupError(err.message)
            })
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('saveUser', data)
                navigate('/')
            })
    }

    if (loading) {
        return <div className='flex justify-center mt-10'>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-xl text-center font-semibold">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text  text-black">Name</span> </label>
                        <input type="text"
                            {...register("name")}
                            className="input input-bordered input-primary w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text  text-black">Email</span> </label>
                        <input type="email"
                            {...register("email", {
                                required: 'Email is required'
                            })}
                            className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.email && <p className='text-error'>{errors?.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text  text-black">Password</span> </label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 5, message: 'Password must be 5 characters long' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })}
                            className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.password && <p className='text-error'>{errors?.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4' value='Sign Up' type="submit" />
                    {signupError && <p className='text-error'>{signupError} </p>}
                    <p className='mt-2'>Already have an Account <Link className='text-primary' to='/login'>Please Login</Link></p>
                    <div className="divider">OR</div>
                </form>
                <button onClick={handleGoogleLogin} class="btn btn-outline btn-info w-full"><FaGoogle className='mr-2 text-2xl'></FaGoogle> CONTINUE WITH GOOGLE</button>
                <button class="btn btn-outline btn-success w-full mt-3"><FaGithub className='mr-2 text-2xl'></FaGithub> CONTINUE WITH GITHUB</button>
            </div>
        </div>
    );
};

export default SignUp;