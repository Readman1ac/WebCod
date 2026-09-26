'use client';

import React from 'react';
import AppLayout from '@/components/AppLayout';
import DashboardHeader from '@/components/DashboardHeader';
import { Box, AlertCircle } from 'lucide-react';

export default function Studio3dPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <DashboardHeader />

        <div className="px-6 py-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="mx-auto max-w-4xl py-20 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-muted/30">
              <Box size={40} className="text-muted-foreground" />
            </div>

            <h1 className="mb-3 text-[32px] font-bold text-foreground">3D Studio</h1>
            <p className="mb-2 text-[16px] font-medium text-foreground">
              Генерация 3D-моделей и сцен
            </p>
            <p className="mx-auto mb-8 max-w-md text-[14px] text-muted-foreground">
              Создание 3D-ассетов, рендеров и Blender-сцен с помощью AI
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-4 py-2 text-[13px] font-medium text-muted-foreground">
              <AlertCircle size={16} />
              Скоро будет доступно
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}