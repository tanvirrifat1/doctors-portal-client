import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        console.log(data)
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h3 className="text-3xl">Add A Doctor</h3>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

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
                    <label className="label">  <span className="label-text  text-black">Specialty</span> </label>
                    <select
                        {...register('specialty')}
                        className="select select-primary w-full max-w-xs text-black">
                        {
                            specialties?.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-black">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value='Add Doctor' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;