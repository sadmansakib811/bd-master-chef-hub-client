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
import FullRecipe from './components/fullRecipe/FullRecipe.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Blog from './components/Blog/Blog.jsx';
import ErrorPage from './error-page.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
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
        path: '/chef/:id',
        element: <PrivateRoute><Chef></Chef></PrivateRoute> ,
        loader:({params})=>fetch(`http://localhost:5000/chef/${params.id}`),
        
        
      },

      {
        path: '/fullRecipe/:id',
        element:<PrivateRoute><FullRecipe></FullRecipe></PrivateRoute> ,
        loader:({params})=>fetch(`http://localhost:5000/fullRecipe/${params.id}`),
        
        
      },
      {
        path: '/blog',
        element: <Blog></Blog>
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
