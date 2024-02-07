import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MAINlayout from './LAYOUTS/MAINLAYOUT/MAINlayout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/PORTFOLIO/Portfolio'
import Contact from './components/Contact/Contact'

export default function App() {
  let routes = createBrowserRouter([
    {path:'/',element:<MAINlayout/>,children:[
      {path:'Home',element:<Home/>},
      {index:true,element:<Home/>},
      {path:'About',element:<About/>},
      {path:'Portfolio',element:<Portfolio/>},
      {path:'Contact',element:<Contact/>},
    ]}
  ])


  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}