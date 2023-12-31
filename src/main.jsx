import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import First_page from './components/First_page/First_page'
import Foods from './components/Foods/Foods'
import Login_page from './components/Login_page/Login_page'
import My_gym from './components/My_gym/My_gym'
import Countries from './components/Countries/Countries'
import Show_foods from './components/Show_foods/Show_foods'
import Rechart from './components/Rechart/Rechart'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First_page></First_page>,
      },
      {
        path: '/foods',
        element: <Foods></Foods>,
        // loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=egg')
      },
      {
        path: '/show_foods',
        element: <Show_foods></Show_foods>,
        // loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=egg')
      },
      {
        path: '/rechart',
        element: <Rechart></Rechart>
      },
      {
        path: '/my_gym',
        element: <My_gym></My_gym>
      },
      {
        path: '/countries',
        element: <Countries></Countries>,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: '/login', 
        element: <Login_page></Login_page>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
