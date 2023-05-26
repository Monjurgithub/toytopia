import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';

const Google = () => {
    const { google } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleGoogle = () => {
        google()
            .then((result) => {
                const user = result.user;
                navigate("/")
            })
            .catch((error) => {
                const errorMessage = error.message;
            });


    }


    return (
        <div className='flex justify-center items-center'>
            <div className=' w-2/4 p-4 bg-white shadow-md rounded-md lg:w-2/4'>
                <img onClick={handleGoogle} className='mb-24' src="https://i.ibb.co/k87jp0T/google-btn.png" alt="" />

            </div>
        </div>
    );
};

export default Google;