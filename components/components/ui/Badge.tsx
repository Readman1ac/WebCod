'use client';

import React from 'react';

type BadgeVariant =
  | 'generating'
  | 'success'
  | 'warning'
  | 'muted'
  | 'info'
  | 'primary'
  | 'default'
  | 'danger';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
}

const styles: Record<
  BadgeVariant,
  { background: string; color: string; border: string }
> = {
  generating: {
    background: 'rgba(245, 138, 42, 0.12)',
    color: 'var(--primary)',
    border: 'rgba(245, 138, 42, 0.25)',
  },
  success: {
    background: 'rgba(36, 198, 106, 0.12)',
    color: 'var(--success)',
    border: 'rgba(36, 198, 106, 0.25)',
  },
  warning: {
    background: 'rgba(244, 183, 64, 0.12)',
    color: 'var(--warning)',
    border: 'rgba(244, 183, 64, 0.25)',
  },
  muted: {
    background: 'rgba(154, 171, 193, 0.10)',
    color: 'var(--muted-foreground)',
    border: 'rgba(154, 171, 193, 0.18)',
  },
  info: {
    background: 'rgba(91, 141, 239, 0.12)',
    color: 'var(--secondary)',
    border: 'rgba(91, 141, 239, 0.24)',
  },
  primary: {
    background: 'rgba(245, 138, 42, 0.12)',
    color: 'var(--primary)',
    border: 'rgba(245, 138, 42, 0.25)',
  },
  default: {
    background: 'rgba(154, 171, 193, 0.10)',
    color: 'var(--muted-foreground)',
    border: 'rgba(154, 171, 193, 0.18)',
  },
  danger: {
    background: 'rgba(239, 91, 101, 0.12)',
    color: 'var(--error)',
    border: 'rgba(239, 91, 101, 0.25)',
  },
};

export default function Badge({
  children,
  variant = 'default',
  dot = false,
}: BadgeProps) {
  const style = styles[variant];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        border: `1px solid ${style.border}`,
        borderRadius: '999px',
        padding: '3px 8px',
        fontSize: '11px',
        fontWeight: 600,
        lineHeight: 1,
        background: style.background,
        color: style.color,
      }}
    >
      {dot && (
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: '999px',
            background: style.color,
          }}
        />
      )}
      {children}
    </span>
  );
}