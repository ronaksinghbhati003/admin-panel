import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './common/Layout'
import './index.css'
import AddCategory from './pages/AddCategory.jsx'
import AddColor from './pages/AddColor.jsx'
import AddCountry from './pages/AddCountry.jsx'
import AddFaq from './pages/AddFaq.jsx'
import AddMaterial from './pages/AddMaterial.jsx'
import AddProduct from './pages/AddProduct.jsx'
import AddSlider from './pages/AddSlider.jsx'
import AddSubCategory from './pages/AddSubCategory.jsx'
import AddSubSubCategory from './pages/AddSubSubCategory.jsx'
import AddTestimonials from './pages/AddTestimonials.jsx'
import AddWhyChoose from './pages/AddWhyChoose.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Enquiry from './pages/Enquiry.jsx'
import Login from './pages/Login'
import Newsletter from './pages/Newsletter.jsx'
import Orders from './pages/Orders.jsx'
import ViewCategory from './pages/ViewCategory.jsx'
import ViewColor from './pages/ViewColor.jsx'
import ViewCountry from './pages/ViewCountry.jsx'
import ViewFaq from './pages/ViewFaq.jsx'
import ViewMaterial from './pages/ViewMaterial.jsx'
import ViewProduct from './pages/ViewProduct.jsx'
import ViewSlider from './pages/ViewSlider.jsx'
import ViewSubCategory from './pages/ViewSubCategory.jsx'
import ViewSubSubCategory from './pages/ViewSubSubCategory.jsx'
import ViewTestimonials from './pages/ViewTestimonials.jsx'
import ViewUser from './pages/ViewUser.jsx'
import ViewWhyChoose from './pages/ViewWhyChoose.jsx'
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
        },
         {
          path:'/user',
          element:<ViewUser/>
         },
         {
          path:'/enquiry',
          element:<Enquiry/>
         },
         {
          path:'/newsletter',
          element:<Newsletter/>
         },
         {
          path:'/addcolor',
          element:<AddColor/>
         },
         {
          path:'/viewcolor',
          element:<ViewColor/>
         },
         {
          path:'/addmaterial',
          element:<AddMaterial/>
         },
         {
          path:'/viewmaterial',
          element:<ViewMaterial/>
         },
         {
          path:'/addcategory',
          element:<AddCategory/>
         },
         {
          path:'/viewcategory',
          element:<ViewCategory/>
         },
         {
          path:'/addsubcategory',
          element:<AddSubCategory/>
         },
         {
          path:'/viewsubcategory',
          element:<ViewSubCategory/>
         },
         {
          path:'/addsubsubcategory',
          element:<AddSubSubCategory/>
         },
         {
          path:'/viewsubsubcategory',
          element:<ViewSubSubCategory/>
         },
         {
          path:'/addproduct',
          element:<AddProduct/>
         },
         {
          path:'/viewproduct',
          element:<ViewProduct/>
         },
         {
          path:'/addwhychooseus',
          element:<AddWhyChoose/>
         },
         {
          path:'/viewwhychooseus',
          element:<ViewWhyChoose/>
         },
         {
          path:'/orders',
          element:<Orders/>
         },
         {
          path:'/addslider',
          element:<AddSlider/>
         },
         {
          path:'/viewslider',
          element:<ViewSlider/>
         },
         {
          path:'/addcountry',
          element:<AddCountry/>
         },
         {
          path:'/viewcountry',
          element:<ViewCountry/>
         },
         {
          path:'/addtestimonials',
          element:<AddTestimonials/>
         },
         {
          path:'/viewtestimonials',
          element:<ViewTestimonials/>
         },
         {
          path:'/addfaq',
          element:<AddFaq/>
         },
         {
          path:'/viewfaq',
          element:<ViewFaq/>
         }
      ]
    }   
])

createRoot(document.getElementById('root')).render(
  <> 
     <RouterProvider router={router} /> 
  </>,
)
