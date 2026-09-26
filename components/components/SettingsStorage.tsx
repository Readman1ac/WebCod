'use client';

import React from 'react';
import { HardDrive, FolderOpen, Trash2, Archive } from 'lucide-react';

export default function SettingsStorage() {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
          <HardDrive size={20} className="text-warning" />
        </div>

        <div>
          <h2 className="text-[18px] font-semibold text-foreground">Хранилище</h2>
          <p className="text-[13px] text-muted-foreground">
            Управление дисковым пространством
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[13px] font-medium text-foreground">Использовано место</p>
          <p className="text-[13px] font-medium text-foreground">38.4 ГБ / 500 ГБ</p>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-muted/50">
          <div
            className="h-full rounded-full bg-warning transition-all duration-300"
            style={{ width: '7.7%' }}
          />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-background p-4">
          <div className="mb-2 flex items-center gap-2">
            <FolderOpen size={16} className="text-primary" />
            <p className="text-[12px] text-muted-foreground">Проекты</p>
          </div>
          <p className="text-[18px] font-bold text-foreground">24.2 ГБ</p>
        </div>

        <div className="rounded-lg border border-border bg-background p-4">
          <div className="mb-2 flex items-center gap-2">
            <HardDrive size={16} className="text-success" />
            <p className="text-[12px] text-muted-foreground">Модели</p>
          </div>
          <p className="text-[18px] font-bold text-foreground">15.1 ГБ</p>
        </div>

        <div className="rounded-lg border border-border bg-background p-4">
          <div className="mb-2 flex items-center gap-2">
            <Archive size={16} className="text-muted-foreground" />
            <p className="text-[12px] text-muted-foreground">Кэш</p>
          </div>
          <p className="text-[18px] font-bold text-foreground">1.1 ГБ</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-[13px] font-medium text-foreground transition-all hover:bg-muted/50"
        >
          <Trash2 size={16} />
          Очистить кэш
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-[13px] font-medium text-foreground transition-all hover:bg-muted/50"
        >
          <Archive size={16} />
          Архивировать старые проекты
        </button>
      </div>
    </section>
  );
}