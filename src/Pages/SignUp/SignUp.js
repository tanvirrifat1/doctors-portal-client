import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser } = useContext(AuthContext)

    const handleSignUp = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Signup Successfully', { autoClose: 1000 })
            })
            .catch(err => console.error(err))
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
                    <p className='mt-2'>Already have an Account <Link className='text-primary' to='/login'>Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button class="btn btn-outline btn-info w-full"><FaGoogle className='mr-2 text-2xl'></FaGoogle> CONTINUE WITH GOOGLE</button>

                </form>
            </div>
        </div>
    );
};

export default SignUp;