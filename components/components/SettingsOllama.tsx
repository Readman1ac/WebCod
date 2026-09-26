'use client';

import React from 'react';
import { Cpu, CheckCircle, Power, RefreshCw } from 'lucide-react';

export default function SettingsOllama() {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
            <Cpu size={20} className="text-success" />
          </div>

          <div>
            <h2 className="text-[18px] font-semibold text-foreground">Ollama</h2>
            <p className="text-[13px] text-muted-foreground">
              Подключение к локальному серверу
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-success">
          <CheckCircle size={18} />
          <span className="text-[13px] font-medium">Подключён</span>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="mb-1 text-[12px] text-muted-foreground">URL</p>
          <p className="font-mono text-[14px] font-semibold text-foreground">
            localhost:11434
          </p>
        </div>

        <div className="rounded-lg border border-border bg-background p-4">
          <p className="mb-1 text-[12px] text-muted-foreground">Версия</p>
          <p className="text-[14px] font-semibold text-foreground">0.5.7</p>
        </div>

        <div className="rounded-lg border border-border bg-background p-4">
          <p className="mb-1 text-[12px] text-muted-foreground">VRAM свободно</p>
          <p className="text-[14px] font-semibold text-foreground">14.2 ГБ</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-[13px] font-medium text-foreground transition-all hover:bg-muted/50"
        >
          <RefreshCw size={16} />
          Переподключить
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-[13px] font-medium text-foreground transition-all hover:bg-muted/50"
        >
          <Power size={16} />
          Остановить сервис
        </button>
      </div>
    </section>
  );
}