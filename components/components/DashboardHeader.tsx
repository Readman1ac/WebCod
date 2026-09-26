'use client';

import React from 'react';
import { Bell, Search, HelpCircle } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header
      style={{
        height: '64px',
        borderBottom: '1px solid var(--border)',
        background: 'var(--background)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1' }}>
        <div style={{ position: 'relative', width: '320px' }}>
          <Search
            size={16}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--muted-foreground)',
            }}
          />
          <input
            type="text"
            placeholder="Поиск проектов, файлов..."
            style={{
              width: '100%',
              paddingLeft: '40px',
              paddingRight: '12px',
              height: '40px',
              borderRadius: '8px',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              color: 'var(--foreground)',
              fontSize: '13px',
              fontWeight: 500,
              outline: 'none',
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          type="button"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: 'var(--background)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Помощь"
        >
          <HelpCircle size={18} style={{ color: 'var(--muted-foreground)' }} />
        </button>

        <button
          type="button"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: 'var(--background)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
          aria-label="Уведомления"
        >
          <Bell size={18} style={{ color: 'var(--muted-foreground)' }} />
          <span
            style={{
              position: 'absolute',
              top: '8px',
              right: '10px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--primary)',
            }}
          />
        </button>

        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-foreground)',
            fontSize: '14px',
            fontWeight: 700,
          }}
        >
          U
        </div>
      </div>
    </header>
  );
}