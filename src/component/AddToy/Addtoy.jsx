import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import { stringify } from 'postcss';
import PageTitle from '../../Shared/PageTitle';

const Addtoy = () => {
    const { user } = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const newData = {...data, price: parseFloat(data.price)};
        
        fetch("https://toy-server-lac.vercel.app/postToy", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    Swal.fire({
                        title: 'Added',
                        text: 'This is  added by user',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })

    };

    return (
        <div>
            <h3 className='text-5xl font-medium my-6 text-center'>Add A Toy</h3>
            <PageTitle title="Add Toy"></PageTitle>
            <form className='grid grid-cols-1 md:grid-cols-3 mb-20 mt-8' onSubmit={handleSubmit(onSubmit)}>

                <input className="input input-bordered input-primary w-full max-w-xs my-4" placeholder='Toy Name' {...register("name")} />
                <input className="input input-bordered input-primary w-full max-w-xs my-4" placeholder='Photo URL' {...register("url")} type='URL' />
                <input className="input input-bordered input-primary w-full max-w-xs my-4" value={user?.displayName} placeholder='Seller Name' {...register("sellername")} />
                <input className="input input-bordered input-primary w-full max-w-xs my-4" value={user?.email} placeholder='Seller Email'  {...register("selleremail")} />

                <select className="input input-bordered input-primary w-full max-w-xs my-4" {...register("SubCategory")}>
                    <option value="Horse">Horse</option>

                    <option value="Cat">Cat</option>

                    <option value="Dinosaur">Dinosaur</option>
                </select>

                <input className="input input-bordered input-primary w-full max-w-xs my-4" placeholder='Toy Price' {...register("price")} type='number' />
                <input className="input input-bordered input-primary w-full max-w-xs my-4" placeholder='Toy rating' {...register("rating")} type='number' />
                <input className="input input-bordered input-primary w-full max-w-xs my-4" placeholder='Available Quantity' {...register("quantity")} type='number' />

                <input className="textarea textarea-success lg:col-span-2 my-4" placeholder='Description' {...register("description")} />



                <input className="btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg my-4 content-center lg:col-span-3" type="submit" />
            </form>

        </div>
    );
};

export default Addtoy;