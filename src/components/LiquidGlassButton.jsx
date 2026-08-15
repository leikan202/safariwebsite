import React from 'react';

export default function LiquidGlassButton({ children, onClick, style = {}, className = '' }) {
  return (
    <button
      className={`liquid-glass-btn ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
