'use client';

import React from 'react';
import { Palette, Moon, Sun, Monitor } from 'lucide-react';

export default function SettingsAppearance() {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
          <Palette size={20} className="text-secondary" />
        </div>

        <div>
          <h2 className="text-[18px] font-semibold text-foreground">Внешний вид</h2>
          <p className="text-[13px] text-muted-foreground">
            Тема и настройки интерфейса
          </p>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <button
          type="button"
          className="flex flex-col items-center gap-3 rounded-xl border-2 border-primary bg-background p-4 text-primary transition-all hover:border-primary/70"
        >
          <Moon size={24} />
          <span className="text-[13px] font-medium">Тёмная</span>
        </button>

        <button
          type="button"
          className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-4 text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
        >
          <Sun size={24} />
          <span className="text-[13px] font-medium">Светлая</span>
        </button>

        <button
          type="button"
          className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-4 text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
        >
          <Monitor size={24} />
          <span className="text-[13px] font-medium">Системная</span>
        </button>
      </div>

      <div className="space-y-3">
        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30">
          <div>
            <p className="mb-0.5 text-[14px] font-medium text-foreground">
              Анимации интерфейса
            </p>
            <p className="text-[12px] text-muted-foreground">
              Плавные переходы и эффекты
            </p>
          </div>
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
          />
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30">
          <div>
            <p className="mb-0.5 text-[14px] font-medium text-foreground">
              Компактный режим
            </p>
            <p className="text-[12px] text-muted-foreground">
              Уменьшенные отступы и шрифты
            </p>
          </div>
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
          />
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30">
          <div>
            <p className="mb-0.5 text-[14px] font-medium text-foreground">
              Показывать подсказки
            </p>
            <p className="text-[12px] text-muted-foreground">
              Всплывающие подсказки для элементов
            </p>
          </div>
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
          />
        </label>
      </div>
    </section>
  );
}