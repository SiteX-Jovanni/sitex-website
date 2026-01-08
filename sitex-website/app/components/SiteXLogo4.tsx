interface LogoProps {
  className?: string;
  animated?: boolean;
}

export function SiteXLogo4({ className = '', animated = true }: LogoProps) {
  const textColor = 'text-white';

  return (
    <div className={`flex items-center gap-3 group bg-[#1e3a8a] px-6 py-4 rounded-lg ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? "transition-transform duration-500 group-hover:rotate-180" : ""}
      >
        <defs>
          <linearGradient id="gradientX4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Hexagon */}
        <path
          d="M24 6 L38 14 L38 30 L24 38 L10 30 L10 14 Z"
          stroke="url(#gradientX4)"
          strokeWidth="2.5"
          fill="none"
          className={animated ? "transition-all duration-300 group-hover:stroke-[3]" : ""}
        />
        {/* X inside */}
        <line x1="16" y1="16" x2="32" y2="32" stroke="url(#gradientX4)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="32" y1="16" x2="16" y2="32" stroke="url(#gradientX4)" strokeWidth="2.5" strokeLinecap="round" />
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