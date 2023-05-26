import React, { useContext, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import PageTitle from '../../Shared/PageTitle';
import Google from '../../Shared/Google';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { singInUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  
  const handleSubmit = (e) => {
    e.preventDefault();

    singInUser(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate(from, { replace: true })
        if(user)
        {
          Swal.fire({
            title: 'Success',
            text: 'login successfully',
            icon: 'success',
            confirmButtonText: 'Continue'
          })
        }
        
      })
      .catch((error) => {
        if(error)
        {
          Swal.fire({
            title: 'Error!',
            text: 'Invalied Email and password',
            icon: 'error',
            confirmButtonText: 'ok'
          })
        }
        const errorMessage = error.message;
      });

  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center ">
      <PageTitle title='login'></PageTitle>
      <div className="w-full max-w-md max-w-sm p-4 mt-4">
        <h2 className="mb-4 text-2xl font-semibold text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
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
          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <div className="flex">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"

                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="ml-2 focus:outline-none"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <FiEyeOff className="text-gray-600 h-5 w-5" />
                ) : (
                  <FiEye className="text-gray-600 h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          
          <p className="my-4 text-center">New to Toytopia? <Link className="font-bold text-cyan-600" to="/register">Sign Up</Link></p>
          <button
            type="submit"
            className="w-full py-2 px-4 mt-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
        <Google></Google>


      </div>
    </div>
  );
};

export default Login;
