import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-xl text-center font-semibold">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text">Email</span> </label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered input-primary w-full max-w-xs" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text">Password</span> </label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 5, message: 'Password must be 5 characters or longer' }
                            })}
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <label className="label">  <span className="label-text">Forget Password</span> </label>
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <p>New to Doctors Portal <Link className='text-primary' to='/signup'>Create New Account</Link></p>
                    <div className="divider">OR</div>
                    <button class="btn btn-outline btn-info w-full">CONTINUE WITH GOOGLE</button>

                </form>
            </div>
        </div>
    );
};

export default Login;