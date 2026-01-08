interface LogoProps {
  className?: string;
  animated?: boolean;
}

export function SiteXLogo3({ className = '', animated = true }: LogoProps) {
  const textColor = 'text-white';

  return (
    <div className={`flex items-center gap-3 group bg-[#1e3a8a] px-6 py-4 rounded-lg ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? "transition-transform duration-500 group-hover:scale-105" : ""}
      >
        <defs>
          <linearGradient id="gradientX3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Circuit X with nodes */}
        <line x1="10" y1="10" x2="38" y2="38" stroke="url(#gradientX3)" strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="10" x2="10" y2="38" stroke="url(#gradientX3)" strokeWidth="3" strokeLinecap="round" />
        
        {/* Corner nodes */}
        <circle 
          cx="10" 
          cy="10" 
          r="3" 
          fill="#ffffff"
          className={animated ? "transition-all duration-300 group-hover:r-[4] group-hover:fill-[#93c5fd]" : ""}
        />
        <circle 
          cx="38" 
          cy="10" 
          r="3" 
          fill="#ffffff"
          className={animated ? "transition-all duration-300 group-hover:r-[4] group-hover:fill-[#93c5fd]" : ""}
        />
        <circle 
          cx="10" 
          cy="38" 
          r="3" 
          fill="#ffffff"
          className={animated ? "transition-all duration-300 group-hover:r-[4] group-hover:fill-[#93c5fd]" : ""}
        />
        <circle 
          cx="38" 
          cy="38" 
          r="3" 
          fill="#ffffff"
          className={animated ? "transition-all duration-300 group-hover:r-[4] group-hover:fill-[#93c5fd]" : ""}
        />
        
        {/* Center node */}
        <circle 
          cx="24" 
          cy="24" 
          r="4" 
          fill="url(#gradientX3)"
          className={animated ? "transition-all duration-300 group-hover:r-[5]" : ""}
        />
      </svg>
      <div className="flex flex-col">
        <span 
          className={`${textColor} tracking-tight ${animated ? 'transition-all duration-300 group-hover:tracking-wide' : ''}`} 
          style={{ fontSize: '28px', fontWeight: '700' }}
        >
          SiteX
        </span>
      </div>
    </div>
  );
}