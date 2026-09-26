'use client';

import React from 'react';
import AppLayout from '@/components/AppLayout';
import DashboardHeader from '@/components/DashboardHeader';
import OllamaStatusBanner from '@/components/OllamaStatusBanner';
import StatsGrid from '@/components/StatsGrid';
import QuickCreatePanel from '@/components/QuickCreatePanel';
import ActivityFeed from '@/components/ActivityFeed';
import RecentProjectsGrid from '@/components/RecentProjectsGrid';
import { Sparkles, Code, Palette } from 'lucide-react';

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <DashboardHeader />

        <div className="space-y-6 px-6 py-6 lg:px-8 xl:px-10 2xl:px-12">
          <OllamaStatusBanner />
          <StatsGrid />

          {/* Web Studio CTA */}
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 rounded-2xl p-8">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Palette size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">🎨 Web Studio</h2>
                    <p className="text-muted-foreground">Генератор лендингов и интернет-магазинов</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 max-w-2xl">
                  Создавайте красивые сайты с помощью AI. Два режима работы: быстрый (по ТЗ) и конструктор (пошагово).
                  Интеграция с Ollama, генерация картинок, полный e-commerce функционал.
                </p>
                <div className="flex gap-3">
                  <a 
                    href="/web-studio?mode=quick"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 py-3 font-semibold transition-colors flex items-center gap-2"
                  >
                    <Sparkles size={20} />
                    Быстрая генерация
                  </a>
                  <a 
                    href="/web-studio?mode=builder"
                    className="bg-background hover:bg-muted text-foreground rounded-xl px-6 py-3 font-semibold transition-colors border border-border flex items-center gap-2"
                  >
                    <Code size={20} />
                    Конструктор
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-2">
              <QuickCreatePanel />
            </div>

            <div className="md:col-span-1 lg:col-span-1">
              <ActivityFeed />
            </div>
          </div>

          <RecentProjectsGrid />
        </div>
      </div>
    </AppLayout>
  );
}
