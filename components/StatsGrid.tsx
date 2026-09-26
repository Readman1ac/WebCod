'use client';

import React from 'react';
import {
  FolderOpen,
  Cpu,
  HardDrive,
  Zap,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

const stats = [
  {
    id: 'stat-active-projects',
    label: 'Активных проектов',
    value: '7',
    sub: '2 генерируется сейчас',
    icon: FolderOpen,
    trend: 'up',
    trendLabel: '+2 за неделю',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    id: 'stat-models-loaded',
    label: 'Моделей загружено',
    value: '3',
    sub: 'из 5 скачано',
    icon: Cpu,
    trend: 'neutral',
    trendLabel: 'llama3.2 активна',
    color: 'text-success',
    bg: 'bg-success/10',
  },
  {
    id: 'stat-storage-used',
    label: 'Использовано памяти',
    value: '38.4 ГБ',
    sub: 'из 500 ГБ локально',
    icon: HardDrive,
    trend: 'up',
    trendLabel: '+1.2 ГБ сегодня',
    color: 'text-warning',
    bg: 'bg-warning/10',
  },
  {
    id: 'stat-jobs-today',
    label: 'Задач сегодня',
    value: '14',
    sub: '3 ошибки · 11 готово',
    icon: Zap,
    trend: 'down',
    trendLabel: '3 ошибки',
    color: 'text-error',
    bg: 'bg-error/10',
    alert: true,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`card-hover rounded-xl border p-5 ${
            stat.alert ? 'border-error/30' : 'border-border'
          } bg-card`}
        >
          <div className="mb-3 flex items-start justify-between">
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.bg}`}>
              <stat.icon size={17} className={stat.color} />
            </div>

            <div className="flex items-center gap-1">
              {stat.trend === 'up' && <TrendingUp size={12} className="text-success" />}
              {stat.trend === 'down' && <TrendingDown size={12} className="text-error" />}
              <span
                className={`text-[11px] font-medium ${
                  stat.trend === 'up'
                    ? 'text-success'
                    : stat.trend === 'down'
                      ? 'text-error'
                      : 'text-muted-foreground'
                }`}
              >
                {stat.trendLabel}
              </span>
            </div>
          </div>

          <p className="font-tabular mb-1 text-[28px] font-bold leading-none text-foreground">
            {stat.value}
          </p>
          <p className="text-[12px] font-medium text-muted-foreground">{stat.label}</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground/70">{stat.sub}</p>
        </div>
      ))}
    </div>
  );
}