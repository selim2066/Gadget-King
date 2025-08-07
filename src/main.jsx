import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/error/Error';
import Root from './components/root/Root';
import Home from './components/Routs/Home/Home';
import GadgetDetails from './components/gadget/GadgetDetails';
import ShowD from './components/practice/ShowD';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"gadget/:product_id",
       loader: ()=> fetch("/gadget.json"),
        element: <GadgetDetails></GadgetDetails>
      },
      {
        path:"/showD",
        element:<ShowD></ShowD>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
