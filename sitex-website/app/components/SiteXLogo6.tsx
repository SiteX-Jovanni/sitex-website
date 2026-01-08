interface LogoProps {
  className?: string;
  animated?: boolean;
}

export function SiteXLogo6({ className = '', animated = true }: LogoProps) {
  const textColor = 'text-white';

  return (
    <div className={`flex items-center gap-3 group bg-[#1e3a8a] px-6 py-4 rounded-lg ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradientX6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Square frame */}
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="4"
          stroke="url(#gradientX6)"
          strokeWidth="2.5"
          fill="none"
          className={animated ? "transition-all duration-500 group-hover:stroke-[3] group-hover:rx-[6]" : ""}
        />
        {/* X in center */}
        <line
          x1="18"
          y1="18"
          x2="30"
          y2="30"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          className={animated ? "transition-all duration-300 group-hover:stroke-[#93c5fd]" : ""}
        />
        <line
          x1="30"
          y1="18"
          x2="18"
          y2="30"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          className={animated ? "transition-all duration-300 group-hover:stroke-[#93c5fd]" : ""}
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