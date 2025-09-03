import React from "react";
import VerifiedBadge from "../components/VerifiedBadge";

const LeftSection = () => {
  return (
    <div className="hidden lg:flex lg:w-[60%] bg-[#0b0b0b] pl-32 pt-32 flex-col justify-between min-h-screen">
      <div>
        <div className="flex items-center gap-3 mb-20">
          <div className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center border border-gray-700">
            {/* Logo +++ */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.5 9H8.5L12 2Z" fill="#fff" />
            </svg>
          </div>
          <div className="uppercase tracking-widest text-4xl font-semibold text-gray-200">
            Falconfeeds<span className="text-red-600 text-4xl">.</span>io
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-2xl text-white">
          Hunt, Identify and{" "}
          <span className="inline-block">
            <span className="text-[#18b485]">Act</span>
            <span className="ml-2"> on </span>
            <span className="ml-2 text-[#ff3b30]">threats </span>
            <span className="ml-2"> before </span>
          </span>
          <span className="block">
            they can harm you<span className="text-[#ff3b30] text-sm"> ■</span>
          </span>
        </h1>

        <div className="space-y-5 mt-8 max-w-xl text-gray-300">
          {[
            "Comprehensive threat actor directory",
            "Constantly updated threat feeds",
            "Safe source for tracking threat actors and campaigns",
            "Data funnelled from all parts of the internet",
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-8 h-10 flex items-center justify-center mt-[-5px]">
                <VerifiedBadge/>
              </div>
              <div className="text-lg">{t}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-gray-400 text-sm mb-10">
        Powered by <span className="font-semibold text-white">technisanct</span>
      </div>
    </div>
  );
};

export default LeftSection;
