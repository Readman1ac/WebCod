'use client';

import React from 'react';
import AppLayout from '@/components/AppLayout';
import DashboardHeader from '@/components/DashboardHeader';
import {
  PackageOpen,
  Download,
  FolderOpen,
  Cloud,
  CheckCircle,
} from 'lucide-react';

export default function ExportPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <DashboardHeader />

        <div className="px-6 py-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10">
                  <PackageOpen size={24} className="text-success" />
                </div>

                <div>
                  <h1 className="text-[24px] font-bold text-foreground">Экспорт проекта</h1>
                  <p className="text-[14px] text-muted-foreground">
                    Hartmann & Co. · ORD-2026-0847
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 rounded-xl border border-success/30 bg-card p-6">
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-success" />
                <div>
                  <p className="text-[16px] font-semibold text-foreground">
                    Проект готов к экспорту
                  </p>
                  <p className="text-[13px] text-muted-foreground">
                    Все файлы сгенерированы и проверены
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 text-[18px] font-semibold text-foreground">Способы экспорта</h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <button
                  type="button"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background p-5 text-left transition-all duration-200 hover:border-primary/50 hover:bg-primary/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Download size={26} className="text-primary" />
                  </div>

                  <div className="flex-1">
                    <p className="mb-0.5 text-[15px] font-semibold text-foreground">Скачать ZIP</p>
                    <p className="text-[12px] text-muted-foreground">156 KB · Все файлы проекта</p>
                  </div>
                </button>

                <button
                  type="button"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background p-5 text-left transition-all duration-200 hover:border-primary/50 hover:bg-primary/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <FolderOpen size={26} className="text-primary" />
                  </div>

                  <div className="flex-1">
                    <p className="mb-0.5 text-[15px] font-semibold text-foreground">Открыть в папке</p>
                    <p className="text-[12px] text-muted-foreground">
                      D:\Projects\hartmann-co
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  disabled
                  className="flex cursor-not-allowed items-center gap-4 rounded-xl border border-border bg-background p-5 text-left opacity-50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted/30">
                    <Cloud size={26} className="text-muted-foreground" />
                  </div>

                  <div className="flex-1">
                    <p className="mb-0.5 text-[15px] font-semibold text-muted-foreground">
                      Деплой на хостинг
                    </p>
                    <p className="text-[12px] text-muted-foreground">
                      Vercel, Netlify, GitHub Pages
                    </p>
                  </div>

                  <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                    Скоро
                  </span>
                </button>

                <button
                  type="button"
                  disabled
                  className="flex cursor-not-allowed items-center gap-4 rounded-xl border border-border bg-background p-5 text-left opacity-50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted/30">
                    <PackageOpen size={26} className="text-muted-foreground" />
                  </div>

                  <div className="flex-1">
                    <p className="mb-0.5 text-[15px] font-semibold text-muted-foreground">
                      Экспорт в Figma
                    </p>
                    <p className="text-[12px] text-muted-foreground">
                      Дизайн-макеты, компоненты
                    </p>
                  </div>

                  <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                    Скоро
                  </span>
                </button>
              </div>
            </div>

            <div className="mb-6 rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 text-[18px] font-semibold text-foreground">
                Информация о проекте
              </h2>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="mb-1 text-[12px] text-muted-foreground">Файлов</p>
                  <p className="text-[20px] font-bold text-foreground">47</p>
                </div>
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="mb-1 text-[12px] text-muted-foreground">Размер</p>
                  <p className="text-[20px] font-bold text-foreground">156 KB</p>
                </div>
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="mb-1 text-[12px] text-muted-foreground">Страниц</p>
                  <p className="text-[20px] font-bold text-foreground">5</p>
                </div>
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="mb-1 text-[12px] text-muted-foreground">Статус</p>
                  <p className="text-[20px] font-bold text-success">Готов</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                className="rounded-lg border border-border bg-background px-6 py-3 text-[14px] font-medium text-foreground transition-all hover:bg-muted/50"
              >
                Назад к проекту
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[14px] font-semibold text-primary-foreground transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                <Download size={18} />
                Скачать ZIP
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}