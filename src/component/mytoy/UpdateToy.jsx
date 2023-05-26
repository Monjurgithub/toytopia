import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [details, setDetails] = useState('');
  const loaded = useLoaderData();
  const navigate = useNavigate();

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const updateField = {price, quantity, details}

    fetch(`https://toy-server-lac.vercel.app/update/${loaded._id}`,
    {
        method: 'PUT',
        headers:
        {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updateField)
    }
    
    )
    .then(res=>res.json())
    .then(data=>
      {
        if(data.modifiedCount > 0)
        {
          Swal.fire({
            title: 'Success',
            text: 'Edit successfully',
            icon: 'success',
            confirmButtonText: 'Continue'
          })
          
        }
        navigate("/mytoy");
      })
    console.log(price, quantity, details);
  };

  return (
    <form className="max-w-sm mx-auto my-16" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="price">
          Price
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          type="text"
          id="price"
          value={price}
          onChange={handlePriceChange}
          placeholder="Enter price"
          defaultValue={loaded?.price}
          required
          
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="quantity">
          Quantity
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          type="text"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          placeholder="Enter quantity"
          defaultValue={loaded?.quantity}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700" htmlFor="details">
          Details
        </label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          id="details"
          value={details}
          onChange={handleDetailsChange}
          placeholder="Enter details"
          rows="4"
          defaultValue={loaded?.description}
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default UpdateToy;
