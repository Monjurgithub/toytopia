import React, { useEffect, useState } from 'react';
import SingleCard from '../AllToy/SingleCard';

const Selectcategory = () => {

    const [toys, setToys] = useState([]);
    const [category, setCategory]=  useState(toys)
    useEffect(() => {
        fetch('https://toy-server-lac.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setToys(data))

    }, [])

    const filterItems = (cateItem) =>
    {
        const updateItems = toys.filter((curr)=>{
            return curr.SubCategory === cateItem
        })
        setCategory(updateItems)
    }
    return (
        <div className='my-8'>
            <div data-aos="flip-up" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <h1 className='my-5 text-center text-5xl'>Select Your Faviorte Category</h1>
            </div>
            <hr />
            
            <div className="flex justify-center items-center my-6">
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={()=> filterItems('Horse')} data-aos="fade-right">
                        Horse
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={()=> filterItems('Cat')} data-aos="fade-up">
                        Cat
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> filterItems('Dinosaur')} data-aos="fade-left">
                        Dinosaur
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 justify-items-center'>
            {
                category.map(toy=> <SingleCard key={toy._id} toy={toy}></SingleCard>)
            }
            </div>
        </div>
    );
};

export default Selectcategory;