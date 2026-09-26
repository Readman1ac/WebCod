'use client';

import React from 'react';
import AppLayout from '@/components/AppLayout';
import DashboardHeader from '@/components/DashboardHeader';
import { FlaskConical, Loader, CheckCircle, AlertCircle } from 'lucide-react';

const tests = [
  { id: 'test-01', name: 'Адаптивность', status: 'pass', score: 98 },
  { id: 'test-02', name: 'Производительность', status: 'pass', score: 94 },
  { id: 'test-03', name: 'Доступность (a11y)', status: 'warning', score: 87 },
  { id: 'test-04', name: 'SEO', status: 'pass', score: 96 },
  { id: 'test-05', name: 'Валидация HTML', status: 'error', score: 72 },
];

export default function TestPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <DashboardHeader />

        <div className="px-6 py-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <FlaskConical size={24} className="text-primary" />
                </div>

                <div>
                  <h1 className="text-[24px] font-bold text-foreground">
                    Тестирование проекта
                  </h1>
                  <p className="text-[14px] text-muted-foreground">
                    Автоматическая проверка качества
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[18px] font-semibold text-foreground">Общий результат</h2>

                <div className="flex items-center gap-2 text-success">
                  <CheckCircle size={18} />
                  <span className="text-[13px] font-medium">Пройдено</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="mb-1 text-[48px] font-bold text-primary">89</p>
                  <p className="text-[12px] text-muted-foreground">из 100</p>
                </div>

                <div className="flex-1">
                  <div className="mb-2 h-3 overflow-hidden rounded-full bg-muted/50">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-300"
                      style={{ width: '89%' }}
                    />
                  </div>
                  <p className="text-[12px] text-muted-foreground">
                    Хороший результат! Проект готов к публикации.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 text-[18px] font-semibold text-foreground">Детали тестов</h2>

              <div className="space-y-2">
                {tests.map((test) => (
                  <div
                    key={test.id}
                    className="flex items-center gap-4 rounded-lg border border-border bg-background p-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                      {test.status === 'pass' && (
                        <CheckCircle size={20} className="text-success" />
                      )}
                      {test.status === 'warning' && (
                        <AlertCircle size={20} className="text-warning" />
                      )}
                      {test.status === 'error' && (
                        <AlertCircle size={20} className="text-error" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[14px] font-semibold text-foreground">{test.name}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[13px] font-bold ${
                          test.status === 'pass'
                            ? 'text-success'
                            : test.status === 'warning'
                              ? 'text-warning'
                              : 'text-error'
                        }`}
                      >
                        {test.score}/100
                      </span>

                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                          test.status === 'pass'
                            ? 'bg-success/10 text-success'
                            : test.status === 'warning'
                              ? 'bg-warning/10 text-warning'
                              : 'bg-error/10 text-error'
                        }`}
                      >
                        {test.status === 'pass'
                          ? 'OK'
                          : test.status === 'warning'
                            ? 'Внимание'
                            : 'Ошибка'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-[14px] font-medium text-foreground transition-all hover:bg-muted/50"
              >
                <Loader size={18} />
                Запустить заново
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[14px] font-semibold text-primary-foreground transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                Продолжить
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}