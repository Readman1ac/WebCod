'use client';

import React from 'react';
import {
  FolderOpen,
  Globe,
  Box,
  CheckCircle,
  Loader,
  AlertCircle,
  ChevronRight,
  MoreVertical,
} from 'lucide-react';

const projects = [
  {
    id: 'proj-01',
    name: 'Hartmann & Co.',
    type: 'web',
    order: 'ORD-2026-0847',
    status: 'generating',
    progress: 68,
    step: 6,
    total: 9,
    model: 'llama3.2',
    updated: '18 мин назад',
  },
  {
    id: 'proj-02',
    name: 'Nakamura Studio',
    type: 'web',
    order: 'ORD-2026-0831',
    status: 'review',
    progress: 78,
    step: 7,
    total: 9,
    model: 'codellama:13b',
    updated: '2 часа назад',
  },
  {
    id: 'proj-03',
    name: 'Osei Product 3D',
    type: '3d',
    order: 'ORD-2026-0819',
    status: 'ready',
    progress: 100,
    step: 9,
    total: 9,
    model: 'llava:7b',
    updated: '1 день назад',
  },
  {
    id: 'proj-04',
    name: 'Bergström E-commerce',
    type: 'web',
    order: 'ORD-2026-0802',
    status: 'draft',
    progress: 11,
    step: 1,
    total: 9,
    model: 'llama3.2',
    updated: '3 дня назад',
  },
  {
    id: 'proj-05',
    name: 'Liu Architecture',
    type: '3d',
    order: 'ORD-2026-0798',
    status: 'error',
    progress: 45,
    step: 4,
    total: 9,
    model: 'codellama:13b',
    updated: '5 дней назад',
  },
  {
    id: 'proj-06',
    name: 'Kovalenko Portfolio',
    type: 'web',
    order: 'ORD-2026-0781',
    status: 'ready',
    progress: 100,
    step: 9,
    total: 9,
    model: 'llama3.2',
    updated: '1 неделю назад',
  },
];

const statusConfig = {
  generating: {
    label: 'Генерация',
    icon: Loader,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    progress: 'bg-primary',
  },
  review: {
    label: 'На проверке',
    icon: CheckCircle,
    color: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/20',
    progress: 'bg-success',
  },
  ready: {
    label: 'Готов к экспорту',
    icon: CheckCircle,
    color: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/20',
    progress: 'bg-success',
  },
  draft: {
    label: 'Черновик',
    icon: FolderOpen,
    color: 'text-muted-foreground',
    bg: 'bg-muted/30',
    border: 'border-border',
    progress: 'bg-muted-foreground',
  },
  error: {
    label: 'Ошибка',
    icon: AlertCircle,
    color: 'text-error',
    bg: 'bg-error/10',
    border: 'border-error/20',
    progress: 'bg-error',
  },
};

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => {
        const status = statusConfig[project.status as keyof typeof statusConfig];
        const StatusIcon = status.icon;

        return (
          <div
            key={project.id}
            className="group rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-lg"
          >
            <div className="mb-3 flex items-start justify-between">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg border ${status.bg} ${status.border}`}
              >
                <StatusIcon
                  size={18}
                  className={`${status.color} ${
                    project.status === 'generating' ? 'animate-spin' : ''
                  }`}
                />
              </div>

              <button
                type="button"
                className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                aria-label={`Действия: ${project.name}`}
              >
                <MoreVertical size={16} />
              </button>
            </div>

            <p className="mb-1 truncate text-[15px] font-semibold text-foreground">
              {project.name}
            </p>
            <p className="mb-2 font-mono text-[11px] text-muted-foreground">
              {project.order}
            </p>

            <div className="mb-3 flex items-center gap-2">
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${status.bg} ${status.color}`}
              >
                {status.label}
              </span>

              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                {project.type === 'web' ? <Globe size={10} /> : <Box size={10} />}
                {project.type === 'web' ? 'Web' : '3D'}
              </span>
            </div>

            <div className="mb-3">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">
                  Шаг {project.step}/{project.total}
                </span>
                <span className="text-[11px] font-medium text-foreground">
                  {project.progress}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-muted/50">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${status.progress}`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border/50 pt-3">
              <span className="text-[11px] text-muted-foreground">{project.model}</span>

              <button
                type="button"
                className="flex items-center gap-1 text-[12px] font-medium text-primary transition-colors hover:text-primary/80"
              >
                Открыть
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}