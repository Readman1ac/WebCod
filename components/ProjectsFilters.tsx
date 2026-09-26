'use client';

import React from 'react';
import {
  Search,
  Filter,
  FolderOpen,
  Globe,
  Box,
  CheckCircle,
  Loader,
  AlertCircle,
  X,
} from 'lucide-react';

export default function ProjectsFilters() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <input
              type="text"
              placeholder="Поиск по названию, ID, заказу..."
              className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-[13px] font-medium text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
            />
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <FolderOpen size={16} />
            Новый проект
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Фильтры:
          </span>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[12px] font-medium text-primary"
          >
            <Filter size={12} />
            Все проекты
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
          >
            <Globe size={12} />
            Web
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
          >
            <Box size={12} />
            3D
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
          >
            <CheckCircle size={12} />
            Готовые
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
          >
            <Loader size={12} />
            В работе
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
          >
            <AlertCircle size={12} />
            Ошибки
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-all hover:border-error/30 hover:bg-error/10 hover:text-error"
          >
            <X size={12} />
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
}