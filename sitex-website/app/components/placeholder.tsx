import React from "react";
import { SiteXLogo1 } from "./SiteXLogo1";

const Placeholder = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white">
      <div>
        {/* <SiteXLogo1 className="!bg-transparent !p-0" /> */}
        <h2 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: "600" }}>
          Site is under construction. Coming Soon!
        </h2>
      </div>
    </div>
  );
};

export default Placeholder;
