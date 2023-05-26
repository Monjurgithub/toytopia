import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageTitle from '../../Shared/PageTitle';

const Mytoys = () => {

    const [mytoys, setMytoys] = useState([])

    const { user } = useContext(AuthContext);

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-server-lac.vercel.app/delete/${id}`,
                    {
                        method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'

                            )
                            const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                            setMytoys(remaining)

                        }


                    })
            }
        })


    }
    useEffect(() => {
        fetch(`https://toy-server-lac.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [])
    return (
        <div>
            <PageTitle title="My Toy"></PageTitle>
            <div className="overflow-x-auto">
                <table className="table w-full my-36">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>subcategory</th>
                            <th>price</th>
                            <th>rating</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys?.map((mytoy, index) => (
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{mytoy.name}</td>
                                    <td>{mytoy.sellername}</td>
                                    <td>{mytoy.selleremail}</td>
                                    <td>{mytoy.SubCategory}</td>
                                    <td>{mytoy.price}</td>
                                    <td>{mytoy.rating}</td>
                                    <td>{mytoy.quantity}</td>
                                    <td>{mytoy.description}</td>

                                    <td><Link to={`/update/${mytoy._id}`}><button className='btn'>Edit</button></Link></td>
                                    <td><button onClick={() => handleDelete(mytoy._id)} className='btn'>delete</button></td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mytoys;