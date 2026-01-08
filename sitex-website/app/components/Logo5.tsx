interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  animated?: boolean;
}

export function Logo5({ variant = 'dark', className = '', animated = true }: LogoProps) {
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
        className={animated ? "transition-transform duration-300 group-hover:scale-105" : ""}
      >
        <defs>
          <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Pixel grid forming W with gradient fills */}
        <rect x="10" y="14" width="5" height="5" fill="url(#gradient5)" className={animated ? "transition-all duration-200 group-hover:opacity-80" : ""} />
        <rect x="10" y="21" width="5" height="5" fill="url(#gradient5)" className={animated ? "transition-all duration-300 group-hover:opacity-80" : ""} />
        <rect x="10" y="28" width="5" height="5" fill="url(#gradient5)" className={animated ? "transition-all duration-400 group-hover:opacity-80" : ""} />
        
        <rect x="17" y="28" width="5" height="5" fill={iconColor} className={animated ? "transition-all duration-300 group-hover:fill-[#3b82f6]" : ""} />
        <rect x="17" y="21" width="5" height="5" fill={iconColor} className={animated ? "transition-all duration-400 group-hover:fill-[#3b82f6]" : ""} />
        
        <rect x="24" y="14" width="5" height="5" fill="url(#gradient5)" className={animated ? "transition-all duration-200 group-hover:opacity-80" : ""} />
        <rect x="24" y="21" width="5" height="5" fill="url(#gradient5)" className={animated ? "transition-all duration-300 group-hover:opacity-80" : ""} />
        <rect x="24" y="28" width="5" height="5" fill="url(#gradient5)" className={animated ? "transition-all duration-400 group-hover:opacity-80" : ""} />
        
        <rect x="31" y="28" width="5" height="5" fill={iconColor} className={animated ? "transition-all duration-300 group-hover:fill-[#3b82f6]" : ""} />
        <rect x="31" y="21" width="5" height="5" fill={iconColor} className={animated ? "transition-all duration-400 group-hover:fill-[#3b82f6]" : ""} />
        
        <rect x="38" y="14" width="5" height="5" fill="url(#gradient5)" className={animated ? "transition-all duration-200 group-hover:opacity-80" : ""} />
        <rect x="38" y="21" width="5" height="5" fill="url(#gradient5)" className={animated ? "transition-all duration-300 group-hover:opacity-80" : ""} />
        <rect x="38" y="28" width="5" height="5" fill="url(#gradient5)" className={animated ? "transition-all duration-400 group-hover:opacity-80" : ""} />
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