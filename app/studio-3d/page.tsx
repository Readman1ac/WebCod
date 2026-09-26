'use client';

import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import DashboardHeader from '@/components/DashboardHeader';
import { Box, Upload, Sparkles, Download, Loader2 } from 'lucide-react';

export default function Studio3dPage() {
  const [step, setStep] = useState<'upload' | 'analyzing' | 'generating' | 'preview'>('upload');
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setReferenceImage(ev.target?.result as string);
        setStep('analyzing');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    setIsProcessing(true);
    setStep('generating');

    // Здесь будет вызов API для генерации Blender Python
    setTimeout(() => {
      setStep('preview');
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <DashboardHeader />

        <div className="px-6 py-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="mx-auto max-w-5xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-[28px] font-bold text-foreground">3D Studio</h1>
              <p className="text-[14px] text-muted-foreground">
                Генерация 3D-моделей и сцен с помощью AI
              </p>
            </div>

            {/* Progress */}
            <div className="mb-8 flex items-center gap-2">
              {['upload', 'analyzing', 'generating', 'preview'].map((s, i) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-semibold ${
                      step === s
                        ? 'bg-primary text-primary-foreground'
                        : ['upload', 'analyzing', 'generating', 'preview'].indexOf(step) > i
                        ? 'bg-success text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {i + 1}
                  </div>
                  {i < 3 && (
                    <div
                      className={`h-0.5 w-12 ${
                        ['upload', 'analyzing', 'generating', 'preview'].indexOf(step) > i
                          ? 'bg-success'
                          : 'bg-muted'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Upload */}
            {step === 'upload' && (
              <div className="rounded-xl border border-border bg-card p-12 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                  <Upload size={40} className="text-primary" />
                </div>
                <h2 className="mb-2 text-[20px] font-semibold text-foreground">Загрузи референс</h2>
                <p className="mb-6 text-[14px] text-muted-foreground">
                  Изображение объекта который хочешь создать в 3D
                </p>

                <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[14px] font-semibold text-primary-foreground transition-all hover:bg-primary/90">
                  <Upload size={16} />
                  Выбрать файл
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    className="hidden"
                  />
                </label>
              </div>
            )}

            {/* Step 2: Analyzing */}
            {step === 'analyzing' && referenceImage && (
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="mb-4 text-[20px] font-semibold text-foreground">Анализ референса</h2>

                <div className="mb-6 overflow-hidden rounded-lg border border-border">
                  <img src={referenceImage} alt="Reference" className="h-64 w-full object-cover" />
                </div>

                <div className="mb-6 rounded-lg bg-muted/50 p-4">
                  <p className="text-[14px] text-muted-foreground">
                    AI анализирует форму, материалы и пропорции объекта...
                  </p>
                </div>

                <button
                  onClick={handleGenerate}
                  className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[14px] font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  <Sparkles size={16} />
                  Сгенерировать 3D модель
                </button>
              </div>
            )}

            {/* Step 3: Generating */}
            {step === 'generating' && (
              <div className="rounded-xl border border-border bg-card p-12 text-center">
                <Loader2 size={48} className="mx-auto mb-4 animate-spin text-primary" />
                <h2 className="text-[20px] font-semibold text-foreground">Генерирую 3D модель...</h2>
                <p className="text-[14px] text-muted-foreground">
                  AI создаёт Blender сцену и экспортирует .glb
                </p>
              </div>
            )}

            {/* Step 4: Preview */}
            {step === 'preview' && (
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="mb-4 text-[20px] font-semibold text-foreground">3D модель готова!</h2>

                <div className="mb-6 flex items-center gap-4 rounded-lg bg-muted/50 p-4">
                  <Box size={32} className="text-primary" />
                  <div>
                    <p className="text-[14px] font-semibold text-foreground">model.glb</p>
                    <p className="text-[12px] text-muted-foreground">2.4 MB · Готово к экспорту</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setStep('upload')}
                    className="rounded-lg border border-border bg-background px-6 py-3 text-[14px] font-medium text-foreground transition-all hover:bg-muted/50"
                  >
                    Создать новую
                  </button>
                  <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[14px] font-semibold text-primary-foreground transition-all hover:bg-primary/90">
                    <Download size={16} />
                    Скачать .glb
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
