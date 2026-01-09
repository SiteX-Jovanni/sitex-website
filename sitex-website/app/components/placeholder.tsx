import React from "react";
import { SiteXLogo1 } from "./SiteXLogo1";

const Placeholder = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white px-4 py-8 overflow-hidden">
      <div className="text-center max-w-2xl">
        {/* Title Section */}
        <div className="mb-6 md:mb-8">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-3 md:mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
            style={{ fontWeight: "800", letterSpacing: "-0.02em" }}
          >
            SiteX
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-300 to-blue-100 mx-auto rounded-full"></div>
        </div>

        <div className="mt-8 md:mt-12 space-y-4">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-blue-50"
            style={{ fontWeight: "600", letterSpacing: "0.01em" }}
          >
            Website in aanbouw
          </h2>
          <p className="text-base md:text-lg text-blue-100 leading-relaxed">
            Binnenkort beschikbaar.
          </p>

          {/* Loading Dots */}
          <div className="flex justify-center gap-2 pt-4">
            <div
              className="w-3 h-3 bg-blue-300 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-3 h-3 bg-blue-300 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-blue-300 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
