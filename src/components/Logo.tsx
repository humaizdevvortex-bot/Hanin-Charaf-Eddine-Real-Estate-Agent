import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'monogram-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  className = ''
}) => {
  const sizeMap = {
    sm: { icon: 30, textPrimary: 'text-sm', textSecondary: 'text-[9px]' },
    md: { icon: 38, textPrimary: 'text-base', textSecondary: 'text-[10px]' },
    lg: { icon: 48, textPrimary: 'text-xl', textSecondary: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  // Monogram SVG with intertwined H and C in Champagne Gold
  const MonogramSVG = (
    <svg
      width={currentSize.icon}
      height={currentSize.icon}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Hanin Charaf Eddine Monogram"
    >
      <rect
        x="3"
        y="3"
        width="94"
        height="94"
        rx="22"
        fill="#111827"
        stroke="#C8A66B"
        strokeWidth="2.5"
      />
      <rect
        x="7"
        y="7"
        width="86"
        height="86"
        rx="18"
        stroke="#C8A66B"
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />
      
      {/* 'H' Left column */}
      <path
        d="M32 26V74"
        stroke="#C8A66B"
        strokeWidth="6"
        strokeLinecap="round"
      />
      
      {/* 'H' Crossbar */}
      <path
        d="M32 50H56"
        stroke="#C8A66B"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      
      {/* 'H' Right column */}
      <path
        d="M56 26V74"
        stroke="#C8A66B"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* 'C' Curvature embracing the H */}
      <path
        d="M74 34C69 28 62 25 53 25C40 25 31 35 31 50C31 65 40 75 53 75C62 75 69 72 74 66"
        stroke="#DFCA9B"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="95 15"
      />

      <circle cx="50" cy="14" r="2" fill="#C8A66B" />
      <circle cx="50" cy="86" r="2" fill="#C8A66B" />
      <circle cx="14" cy="50" r="2" fill="#C8A66B" />
      <circle cx="86" cy="50" r="2" fill="#C8A66B" />
    </svg>
  );

  if (variant === 'monogram-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {MonogramSVG}
      </div>
    );
  }

  const isLightText = variant === 'light';

  return (
    <div className={`group inline-flex items-center gap-3 ${className}`}>
      {MonogramSVG}
      <div className="flex flex-col tracking-wider">
        <span
          className={`font-serif font-bold tracking-[0.14em] uppercase transition-colors leading-tight ${
            isLightText ? 'text-white group-hover:text-[#DFCA9B]' : 'text-[#111827] group-hover:text-[#A98748]'
          } ${currentSize.textPrimary}`}
        >
          Hanin Charaf Eddine
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`font-sans uppercase font-medium tracking-[0.18em] ${
              isLightText ? 'text-[#C8A66B]' : 'text-[#A98748]'
            } ${currentSize.textSecondary}`}
          >
            Realtor®
          </span>
          <span className="text-[#C8A66B]/50 text-[10px]">•</span>
          <span className="text-[10px] font-semibold text-[#DFCA9B] tracking-wider uppercase font-sans">
            KW
          </span>
        </div>
      </div>
    </div>
  );
};
