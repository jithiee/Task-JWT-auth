import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-red-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mt-2 text-gray-400">
          Oops! The page you are looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 text-lg font-medium rounded-lg bg-red-500 hover:bg-red-600 transition"
        >
          Go Sign up page
        </Link>
      </div>
    </div>
  );
};

export default Page404;
