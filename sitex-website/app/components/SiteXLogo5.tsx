interface LogoProps {
  className?: string;
  animated?: boolean;
}

export function SiteXLogo5({ className = '', animated = true }: LogoProps) {
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
          <linearGradient id="gradientX5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Abstract curved X */}
        <path
          d="M8 8 Q24 24 40 40"
          stroke="url(#gradientX5)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          className={animated ? "transition-all duration-500 group-hover:stroke-[5]" : ""}
        />
        <path
          d="M40 8 Q24 24 8 40"
          stroke="url(#gradientX5)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          className={animated ? "transition-all duration-500 group-hover:stroke-[5]" : ""}
        />
        {/* Center glow */}
        <circle 
          cx="24" 
          cy="24" 
          r="0" 
          fill="#93c5fd"
          className={animated ? "transition-all duration-300 group-hover:r-[3] group-hover:opacity-60" : ""}
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