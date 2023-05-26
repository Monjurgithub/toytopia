import React, { useContext } from 'react';
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { Tooltip } from 'react-tooltip';

const Navber = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to="blog">Blog</Link></li>
                            <li><Link to="alltoy">All Toy</Link></li>
                            {
                                user ?
                                    <ul><li><Link to="addtoy">Add A Toy</Link></li>
                                        <li><Link to="mytoy">My Toys</Link></li> </ul>
                                : ""
                            }
                        </div>
                    </div>
                    <a><img src={logo} className='h-10 w-18' alt="" /></a>
                    <Link to="/"><a className="btn btn-ghost normal-case text-xl">Toytopia</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="blog">Blog</Link></li>
                        <li><Link to="alltoy">All Toy</Link></li>
                        {
                            user ? <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-2"><li><Link to="addtoy">Add A Toy</Link></li>
                                    <li><Link to="mytoy">My Toys</Link></li> </ul>
                            </div> : ""
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex gap-2' data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}><img className="w-10 rounded-full "
                            src={user?.photoURL} alt="" /><Link to="/" ><button className="btn btn-outline btn-primary" onClick={handleLogout}>LogOut</button></Link></div> :
                            <Link to="login"><a className="btn btn-outline btn-primary">Login</a></Link>
                    }
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navber;