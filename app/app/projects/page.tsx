'use client';

import React from 'react';
import AppLayout from '@/components/AppLayout';
import DashboardHeader from '@/components/DashboardHeader';
import ProjectsGrid from '@/components/ProjectsGrid';
import ProjectsFilters from '@/components/ProjectsFilters';

export default function ProjectsPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <DashboardHeader />

        <div className="space-y-6 px-6 py-6 lg:px-8 xl:px-10 2xl:px-12">
          <div>
            <h1 className="mb-1 text-[24px] font-bold text-foreground">Проекты</h1>
            <p className="text-[14px] text-muted-foreground">
              Управление проектами, генерацией и экспортом
            </p>
          </div>

          <ProjectsFilters />
          <ProjectsGrid />
        </div>
      </div>
    </AppLayout>
  );
}