import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSection from '../layouts/LeftSection';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-[#121212]">
      
      <LeftSection />

      <div className="w-full lg:w-[40%] ">
        <div className="w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
