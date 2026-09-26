'use client';

import React, { useState, useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import DashboardHeader from '@/components/DashboardHeader';
import WebStudioStep1 from '@/components/WebStudioStep1';
import WebStudioStep2 from '@/components/WebStudioStep2';
import WebStudioStep3 from '@/components/WebStudioStep3';
import WebStudioStep4 from '@/components/WebStudioStep4';
import WebStudioStep5 from '@/components/WebStudioStep5';
import WebStudioStep6 from '@/components/WebStudioStep6';
import WebStudioStep8 from '@/components/WebStudioStep8';
import WebStudioStep9 from '@/components/WebStudioStep9';
import QuickGenerate from '@/components/QuickGenerate';
import { Sparkles, Code, ChevronRight } from 'lucide-react';

function ModeSelector({ onSelectMode }: { onSelectMode: (mode: 'quick' | 'builder') => void }) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Sparkles size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-[24px] font-bold text-foreground">Web Studio</h1>
            <p className="text-[14px] text-muted-foreground">Выберите режим работы</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <button
          onClick={() => onSelectMode('quick')}
          className="bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 text-left hover:border-primary/60 transition-all group"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles size={28} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Быстрая генерация</h2>
              <p className="text-sm text-muted-foreground">По подробному ТЗ</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            Вставь готовое ТЗ — AI создаст сайт за 1 клик.
          </p>
          <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
            Выбрать режим <ChevronRight size={18} />
          </div>
        </button>

        <button
          onClick={() => onSelectMode('builder')}
          className="bg-gradient-to-br from-muted/50 via-muted/30 to-muted/50 border-2 border-border rounded-2xl p-8 text-left hover:border-primary/30 transition-all group"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-muted group-hover:bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code size={28} className="text-foreground group-hover:text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Конструктор</h2>
              <p className="text-sm text-muted-foreground">Пошагово</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            Пройди 9 шагов — контролируй каждый этап.
          </p>
          <div className="flex items-center gap-2 text-foreground font-semibold group-hover:text-primary group-hover:gap-3 transition-all">
            Выбрать режим <ChevronRight size={18} />
          </div>
        </button>
      </div>
    </div>
  );
}

export default function WebStudioPage() {
  const [mode, setMode] = useState<'selector' | 'quick' | 'builder'>('selector');
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlMode = params.get('mode');
    if (urlMode === 'quick') {
      setMode('quick');
    } else if (urlMode === 'builder') {
      setMode('builder');
    }
  }, []);

  // Блокируем переходы по якорным ссылкам
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (mode === 'selector') {
    return (
      <AppLayout>
        <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
          <DashboardHeader />
          <div style={{ padding: '24px 48px' }}>
            <ModeSelector onSelectMode={setMode} />
          </div>
        </div>
      </AppLayout>
    );
  }

  if (mode === 'quick') {
    return (
      <AppLayout>
        <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
          <DashboardHeader />
          <div style={{ padding: '24px 48px' }}>
            <QuickGenerate 
              onComplete={() => setMode('selector')}
              onBack={() => setMode('selector')}
            />
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
        <DashboardHeader />
        <div style={{ padding: '24px 48px' }}>
          {currentStep === 1 && <WebStudioStep1 onNext={() => setCurrentStep(2)} />}
          {currentStep === 2 && <WebStudioStep2 onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />}
          {currentStep === 3 && <WebStudioStep3 onNext={() => setCurrentStep(4)} onBack={() => setCurrentStep(2)} />}
          {currentStep === 4 && <WebStudioStep4 onNext={() => setCurrentStep(5)} onBack={() => setCurrentStep(3)} />}
          {currentStep === 5 && <WebStudioStep5 onNext={() => setCurrentStep(6)} onBack={() => setCurrentStep(4)} />}
          {currentStep === 6 && <WebStudioStep6 onNext={() => setCurrentStep(8)} onBack={() => setCurrentStep(5)} />}
          {currentStep === 8 && <WebStudioStep8 onNext={() => setCurrentStep(9)} onBack={() => setCurrentStep(6)} />}
          {currentStep === 9 && <WebStudioStep9 onBack={() => setCurrentStep(8)} />}
        </div>
      </div>
    </AppLayout>
  );
}


