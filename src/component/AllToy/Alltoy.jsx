import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle';


const Alltoy = () => {
    const [toys, setToys] = useState([]);
    const [search, setSearch] = useState(null)
    
    useEffect(() => {
        fetch('https://toy-server-lac.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setToys(data))

    }, [])



    const handlesearch = () => {
        fetch(`https://toy-server-lac.vercel.app/search/${search}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }


    const handleSort = () =>
    {
        fetch("https://toy-server-lac.vercel.app/sort")
        .then(res=> res.json())
        .then(data => setToys(data))

    }



    return (
        <div>
            <div className='text-center p-4 text-3xl font-semibold'>All Toys Here</div>
            <PageTitle title="All Toy"></PageTitle>
            <div className='my-8 flex justify-center'>
                <input className="input input-bordered input-primary w-full max-w-xs" type="text" onChange={e => setSearch(e.target.value)} />
                <button className="btn btn-outline btn-info ml-2" onClick={handlesearch}>Search</button>
                <button className='btn mx-2' onClick={handleSort}>High to low</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full my-8">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sun-Category</th>
                            <th>Price</th>
                            <th>Avaiable Quantity</th>
                            <th>View Button</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            toys?.map((toy, index) => (
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{toy.sellername}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.SubCategory}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td><Link to={`/view/${toy._id}`}><button className='btn'>View Details</button></Link></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Alltoy;