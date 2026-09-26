'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Box, ArrowRight, Clock, MoreHorizontal } from 'lucide-react';
import Badge from '@/components/ui/Badge';

const recentProjects = [
  {
    id: 'proj-001',
    name: 'Hartmann & Co. Agency Site',
    client: 'ORD-2026-0847',
    type: 'web' as const,
    status: 'generating' as const,
    step: 'Генерация',
    stepNum: 6,
    model: 'llama3.2',
    lastModified: '18 мин назад',
    progress: 68,
  },
  {
    id: 'proj-002',
    name: 'Nakamura Studio Portfolio',
    client: 'ORD-2026-0831',
    type: 'web' as const,
    status: 'review' as const,
    step: 'Предпросмотр',
    stepNum: 7,
    model: 'codellama:13b',
    lastModified: '2 часа назад',
    progress: 78,
  },
  {
    id: 'proj-003',
    name: 'Osei Product 3D Render',
    client: 'ORD-2026-0819',
    type: '3d' as const,
    status: 'export-ready' as const,
    step: 'Экспорт',
    stepNum: 9,
    model: 'llava:7b',
    lastModified: '1 день назад',
    progress: 100,
  },
  {
    id: 'proj-004',
    name: 'Bergström E-commerce',
    client: 'ORD-2026-0802',
    type: 'web' as const,
    status: 'draft' as const,
    step: 'Бриф',
    stepNum: 1,
    model: 'llama3.2',
    lastModified: '3 дня назад',
    progress: 11,
  },
];

const statusConfig = {
  generating: { variant: 'generating' as const, label: 'Генерация' },
  review: { variant: 'warning' as const, label: 'На проверке' },
  'export-ready': { variant: 'success' as const, label: 'Готов к экспорту' },
  draft: { variant: 'muted' as const, label: 'Черновик' },
};

export default function RecentProjectsGrid() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[16px] font-semibold text-foreground">Последние проекты</h2>

        <Link
          href="/projects"
          className="flex items-center gap-1 text-[12px] text-muted-foreground transition-colors hover:text-primary"
        >
          Все проекты <ArrowRight size={12} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {recentProjects.map((project) => {
          const status = statusConfig[project.status];

          return (
            <div key={project.id} className="card-hover group rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-start justify-between">
                <div className="flex min-w-0 items-center gap-2.5">
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${
                      project.type === 'web' ? 'bg-primary/10' : 'bg-secondary/10'
                    }`}
                  >
                    {project.type === 'web' ? (
                      <Globe size={15} className="text-primary" />
                    ) : (
                      <Box size={15} className="text-secondary" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-semibold leading-tight text-foreground">
                      {project.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground">{project.client}</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="rounded-md p-1 text-muted-foreground opacity-0 transition-opacity hover:bg-muted/50 group-hover:opacity-100"
                  aria-label="Дополнительные действия"
                >
                  <MoreHorizontal size={14} />
                </button>
              </div>

              <div className="mb-3">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">
                    Шаг {project.stepNum}/9 — {project.step}
                  </span>
                  <span className="font-tabular text-[11px] font-medium text-foreground">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-muted/50">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      project.status === 'generating' ? 'bg-primary' : 'bg-success'
                    }`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant={status.variant} dot>
                    {status.label}
                  </Badge>

                  <span className="rounded-full bg-muted/50 px-2 py-0.5 text-[11px] text-muted-foreground">
                    {project.model}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground/60">
                  <Clock size={11} />
                  <span className="text-[11px]">{project.lastModified}</span>
                </div>
              </div>

              <Link
                href="/web-studio"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-muted/30 py-2 text-[12px] font-medium text-muted-foreground transition-all duration-150 hover:border-primary/30 hover:bg-primary/10 hover:text-primary active:scale-[0.98]"
              >
                Открыть проект <ArrowRight size={12} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}