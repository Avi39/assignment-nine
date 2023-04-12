import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import JobsReview from './components/JobsReview/JobsReview';
import JobDetails from './components/JobDetails/JobDetails';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('/jobs.json'),
        // loader:()=>fetch('/jobInfos.json'),
      },
      {
        path:'/jobDetails/:id',
        element:<JobDetails></JobDetails>,
        // loader:({params})=>fetch(`/jobs.json/${params.id}`)
        loader: async({params}) =>{
          const res = await fetch('/jobs.json');
          const data = await res.json();
          const job = data.find(info => info.id == params.id);
          return job; 
        }
      },
      {
        path:'review',
        element:<JobsReview></JobsReview>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
