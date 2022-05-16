import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log('data done', data);
        // navigate('/appointment')
    }


    return (
        <div>
            <h2 className=' font-bold'> Add a new Doctor </h2>

            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxx  */}
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* xxxxxxxxxxxx Name Field xxxxxxxxxxxx */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name </span>
                    </label>
                    <input
                        type="name"
                        placeholder="Type Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },
                            // minLength: {
                            //     value: 6,
                            //     message: 'Name Minimum 6 Characters  '
                            // }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.name.message} </span>}
                        {/* {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500"> {errors.name.message} </span>} */}
                    </label>
                </div>

                {/* xxxxxxxxxxxx Email Field xxxxxxxxxxxx */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email </span>
                    </label>
                    <input
                        type="email"
                        placeholder="Type Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a Valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.email.message} </span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500"> {errors.email.message} </span>}

                    </label>
                </div>

                {/* xxxxxxxxxxxx password Field xxxxxxxxxxxx */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Specialization </span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type Specialty"
                        className="input input-bordered w-full max-w-xs"
                        {...register("specialty", {
                            required: {
                                value: true,
                                message: 'specialty is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.password.message} </span>}
                    </label>
                </div>

                {/* xxxxxxxxxxxx submit Btn xxxxxxxxxxxx */}
                <input className="btn w-full max-w-xs font-light text-xl mt-4" type="submit" value='Add' />

            </form>
            {/* yyyyyyyyyyyyyyyyyyyyyyyyyyyy  */}
        </div>
    );
};

export default AddDoctor;