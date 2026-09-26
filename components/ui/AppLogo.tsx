'use client';

import React from 'react';

interface AppLogoProps {
  size?: number;
}

export default function AppLogo({ size = 40 }: AppLogoProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #F58A2A, #C95115)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: Math.round(size * 0.43),
        fontWeight: 800,
        color: '#111827',
        letterSpacing: '-0.08em',
      }}
      aria-label="Local AI Studio"
    >
      AI
    </div>
  );
}