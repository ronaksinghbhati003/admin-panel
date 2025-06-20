import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './common/Layout'
import MainLayout from './common/MainLayout.jsx'
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
import CompanyProfile from './pages/CompanyProfile.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Enquiry from './pages/Enquiry.jsx'
import Login from './pages/Login'
import Newsletter from './pages/Newsletter.jsx'
import Orders from './pages/Orders.jsx'
import Profile from './pages/Profile.jsx'
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
           path:'/updatecolor/:id',
           element:<AddColor/>
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
           path:'/updatematerial/:id',
           element:<AddMaterial/>
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
            path:'/update/category/:id?',
            element:<AddCategory/>
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
           path:'/updatesubcategory/:id',
           element:<AddSubCategory/>
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
            path:'/updatesubsubcategory/:sid',
            element:<AddSubSubCategory/>
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
          path:'/updateproduct/:id',
          element:<AddProduct/>
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
          path:'/updatewhychooseus/:id',
          element:<AddWhyChoose/>
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
          path:'/updateslider/:id',
          element:<AddSlider/>
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
          path:'/updatecountry/:id',
          element:<AddCountry/>
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
             path:'/updatetestimonials/:id',
             element:<AddTestimonials/>
         },
         {
          path:'/addfaq',
          element:<AddFaq/>
         },
         {
          path:'/viewfaq',
          element:<ViewFaq/>
         },
         {
             path:'/updatefaq/:id',
             element:<AddFaq/>
         },
         {
          path:'/profile',
          element:<Profile/>
         },
         {
          path:'/companyprofile',
          element:<CompanyProfile/>
         }
      ]
    }   
])

createRoot(document.getElementById('root')).render(
  <> 

    <MainLayout>
     <RouterProvider router={router} /> 
    </MainLayout>
  </>,
)
