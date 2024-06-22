import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from '../../src/pages/Login/Login';
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Allusers from "../pages/Dashboard/AllUsers/Allusers";
import AdminRoute from "./AdminRoute";
import Payment1 from "../pages/Dashboard/Payment/Payment1";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import PetList from "../pages/PetList/PetList";
import PetCategory from "../pages/PetCategory/PetCategory";
import ShowPetDetails from "../pages/ShowPetDetails/ShowPetDetails";
import DonationCampaigns from "../pages/DonationCampaings/DonationCampaigns";
import ShowDonationCampaignDetails from "../pages/ShowDonationCampaignDetails/ShowDonationCampaignDetails";
import Donation from "../pages/Donation/Donation";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'petList',
          element:<PetList/>
        },
        {
          path: 'showPetDetails/:id',
          element:<PrivateRoute> <ShowPetDetails /></PrivateRoute>,
          loader: ({params}) => fetch(`https://bistro-boss-server-livid-nine.vercel.app/pets/${params.id}`),
          
      }
        ,
        {
          path: 'donationCampaigns',
          element: <DonationCampaigns />
      },
      {
        path: 'showDonationCampaignDetails/:id',
        element:<PrivateRoute> <ShowDonationCampaignDetails /></PrivateRoute>,
        loader: ({params}) => fetch(`https://bistro-boss-server-livid-nine.vercel.app/donationCampaigns/${params.id}`),
        
    }
      ,
        {
          path:'petCategory/:category',
          element:<PetCategory/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'signup',
          element:<SignUp/>
        },
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute>
        <Dashboard/>
      </PrivateRoute>,
      children:[
        // normal user routes
        {
          path:'userHome',
          element:<UserHome/>
        },
        {
          path:'donation',
          element:<Donation/>
        },
        {
          path:'payment1',
          element:<Payment1/>
        },

        // admin only routes
        {
          path:'adminHome',
          element:<AdminRoute>
            <AdminHome/>
          </AdminRoute> 
          }
        ,
        {
          path:'users',
          element:<AdminRoute>
            <Allusers/>
          </AdminRoute>
        }

      ]
    }
  ]);