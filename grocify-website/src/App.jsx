import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Fruits from './components/Fruits/Fruits'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dairy from './components/Dairy/Dairy'
import SeaFood from './components/SeaFood/SeaFood'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'
import Process from './components/Process/Process'
import ContectUs from './components/ContectUs/ContectUs'
import AboutUs from './components/AboutUs/AboutUs'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },

        {
          path: '/process',
          element: <Process />
        },

        {
          path: '/contact',
          element: <ContectUs />
        },

        {
          path: '/about',
          element: <AboutUs />
        },

        {
          path: '/fruits',
          element: <Fruits />
        },

        {
          path: '/dairy',
          element: <Dairy />
        },

        {
          path: '/seafood',
          element: <SeaFood />
        },

        {
          path: '/allproduct',
          element: <AllProducts />
        },


      ]
    },



  ])
  return <RouterProvider router={router} />


}

export default App
