interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  animated?: boolean;
}

export function Logo6({ variant = 'dark', className = '', animated = true }: LogoProps) {
  const iconColor = '#1e3a8a';
  const textColor = 'text-[#1e3a8a]';

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? "transition-transform duration-500 group-hover:rotate-45" : ""}
      >
        <defs>
          <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          </linearGradient>
          <radialGradient id="radial6">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#1e3a8a', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        {/* Central node */}
        <circle 
          cx="24" 
          cy="24" 
          r="4" 
          fill="url(#gradient6)"
          className={animated ? "transition-all duration-300 group-hover:r-[5]" : ""}
        />
        {/* Glow effect */}
        <circle cx="24" cy="24" r="8" fill="url(#radial6)" className={animated ? "opacity-0 transition-opacity duration-300 group-hover:opacity-100" : ""} />
        
        {/* Outer nodes */}
        <circle 
          cx="12" 
          cy="12" 
          r="2.5" 
          fill={iconColor}
          className={animated ? "transition-all duration-300 group-hover:r-[3] group-hover:fill-[#3b82f6]" : ""}
        />
        <circle 
          cx="36" 
          cy="12" 
          r="2.5" 
          fill={iconColor}
          className={animated ? "transition-all duration-300 group-hover:r-[3] group-hover:fill-[#3b82f6]" : ""}
        />
        <circle 
          cx="12" 
          cy="36" 
          r="2.5" 
          fill={iconColor}
          className={animated ? "transition-all duration-300 group-hover:r-[3] group-hover:fill-[#3b82f6]" : ""}
        />
        <circle 
          cx="36" 
          cy="36" 
          r="2.5" 
          fill={iconColor}
          className={animated ? "transition-all duration-300 group-hover:r-[3] group-hover:fill-[#3b82f6]" : ""}
        />
        
        {/* Connecting lines */}
        <line 
          x1="24" 
          y1="24" 
          x2="12" 
          y2="12" 
          stroke="url(#gradient6)" 
          strokeWidth="2"
          className={animated ? "transition-all duration-300 group-hover:stroke-[2.5]" : ""}
        />
        <line 
          x1="24" 
          y1="24" 
          x2="36" 
          y2="12" 
          stroke="url(#gradient6)" 
          strokeWidth="2"
          className={animated ? "transition-all duration-300 group-hover:stroke-[2.5]" : ""}
        />
        <line 
          x1="24" 
          y1="24" 
          x2="12" 
          y2="36" 
          stroke="url(#gradient6)" 
          strokeWidth="2"
          className={animated ? "transition-all duration-300 group-hover:stroke-[2.5]" : ""}
        />
        <line 
          x1="24" 
          y1="24" 
          x2="36" 
          y2="36" 
          stroke="url(#gradient6)" 
          strokeWidth="2"
          className={animated ? "transition-all duration-300 group-hover:stroke-[2.5]" : ""}
        />
      </svg>
      <div className="flex flex-col">
        <span 
          className={`${textColor} tracking-tight ${animated ? 'transition-all duration-300 group-hover:tracking-wide' : ''}`} 
          style={{ fontSize: '24px', fontWeight: '600' }}
        >
          SiteBros
        </span>
      </div>
    </div>
  );
}