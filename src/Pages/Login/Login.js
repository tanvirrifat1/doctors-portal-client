import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { userLogin } = useContext(AuthContext)

    const handleLogin = data => {
        console.log(data)
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Login Successfully', { autoClose: 1000 })
            })
            .catch(err => {
                console.error(err)
                toast.error('PassWord Wrong Please Try Again', { autoClose: 1000 })
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-xl text-center font-semibold">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text  text-black">Email</span> </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text  text-black">Password</span> </label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 5, message: 'Password must be 5 characters or longer' }
                            })}
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <label className="label">  <span className="label-text  text-black">Forget Password</span> </label>
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <p className='mt-2'>New to Doctors Portal <Link className='text-primary' to='/signup'>Create New Account</Link></p>
                    <div className="divider">OR</div>
                    <button class="btn btn-outline btn-info w-full"><FaGoogle className='mr-2 text-2xl'></FaGoogle> CONTINUE WITH GOOGLE</button>

                </form>
            </div>
        </div>
    );
};

export default Login;