import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register';
import Login from './Components/Login.jsx';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import AddProduct from './Components/AddProduct';
// import UpdateProduct from './Components/UpdateProduct.jsx';
import ProductList from './Components/ProductList.jsx';
import UpdateList from './Components/UpdateList.jsx';
import SearchProducts from './Components/SearchProducts.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/add",
    element: <AddProduct/>,
  },
    {
      path:'/updateProduct/:id',
      element:<UpdateList/>,
    },
         
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/productList",
    element: <ProductList/>,
  },

  {
    path: "/search",
    element: <SearchProducts/>,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
