import React from "react";
import { MdDashboard, MdFeed, MdPerson, MdWarning, MdFlag } from "react-icons/md";

const Sidebar = () => {
  const menuItems = [
    { name: "Overview", icon: <MdDashboard /> },
    { name: "All Feed", icon: <MdFeed /> },
    { name: "Profiles", icon: <MdPerson /> },
    { name: "Incidents", icon: <MdWarning /> },
    { name: "Campaigns", icon: <MdFlag /> },
  ];

  return (
    <div className="w-20 bg-[#0f0f0f] h-screen flex flex-col items-center py-6 space-y-6">
      {menuItems.map((item) => (
        <div key={item.name} className="flex flex-col items-center text-gray-400 hover:text-white cursor-pointer">
          <div className="text-2xl">{item.icon}</div>
          <span className="text-xs mt-1">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
