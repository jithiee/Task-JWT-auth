import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./layoutpage/Layout";
import Signup from "./features/auth/signup/Signup";
import LoginForm from "./features/auth/login/LoginForm";
import Home from "./features/home/Home";
import DashboardPage from "./pages/DashboardPage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ProtectedRoute from "./components/ProtectedRoute";
import Page404 from "./components/Page404";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* Signup & Login can't be accessed if already logged in */}
        <Route
          path=""
          element={
            <ProtectedRoute authPage>
              <Signup />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute authPage>
              <LoginForm />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route
        path="home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/userdashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
         <Route path="*" element={<Page404 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);



