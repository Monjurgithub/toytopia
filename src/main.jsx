import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import HomePage from './component/Home/HomePage.jsx';
import Blog from './component/Blog/Blog.jsx';
import Alltoy from './component/AllToy/Alltoy.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authprovider from './Provider/Authprovider.jsx';
import Addtoy from './component/AddToy/Addtoy.jsx';
import Mytoys from './component/mytoy/Mytoys.jsx';
import UpdateToy from './component/mytoy/UpdateToy.jsx';
import Viewdetails from './component/AllToy/Viewdetails.jsx';
import ProtectedRoute from './Provider/ProtectedRoute.jsx';
import ErrorPage from './Shared/Error.jsx';
import Error from './Shared/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "alltoy",
        element: <Alltoy></Alltoy>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
      ,
      {
        path: "addtoy",
        element: <ProtectedRoute><Addtoy></Addtoy></ProtectedRoute>
      },
      {
        path: "mytoy",
        element: <ProtectedRoute><Mytoys></Mytoys></ProtectedRoute>
      },
      {
        path: "update/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({params}) => fetch(`https://toy-server-lac.vercel.app/mytoy/${params.id}`)
        
      },
      {
        path: "view/:id",
        element:<ProtectedRoute><Viewdetails></Viewdetails></ProtectedRoute>,
        loader: ({params}) => fetch(`https://toy-server-lac.vercel.app/mytoy/${params.id}`)
        
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
