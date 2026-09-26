'use client';

import React from 'react';
import { Cpu, CheckCircle } from 'lucide-react';

export default function OllamaStatusBanner() {
  return (
    <div className="mb-6 rounded-xl border border-border bg-card p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Cpu size={28} className="text-success" />
            <span className="pulse-dot absolute -right-1 -top-1 h-3 w-3 rounded-full bg-success" />
          </div>

          <div>
            <h2 className="mb-0.5 text-[16px] font-semibold text-foreground">
              Ollama — Подключён
            </h2>
            <p className="text-[13px] text-muted-foreground">
              3 модели доступно · localhost:11434 · 14.2 ГБ VRAM свободно
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                llama3.2
              </span>
              <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                codellama:13b
              </span>
              <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                3 модели
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-success">
          <CheckCircle size={18} />
          <span className="text-[13px] font-medium">ЛОКАЛЬНО</span>
        </div>
      </div>
    </div>
  );
}