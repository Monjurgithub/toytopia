import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SingleCard = ({ toy }) => {

    const { _id, sellername, name, SubCategory, price, quantity, rating, url } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-8" data-aos="zoom-in-down" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <figure className="px-10 pt-10">
                <img src={url} alt="Shoes" className="rounded-xl object-fill h-48 w-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className='justify-between '>
                    <p>Price : {price}</p>
                    <p>
                    <Rating
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                                readonly />
                    </p>
                </div>
                <div className="card-actions">
                <td><Link to={`/view/${toy._id}`}><button className='btn'>View Details</button></Link></td>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;