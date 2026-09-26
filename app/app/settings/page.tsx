'use client';

import React from 'react';
import AppLayout from '@/components/AppLayout';
import DashboardHeader from '@/components/DashboardHeader';
import SettingsOllama from '@/components/SettingsOllama';
import SettingsModels from '@/components/SettingsModels';
import SettingsStorage from '@/components/SettingsStorage';
import SettingsAppearance from '@/components/SettingsAppearance';

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <DashboardHeader />

        <div className="flex flex-col gap-6 px-6 py-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="mb-2">
            <h1 className="mb-1 text-[24px] font-bold text-foreground">Настройки</h1>
            <p className="text-[14px] text-muted-foreground">
              Управление Ollama, моделями, хранилищем и интерфейсом
            </p>
          </div>

          <SettingsOllama />
          <SettingsModels />
          <SettingsStorage />
          <SettingsAppearance />
        </div>
      </div>
    </AppLayout>
  );
}