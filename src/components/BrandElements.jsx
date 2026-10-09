import React from 'react';

// Landscape Motif - 3 mountain ridges (Kilimanjaro / Mt Kenya)
export function LandscapeMotif({ className = '', color = '#6B4A35', width = 64, height = 28 }) {
  return (
    <svg 
      className={className}
      width={width} 
      height={height} 
      viewBox="0 0 80 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Landscape Motif"
    >
      {/* Front / Left Ridge */}
      <path 
        d="M6 26L22 13L32 20L44 26" 
        stroke={color} 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Main / Central Peak */}
      <path 
        d="M26 22L41 6L54 18L64 22L74 26" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Accent inner ridge contour */}
      <path 
        d="M41 6L43 14L49 20" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

// Pattern Element - African geometric diamond beadwork motif
export function PatternElement({ className = '', color = '#6B4A35', size = 48, opacity = 1 }) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size * 1.3} 
      viewBox="0 0 60 78" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-label="Pattern Element"
    >
      {/* Outer Diamond */}
      <polygon 
        points="30,4 56,39 30,74 4,39" 
        stroke={color} 
        strokeWidth="2.5" 
        fill="none" 
      />
      {/* Second Inner Diamond */}
      <polygon 
        points="30,14 48,39 30,64 12,39" 
        stroke={color} 
        strokeWidth="1.8" 
        fill="none" 
      />
      {/* Center Core Diamond */}
      <polygon 
        points="30,26 40,39 30,52 20,39" 
        stroke={color} 
        strokeWidth="2" 
        fill="none" 
      />
      {/* Center Dot / Pip */}
      <rect 
        x="28.5" 
        y="37.5" 
        width="3" 
        height="3" 
        fill={color} 
        transform="rotate(45 30 39)" 
      />
      {/* 4 Corner Pips / Star Diamonds */}
      <polygon points="30,0 32,2 30,4 28,2" fill={color} />
      <polygon points="30,74 32,76 30,78 28,76" fill={color} />
      <polygon points="0,39 2,37 4,39 2,41" fill={color} />
      <polygon points="56,39 58,37 60,39 58,41" fill={color} />

      {/* Internal quadrant chevrons / step frets */}
      <path d="M22 28L30 18L38 28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 50L30 60L38 50" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 33L26 39L19 45" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M41 33L34 39L41 45" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Divider Line with Centered Dot (——— • ———)
export function DividerLine({ className = '', color = '#6B4A35', dotSize = 4 }) {
  return (
    <div 
      className={`brand-divider ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: '20px 0',
        gap: '8px'
      }}
    >
      <div style={{ flex: 1, height: '1px', backgroundColor: color, opacity: 0.4 }} />
      <div 
        style={{ 
          width: `${dotSize}px`, 
          height: `${dotSize}px`, 
          borderRadius: '50%', 
          backgroundColor: color,
          flexShrink: 0
        }} 
      />
      <div style={{ flex: 1, height: '1px', backgroundColor: color, opacity: 0.4 }} />
    </div>
  );
}

// Wildlife Paw Print Icon
export function WildlifeIcon({ className = '', color = '#6B4A35', size = 32 }) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 10a2.5 2.5 0 0 1 2.5 2.5c0 1.5-1.5 3.5-2.5 4.5c-1-1-2.5-3-2.5-4.5A2.5 2.5 0 0 1 12 10z" />
      <circle cx="8" cy="7.5" r="1.3" fill={color} stroke="none" />
      <circle cx="11" cy="5.5" r="1.3" fill={color} stroke="none" />
      <circle cx="14" cy="5.5" r="1.3" fill={color} stroke="none" />
      <circle cx="17" cy="7.5" r="1.3" fill={color} stroke="none" />
    </svg>
  );
}

// Culture Icon (People / Community connections)
export function CultureIcon({ className = '', color = '#6B4A35', size = 32 }) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="2.5" />
      <path d="M7 19v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" />
      <circle cx="17.5" cy="9.5" r="1.8" />
      <path d="M19 19v-1.5a2.5 2.5 0 0 0-1.8-2.4" />
      <circle cx="6.5" cy="9.5" r="1.8" />
      <path d="M5 19v-1.5a2.5 2.5 0 0 1 1.8-2.4" />
    </svg>
  );
}
