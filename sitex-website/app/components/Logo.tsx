interface LogoProps {
  variant?: 'dark' | 'light';
  iconOnly?: boolean;
  className?: string;
}

export function Logo({ variant = 'dark', iconOnly = false, className = '' }: LogoProps) {
  const isDark = variant === 'dark';
  const iconColor = isDark ? '#000000' : '#FFFFFF';
  const textColor = isDark ? 'text-gray-900' : 'text-white';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon */}
      <div className="relative">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Browser window frame */}
          <rect
            x="6"
            y="10"
            width="36"
            height="28"
            rx="3"
            stroke={iconColor}
            strokeWidth="2.5"
            fill="none"
          />
          
          {/* Browser dots */}
          <circle cx="12" cy="16" r="1.5" fill={iconColor} />
          <circle cx="17" cy="16" r="1.5" fill={iconColor} />
          <circle cx="22" cy="16" r="1.5" fill={iconColor} />
          
          {/* Divider line */}
          <line
            x1="6"
            y1="21"
            x2="42"
            y2="21"
            stroke={iconColor}
            strokeWidth="2.5"
          />
          
          {/* Simplified code/content lines */}
          <line
            x1="12"
            y1="27"
            x2="28"
            y2="27"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="32"
            x2="36"
            y2="32"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Text */}
      {!iconOnly && (
        <div className="flex flex-col">
          <span className={`${textColor} tracking-tight`} style={{ fontSize: '24px', fontWeight: '600' }}>
            WebSell
          </span>
          <span className={`${isDark ? 'text-gray-500' : 'text-gray-400'} tracking-wide`} style={{ fontSize: '10px', fontWeight: '500', letterSpacing: '0.1em' }}>
            WEBSITES
          </span>
        </div>
      )}
    </div>
  );
}
