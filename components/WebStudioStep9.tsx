'use client';

import React from 'react';
import { PackageOpen, Download, CheckCircle, FolderOpen, ChevronRight, Eye } from 'lucide-react';

export default function WebStudioStep9({ onBack }: { onBack: () => void }) {
  const handleDownload = () => {
    alert('Скачивание проекта... (будет реализовано)');
  };

  const handleOpenFolder = () => {
    alert('Открытие папки проекта... (будет реализовано)');
  };

  const handleNewProject = () => {
    if (confirm('Начать новый проект? Текущий прогресс будет потерян.')) {
      window.location.href = '/web-studio';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
            <PackageOpen size={24} className="text-success" />
          </div>
          <div>
            <h1 className="text-[24px] font-bold text-foreground">Готово!</h1>
            <p className="text-[14px] text-muted-foreground">Шаг 9 из 9 · Завершение</p>
          </div>
        </div>
        <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
          <div className="h-full bg-success w-full" />
        </div>
      </div>

      {/* Success Card */}
      <div className="bg-card border border-border rounded-2xl p-8 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center">
            <CheckCircle size={32} className="text-success" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-1">Сайт готов к загрузке!</h2>
            <p className="text-muted-foreground">Все этапы успешно завершены</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-muted/50 rounded-xl p-4">
            <div className="text-2xl font-bold text-foreground mb-1">9</div>
            <div className="text-sm text-muted-foreground">Шагов</div>
          </div>
          <div className="bg-muted/50 rounded-xl p-4">
            <div className="text-2xl font-bold text-foreground mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Готово</div>
          </div>
          <div className="bg-muted/50 rounded-xl p-4">
            <div className="text-2xl font-bold text-foreground mb-1">~2 мин</div>
            <div className="text-sm text-muted-foreground">Время</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button 
            onClick={handleDownload}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 py-3 font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Скачать сайт
          </button>
          <button 
            onClick={handleOpenFolder}
            className="flex-1 bg-muted hover:bg-muted/80 text-foreground rounded-xl px-6 py-3 font-medium transition-colors flex items-center justify-center gap-2"
          >
            <FolderOpen size={20} />
            Открыть папку
          </button>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Что дальше?</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Eye size={14} className="text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">Предварительный просмотр</div>
              <div className="text-sm text-muted-foreground">Проверьте как сайт выглядит в браузере</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Download size={14} className="text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">Загрузите на хостинг</div>
              <div className="text-sm text-muted-foreground">Опубликуйте сайт в интернете</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          ← Назад
        </button>
        <button
          onClick={handleNewProject}
          className="bg-success hover:bg-success/90 text-success-foreground rounded-xl px-8 py-3 font-medium transition-colors flex items-center gap-2"
        >
          Начать новый проект
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
