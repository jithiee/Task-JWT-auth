import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import Layout from './layoutpage/Layout';
import Signup from './features/auth/signup/Signup';
import LoginForm from './features/auth/login/LoginForm';
import Home from './features/home/Home';
import DashboardPage from './pages/DashboardPage';
import { Provider } from "react-redux";
import { store } from "./app/store";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path="/" element={<Layout />}>
        <Route path='' element={<Signup />} />
        <Route path='/login' element={<LoginForm />} />
     
      </Route>
         <Route path='home' element={<Home />} />
         <Route path='/userdashboard' element={< DashboardPage/>} >

      </Route>

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>

      <RouterProvider router={router} />
     </Provider>

  </StrictMode>,
)
