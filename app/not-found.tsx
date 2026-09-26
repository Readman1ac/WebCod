'use client';

import React from 'react';
import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { FolderOpen, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <AppLayout>
      <div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-muted/30">
            <FolderOpen size={40} className="text-muted-foreground" />
          </div>

          <h1 className="mb-2 text-[48px] font-bold text-foreground">404</h1>
          <p className="mb-2 text-[18px] font-medium text-foreground">Страница не найдена</p>
          <p className="mx-auto mb-8 max-w-md text-[14px] text-muted-foreground">
            К сожалению, страница, которую вы ищете, не существует или была перемещена.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[14px] font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
          >
            <ArrowLeft size={18} />
            Вернуться на главную
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}