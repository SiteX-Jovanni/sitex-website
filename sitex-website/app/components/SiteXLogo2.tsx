interface LogoProps {
  className?: string;
  animated?: boolean;
}

export function SiteXLogo2({ className = '', animated = true }: LogoProps) {
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
          <linearGradient id="gradientX2a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="gradientX2b" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#93c5fd', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* First line */}
        <line
          x1="12"
          y1="12"
          x2="36"
          y2="36"
          stroke="url(#gradientX2a)"
          strokeWidth="4"
          strokeLinecap="round"
          className={animated ? "transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1" : ""}
        />
        {/* Second line */}
        <line
          x1="36"
          y1="12"
          x2="12"
          y2="36"
          stroke="url(#gradientX2b)"
          strokeWidth="4"
          strokeLinecap="round"
          className={animated ? "transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" : ""}
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