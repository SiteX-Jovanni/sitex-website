import React from "react";
import { SiteXLogo1 } from "./SiteXLogo1";

const Placeholder = () => {
  return (
    <div className="text-center max-w-2xl px-4 py-8 text-white">
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
          className="text-1xl md:text-2xl lg:text-3xl text-blue-50"
          style={{ fontWeight: "600", letterSpacing: "0.01em" }}
        >
          Deze website is momenteel nog in ontwikkeling
        </h2>

        {/* Subtiele geanimeerde badge i.p.v. loading-dots */}
        <div className="pt-6 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-300/40 bg-blue-900/30 px-4 py-2 backdrop-blur-sm animate-[pulse_3s_ease-in-out_infinite]">
            <span className="h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.9)]" />
            <span className="text-xs md:text-sm tracking-[0.25em] text-blue-100/80">
              Binnenkort beschikbaar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
