'use client';

import React from 'react';
import AppLayout from '@/components/AppLayout';
import DashboardHeader from '@/components/DashboardHeader';

const palettes = [
  {
    name: 'Linear Style',
    description: 'Тёмный премиум для AI/tech',
    colors: {
      background: '#08090A',
      foreground: '#F0F0F0',
      card: '#0F1012',
      border: '#1F2123',
      muted: '#8A8F98',
      primary: '#5E6AD2',
      success: '#36B584',
      warning: '#F9A825',
      error: '#F5634A',
    },
  },
  {
    name: 'Vercel Style',
    description: 'Минимализм, чистый контраст',
    colors: {
      background: '#000000',
      foreground: '#FFFFFF',
      card: '#111111',
      border: '#333333',
      muted: '#888888',
      primary: '#0070F3',
      success: '#00D084',
      warning: '#F7B924',
      error: '#FF4D4D',
    },
  },
  {
    name: 'Apple Style',
    description: 'Чистый, премиальный',
    colors: {
      background: '#000000',
      foreground: '#F5F5F7',
      card: '#1C1C1E',
      border: '#38383A',
      muted: '#86868B',
      primary: '#0071E3',
      success: '#34C759',
      warning: '#FF9500',
      error: '#FF3B30',
    },
  },
  {
    name: 'GitHub Dark',
    description: 'Для разработчиков',
    colors: {
      background: '#0D1117',
      foreground: '#F0F6FC',
      card: '#161B22',
      border: '#30363D',
      muted: '#8B949E',
      primary: '#0969DA',
      success: '#2DA44E',
      warning: '#D29922',
      error: '#CF222E',
    },
  },
  {
    name: 'Stripe Style',
    description: 'Современный fintech',
    colors: {
      background: '#0A2540',
      foreground: '#FFFFFF',
      card: '#0F3252',
      border: '#1A1F36',
      muted: '#A0B0C0',
      primary: '#635BFF',
      success: '#30D158',
      warning: '#FFB800',
      error: '#FF4949',
    },
  },
];

export default function ColorsPage() {
  return (
    <AppLayout>
      <div style={{ minHeight: '100vh' }}>
        <DashboardHeader />
        <div style={{ padding: '24px 48px' }}>
          <h1 className="text-[32px] font-bold text-foreground mb-2">Палитры цветов</h1>
          <p className="text-[14px] text-muted-foreground mb-8">Выбери стиль для своего проекта</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {palettes.map((palette) => (
              <div key={palette.name} className="bg-card border border-border rounded-xl overflow-hidden">
                {/* Preview bar */}
                <div className="h-16 flex">
                  {Object.entries(palette.colors).map(([name, color]) => (
                    <div
                      key={name}
                      style={{ backgroundColor: color }}
                      className="flex-1 h-full"
                      title={`${name}: ${color}`}
                    />
                  ))}
                </div>

                {/* Info */}
                <div className="p-5">
                  <h2 className="text-[18px] font-semibold text-foreground mb-1">{palette.name}</h2>
                  <p className="text-[13px] text-muted-foreground mb-4">{palette.description}</p>

                  {/* Color list */}
                  <div className="space-y-2">
                    {Object.entries(palette.colors).map(([name, color]) => (
                      <div key={name} className="flex items-center justify-between p-2 rounded-lg bg-background/50 border border-border">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-lg border border-border"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-[13px] font-medium text-foreground capitalize">{name}</span>
                        </div>
                        <span className="text-[11px] font-mono text-muted-foreground">{color}</span>
                      </div>
                    ))}
                  </div>

                  {/* Copy button */}
                  <button className="mt-4 w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-[13px] font-semibold hover:bg-primary/90 transition-all">
                    Использовать эту палитру
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
