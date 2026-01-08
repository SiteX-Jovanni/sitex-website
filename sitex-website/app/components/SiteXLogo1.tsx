interface LogoProps {
  className?: string;
  animated?: boolean;
}

export function SiteXLogo1({ className = '', animated = true }: LogoProps) {
  const textColor = 'text-white';

  return (
    <div className={`flex items-center gap-3 group bg-[#1e3a8a] px-6 py-4 rounded-lg ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? "transition-transform duration-500 group-hover:scale-110" : ""}
      >
        <defs>
          <linearGradient id="gradientX1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Bold X shape */}
        <path
          d="M10 10 L38 38 M38 10 L10 38"
          stroke="url(#gradientX1)"
          strokeWidth="5"
          strokeLinecap="round"
          className={animated ? "transition-all duration-300 group-hover:stroke-[6]" : ""}
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