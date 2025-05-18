import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Courses from './Component/Page/Courses';
import ContactUs from './Component/Page/ContactUs';
import Student from './Component/Page/Student';



import Home from './Component/Page/Home';
import Gallery from './Component/Page/Gallery';



const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {
      path: "",
      element: <Home/> 
    },
    {
      path: "Courses",
      element: <Courses/> 
    },
    {
      path: "ContactUs",
      element: <ContactUs/> 
    },
    {
      path: "Gallery",
      element: <Gallery/> 
    },
    {
      path: "Student",
      element: <Student/> 
    },
   
  ]
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
