interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  animated?: boolean;
}

export function Logo1({ variant = 'dark', className = '', animated = true }: LogoProps) {
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
        className={animated ? "transition-transform duration-300 group-hover:scale-110" : ""}
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect 
          x="6" 
          y="10" 
          width="36" 
          height="28" 
          rx="3" 
          stroke="url(#gradient1)" 
          strokeWidth="2.5" 
          fill="none"
          className={animated ? "transition-all duration-300 group-hover:stroke-[3]" : ""}
        />
        <circle cx="12" cy="16" r="1.5" fill={iconColor} className={animated ? "transition-all duration-300 group-hover:r-[2]" : ""} />
        <circle cx="17" cy="16" r="1.5" fill={iconColor} className={animated ? "transition-all duration-300 group-hover:r-[2]" : ""} />
        <circle cx="22" cy="16" r="1.5" fill={iconColor} className={animated ? "transition-all duration-300 group-hover:r-[2]" : ""} />
        <line x1="6" y1="21" x2="42" y2="21" stroke="url(#gradient1)" strokeWidth="2.5" />
        <line 
          x1="12" 
          y1="27" 
          x2="28" 
          y2="27" 
          stroke={iconColor} 
          strokeWidth="2" 
          strokeLinecap="round"
          className={animated ? "transition-all duration-500 group-hover:stroke-[#3b82f6]" : ""}
        />
        <line 
          x1="12" 
          y1="32" 
          x2="36" 
          y2="32" 
          stroke={iconColor} 
          strokeWidth="2" 
          strokeLinecap="round"
          className={animated ? "transition-all duration-500 group-hover:stroke-[#3b82f6]" : ""}
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