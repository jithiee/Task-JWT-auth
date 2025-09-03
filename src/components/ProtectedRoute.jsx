import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, authPage = false }) {
  const { token } = useSelector((state) => state.auth);

  const isAuthenticated = Boolean(token);

  // If user is logged in and tries to access login/signup → redirect to dashboard
  if (authPage && isAuthenticated) {
    return <Navigate to="/userdashboard" replace />;
  }

  // If user is not logged in and tries to access protected page → redirect to login
  if (!authPage && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
