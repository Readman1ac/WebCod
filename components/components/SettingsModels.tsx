'use client';

import React from 'react';
import { Cpu, Download, Trash2, CheckCircle, HardDrive } from 'lucide-react';

const models = [
  {
    id: 'model-01',
    name: 'llama3.2',
    size: '3.8 ГБ',
    status: 'active',
    quantization: 'Q4_K_M',
  },
  {
    id: 'model-02',
    name: 'codellama:13b',
    size: '7.2 ГБ',
    status: 'ready',
    quantization: 'Q4_K_M',
  },
  {
    id: 'model-03',
    name: 'llava:7b',
    size: '4.1 ГБ',
    status: 'ready',
    quantization: 'Q4_K_M',
  },
  {
    id: 'model-04',
    name: 'mistral:7b',
    size: '4.0 ГБ',
    status: 'available',
    quantization: 'Q4_K_M',
  },
  {
    id: 'model-05',
    name: 'mixtral:8x7b',
    size: '26.4 ГБ',
    status: 'available',
    quantization: 'Q4_K_M',
  },
];

export default function SettingsModels() {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Cpu size={20} className="text-primary" />
          </div>

          <div>
            <h2 className="text-[18px] font-semibold text-foreground">Модели</h2>
            <p className="text-[13px] text-muted-foreground">
              Управление загруженными моделями
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-[13px] font-semibold text-primary-foreground transition-all hover:bg-primary/90"
        >
          <Download size={16} />
          Скачать модель
        </button>
      </div>

      <div className="space-y-2">
        {models.map((model) => (
          <div
            key={model.id}
            className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-background p-4"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted/50">
              <Cpu size={18} className="text-muted-foreground" />
            </div>

            <div className="min-w-[160px] flex-1">
              <p className="text-[14px] font-semibold text-foreground">{model.name}</p>
              <p className="text-[11px] text-muted-foreground">
                {model.size} · {model.quantization}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {model.status === 'active' && (
                <span className="flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-medium text-success">
                  <CheckCircle size={10} />
                  Активна
                </span>
              )}

              {model.status === 'ready' && (
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                  Готово
                </span>
              )}

              {model.status === 'available' && (
                <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                  Доступно
                </span>
              )}
            </div>

            {model.status !== 'available' ? (
              <button
                type="button"
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-error/10 hover:text-error"
                aria-label={`Удалить ${model.name}`}
              >
                <Trash2 size={16} />
              </button>
            ) : (
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-[12px] font-medium text-primary transition-all hover:bg-primary/20"
              >
                <Download size={14} />
                Скачать
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-muted/30 p-3">
        <HardDrive size={16} className="text-muted-foreground" />
        <p className="text-[12px] text-muted-foreground">
          Занято: <span className="font-medium text-foreground">15.1 ГБ</span> из 500 ГБ локально
        </p>
      </div>
    </section>
  );
}