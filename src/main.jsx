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
        path:'review',
        element:<JobsReview></JobsReview>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
