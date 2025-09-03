import React from "react";
// import { useSelector } from "react-redux";

import Sidebar from "../features/dashboard/Sidebar";
import Navbar from "../features/dashboard/Navbar";

const DashboardPage = () => {

//   console.log(user , 'asdfsdf ')
  

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-[#0c0c0c]">
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            Hi User,
          </h1>
          <p className="text-gray-400 mb-6">
            Here’s your summary for the day
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
