'use client';

import React from 'react';
import {
  CheckCircle,
  AlertCircle,
  Zap,
  Upload,
  Download,
  FileCode,
} from 'lucide-react';

const activities = [
  {
    id: 'act-001',
    icon: CheckCircle,
    iconColor: 'text-success',
    iconBg: 'bg-success/10',
    title: 'Генерация завершена',
    detail: 'Nakamura Studio — 47 файлов',
    time: '18 мин назад',
  },
  {
    id: 'act-002',
    icon: Zap,
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    title: 'Генерация сайта',
    detail: 'Hartmann & Co. — шаг 6/9',
    time: '23 мин назад',
  },
  {
    id: 'act-003',
    icon: AlertCircle,
    iconColor: 'text-error',
    iconBg: 'bg-error/10',
    title: 'Ошибка генерации',
    detail: 'Превышен лимит токенов в брифе',
    time: '1 час назад',
  },
  {
    id: 'act-004',
    icon: Upload,
    iconColor: 'text-muted-foreground',
    iconBg: 'bg-muted/50',
    title: 'Референсы загружены',
    detail: 'Bergström E-commerce — 4 изображения',
    time: '3 часа назад',
  },
  {
    id: 'act-005',
    icon: Download,
    iconColor: 'text-success',
    iconBg: 'bg-success/10',
    title: 'Экспорт готов',
    detail: 'Osei Product 3D — ZIP 12.4 МБ',
    time: '1 день назад',
  },
  {
    id: 'act-006',
    icon: FileCode,
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
    title: 'Blender-скрипт создан',
    detail: 'Osei Product Render — 342 строки',
    time: '1 день назад',
  },
];

export default function ActivityFeed() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h2 className="mb-4 text-[14px] font-semibold text-foreground">Последняя активность</h2>

      <div className="space-y-3">
        {activities.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <div className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${item.iconBg}`}>
              <item.icon size={13} className={item.iconColor} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-medium leading-tight text-foreground">{item.title}</p>
              <p className="truncate text-[11px] text-muted-foreground">{item.detail}</p>
            </div>

            <span className="mt-0.5 flex-shrink-0 text-[10px] text-muted-foreground/60">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}