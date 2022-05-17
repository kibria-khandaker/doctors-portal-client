import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const { data: services, isLoading, refetch } = useQuery('services', () => fetch(`http://localhost:5000/service`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const imageStorageKey = 'c8407660ebe0da4fb4e33a9b4d5607e8'

    /**
     * 3 way to store image ----
     * 1 third party storage // free open public storage is ok for practice project
     * 2 your own storage in your onw server (file system)
     * 3 database: Mongodb //
     *   
     * YUP: to validation file: search yup file validation file  react hook from
     */

    const onSubmit = async data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        // send img in imgbb site
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // send to your database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor Added Successfully')
                                reset();
                            }else{
                                toast.error('Doctor Added Failed')
                            }
                            // console.log('Doctor inserted', inserted);
                        })
                }
                // console.log('Image imgbb', result) 
            })




        // console.log('data done', data);

        // navigate('/appointment')
    }


    return (
        <div>
            <h2 className=' font-bold'> Add a new Doctor </h2>

            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxx  */}
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* xxxxxxxxxxxxx Name Field xxxxxxxxxxxx */}
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

                {/* xxxxxxxxxx Specialty Field xxxxxxxxxx */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Specialization </span>
                    </label>
                    <select className="select  select-bordered  w-full max-w-xs"
                        {...register("specialty")}
                    >
                        {
                            services.map(service => (
                                <option key={service._id} value={service.name} > {service.name} </option>
                            ))
                        }
                    </select>
                </div>

                {/* xxxxxxxxx Doctor img Field xxxxxxxxxx */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Photo </span>
                    </label>
                    <input
                        type="file"
                        className="input   select-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.name.message} </span>}
                    </label>
                </div>

                {/* xxxxxxxxxxxxx submit Btn xxxxxxxxxxxx */}
                <input className="btn w-full max-w-xs font-light text-xl mt-4" type="submit" value='Add' />

            </form>
            {/* yyyyyyyyyyyyyyyyyyyyyyyyyyyy  */}
        </div>
    );
};

export default AddDoctor;