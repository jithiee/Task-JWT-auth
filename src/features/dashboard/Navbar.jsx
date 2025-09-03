import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-[#0b0b0b] border-b border-gray-800">
      <div className="flex items-center gap-4">
        <span className="text-gray-400 uppercase text-sm tracking-wide">Dashboard / Overview</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-yellow-700 text-black px-3 py-1 rounded text-xs font-semibold">Upgrade to Premium</button>
        <button className="text-gray-400 text-sm hover:underline">Help Center</button>
        <button className="text-gray-400 text-sm hover:underline">Feedback</button>
        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">M</div>
      </div>
    </div>
  );
};

export default Navbar;
