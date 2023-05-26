import React, { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/Authprovider';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageTitle from '../../Shared/PageTitle';
import Google from '../../Shared/Google';



const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      toast("Your password must be 6 character or longer");
      return;
    }
    createUser(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        if (user) {
          Swal.fire({
            title: 'Success',
            text: 'successfully Register',
            icon: 'success',
            confirmButtonText: 'Continue'
          })
        }

        updateProfile(user, { displayName: name })
        updateProfile(user, { photoURL: photoUrl })
        navigate("/")
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage)
        // ..
      });

  };



  return (
    <div className="flex items-center justify-center min-h-full">
      <PageTitle title="Register"></PageTitle>
      <div className="w-full max-w-md p-4">
        <h2 className="mb-2 text-2xl font-semibold text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photoUrl" className="block mb-2 text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              id="photoUrl"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter the URL of your photo"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>
          <p className="my-4 text-center">Already have an account? <Link className="font-bold text-cyan-600" to="/login">Login</Link></p>
          <button
            type="submit"
            className="w-full py-2 px-4 mt-2 mb-12 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Register
          </button>
        </form>
        <Google></Google>
      </div>
    </div>
  );
};

export default Register;
