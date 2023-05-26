import React from 'react';


const Banner = () => {
    return (
        <section className="text-gray-600 body-font my-12">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" data-aos="fade-right" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                        <br className="hidden lg:inline-block" />readymade Toy
                    </h1>
                    <p className="mb-8 leading-relaxed">Welcome to Toytopia, your ultimate destination for all things play and wonder! Step into a world of boundless imagination where joy knows no bounds. At Toytopia, we believe in the power of play to ignite creativity, spark curiosity, and bring smiles to faces of all ages.</p>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="fade-left" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/7rNst1M/play.jpg" />
                </div>
            </div>
        </section>
    );
};

export default Banner;