'use client';

import React from 'react';
import AppLayout from '@/components/AppLayout';
import AppLogo from '@/components/ui/AppLogo';

export default function LoadingPage() {
  return (
    <AppLayout>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <AppLogo size={64} />

          <div className="mt-6">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-[3px] border-primary/30 border-t-primary" />
            <p className="mt-4 text-[14px] text-muted-foreground">Загрузка...</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}