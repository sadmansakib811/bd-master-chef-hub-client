import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Layout/Home.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Login from './components/Login.jsx';

import Register from './components/Register.jsx';
import AuthProviders from './components/providers/AuthProviders.jsx';
import Chef from './components/Chef/Chef.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/chef/:',
        element: <Chef></Chef>,
        loader:({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
        
      }
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
