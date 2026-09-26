import React from 'react';
import AppLayout from '@/components/AppLayout';
import ProjectsHeader from './components/ProjectsHeader';
import ProjectsTable from './components/ProjectsTable';

export default function ProjectsPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <ProjectsHeader />
        <div className="px-6 lg:px-8 xl:px-10 2xl:px-12 pb-12">
          <ProjectsTable />
        </div>
      </div>
    </AppLayout>
  );
}
