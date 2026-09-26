'use client';

import React, { useState } from 'react';
import { Eye, Monitor, Smartphone, Tablet, CheckCircle, ChevronRight } from 'lucide-react';

export default function WebStudioStep8({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [checks, setChecks] = useState({
    responsive: false,
    typography: false,
    colors: false,
    navigation: false,
    forms: false,
    animations: false,
  });

  const checklist = [
    { key: 'responsive' as const, label: 'Адаптивность', icon: Monitor },
    { key: 'typography' as const, label: 'Типографика', icon: CheckCircle },
    { key: 'colors' as const, label: 'Цветовая схема', icon: CheckCircle },
    { key: 'navigation' as const, label: 'Навигация', icon: CheckCircle },
    { key: 'forms' as const, label: 'Формы', icon: CheckCircle },
    { key: 'animations' as const, label: 'Анимации', icon: CheckCircle },
  ];

  const completedChecks = Object.values(checks).filter(Boolean).length;
  const totalChecks = Object.keys(checks).length;
  const progressPercent = (completedChecks / totalChecks) * 100;

  const toggleCheck = (key: keyof typeof checks) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Eye size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-[24px] font-bold text-foreground">Предпросмотр</h1>
            <p className="text-[14px] text-muted-foreground">Шаг 8 из 9 · Тестирование</p>
          </div>
        </div>
        <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* Device Selector */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[18px] font-semibold text-foreground">Режим просмотра</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveDevice('desktop')}
              className={`p-3 rounded-lg transition-all ${
                activeDevice === 'desktop'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Monitor size={20} />
            </button>
            <button
              onClick={() => setActiveDevice('tablet')}
              className={`p-3 rounded-lg transition-all ${
                activeDevice === 'tablet'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Tablet size={20} />
            </button>
            <button
              onClick={() => setActiveDevice('mobile')}
              className={`p-3 rounded-lg transition-all ${
                activeDevice === 'mobile'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Smartphone size={20} />
            </button>
          </div>
        </div>

        {/* Preview Frame */}
        <div className="rounded-lg bg-background border border-border overflow-hidden">
          <div className={`bg-muted/50 border-b border-border p-3 flex items-center gap-2 ${
            activeDevice === 'mobile' ? 'justify-center' : 'justify-start'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[11px] text-muted-foreground font-mono">localhost:3000/preview</span>
            </div>
          </div>
          <div className={`bg-white min-h-[400px] flex items-center justify-center ${
            activeDevice === 'desktop' ? '' :
            activeDevice === 'tablet' ? 'max-w-2xl mx-auto' : 'max-w-sm mx-auto'
          }`}>
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Eye size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Предпросмотр сайта</h3>
              <p className="text-muted-foreground mb-4">
                {activeDevice === 'desktop' && '🖥️ Desktop версия (1920×1080)'}
                {activeDevice === 'tablet' && '📱 Tablet версия (768×1024)'}
                {activeDevice === 'mobile' && '📱 Mobile версия (375×667)'}
              </p>
              <p className="text-sm text-muted-foreground">
                Здесь будет отображаться ваш сгенерированный сайт
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-[18px] font-semibold text-foreground mb-4">Контрольный список</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {checklist.map((item) => {
            const Icon = item.icon;
            const isChecked = checks[item.key];
            return (
              <button
                key={item.key}
                onClick={() => toggleCheck(item.key)}
                className={`p-4 rounded-xl border transition-all flex items-center gap-3 ${
                  isChecked
                    ? 'bg-success/10 border-success/50'
                    : 'bg-background border-border hover:border-primary/50'
                }`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                  isChecked ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  <CheckCircle size={16} />
                </div>
                <span className={`text-[13px] font-medium ${
                  isChecked ? 'text-success' : 'text-foreground'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-background border border-border text-[14px] font-medium text-foreground hover:bg-muted/50 transition-all"
        >
          ← Назад
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-[14px] font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          Завершить
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
