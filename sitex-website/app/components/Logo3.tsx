interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  animated?: boolean;
}

export function Logo3({ variant = 'dark', className = '', animated = true }: LogoProps) {
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
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Left bracket */}
        <path
          d="M18 10 L10 10 L10 38 L18 38"
          stroke="url(#gradient3)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={animated ? "transition-all duration-300 group-hover:-translate-x-1" : ""}
        />
        {/* Right bracket */}
        <path
          d="M30 10 L38 10 L38 38 L30 38"
          stroke="url(#gradient3)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={animated ? "transition-all duration-300 group-hover:translate-x-1" : ""}
        />
        {/* Forward slash */}
        <line
          x1="28"
          y1="14"
          x2="20"
          y2="34"
          stroke={iconColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          className={animated ? "transition-all duration-500 group-hover:stroke-[#3b82f6] group-hover:opacity-80" : ""}
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