import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './common/Layout'
import './index.css'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login'
let router=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/dashboard',
          element:<Dashboard/>
        }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <> 
     <RouterProvider router={router} /> 
  </>,
)
