interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  animated?: boolean;
}

export function Logo2({ variant = 'dark', className = '', animated = true }: LogoProps) {
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
        className={animated ? "transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" : ""}
      >
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Geometric W shape */}
        <path
          d="M8 12 L14 36 L20 18 L26 36 L32 18 L38 36 L44 12"
          stroke="url(#gradient2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={animated ? "transition-all duration-300 group-hover:stroke-[3.5]" : ""}
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