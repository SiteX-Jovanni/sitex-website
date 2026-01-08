interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  animated?: boolean;
}

export function Logo4({ variant = 'dark', className = '', animated = true }: LogoProps) {
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
      >
        <defs>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          </linearGradient>
          <radialGradient id="radial4">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#1e3a8a', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        {/* Three connected dots forming WWW */}
        <circle 
          cx="14" 
          cy="24" 
          r="5" 
          stroke="url(#gradient4)" 
          strokeWidth="2.5" 
          fill="none"
          className={animated ? "transition-all duration-300 group-hover:r-[6] group-hover:stroke-[3]" : ""}
        />
        <circle 
          cx="24" 
          cy="24" 
          r="5" 
          stroke="url(#gradient4)" 
          strokeWidth="2.5" 
          fill="none"
          className={animated ? "transition-all duration-300 group-hover:r-[6] group-hover:stroke-[3]" : ""}
        />
        <circle 
          cx="34" 
          cy="24" 
          r="5" 
          stroke="url(#gradient4)" 
          strokeWidth="2.5" 
          fill="none"
          className={animated ? "transition-all duration-300 group-hover:r-[6] group-hover:stroke-[3]" : ""}
        />
        {/* Glow effect on hover */}
        <circle cx="14" cy="24" r="5" fill="url(#radial4)" className={animated ? "opacity-0 transition-opacity duration-300 group-hover:opacity-100" : ""} />
        <circle cx="24" cy="24" r="5" fill="url(#radial4)" className={animated ? "opacity-0 transition-opacity duration-300 group-hover:opacity-100" : ""} />
        <circle cx="34" cy="24" r="5" fill="url(#radial4)" className={animated ? "opacity-0 transition-opacity duration-300 group-hover:opacity-100" : ""} />
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