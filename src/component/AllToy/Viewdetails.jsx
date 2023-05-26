import React from 'react';
import Rating from 'react-rating';

import { FaRegStar, FaStar } from "react-icons/fa";

import { useLoaderData } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle';

const Viewdetails = () => {
    const loaded = useLoaderData();
    const { url, sellername, selleremail, description, SubCategory, price, quantity, rating } = loaded


    return (
        <section className="text-gray-600 body-font">
            <PageTitle title="Toy Details"></PageTitle>
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={url} />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">

                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Seller Name: {sellername}</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-base">Seller Mail: {selleremail}</p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">Toy Description: {description}</p>
                            <p className="leading-relaxed text-lg mb-4">Toy Catagory: {SubCategory}</p>
                            <p className="leading-relaxed text-lg mb-4">Toy Price:$  {price}</p>
                            <p className="leading-relaxed text-lg mb-4">ToyQuantity: {quantity}</p>
                            <Rating
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                                readonly />



                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Viewdetails;