'use client';

import React, { useState } from 'react';
import { Eye, Monitor, Smartphone, Tablet, Settings, Download, ChevronRight, Sparkles } from 'lucide-react';

interface WebStudioStep5Props {
  onNext: () => void;
  onBack: () => void;
}

export default function WebStudioStep5({ onNext, onBack }: WebStudioStep5Props) {
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState('preview');

  const [settings, setSettings] = useState({
    siteName: 'My Website',
    siteDescription: 'Современный сайт для вашего бизнеса',
    favicon: '',
    googleAnalytics: '',
    googleTagManager: '',
    customCode: '',
    enableCache: true,
    enableMinify: true,
    enableImageOptimization: true,
  });

  const handleNext = () => {
    const step4Data = JSON.parse(localStorage.getItem('webStudioStep4') || '{}');
    const step5Data = {
      ...step4Data,
      settings: settings,
    };
    localStorage.setItem('webStudioStep5', JSON.stringify(step5Data));
    onNext();
  };

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const getPreviewWidth = () => {
    switch (previewDevice) {
      case 'mobile': return 'max-w-[375px]';
      case 'tablet': return 'max-w-[768px]';
      default: return 'max-w-full';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Eye size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-[24px] font-bold text-foreground">Web Studio</h1>
            <p className="text-[14px] text-muted-foreground">Шаг 5 из 9 · Предпросмотр и настройки</p>
          </div>
        </div>
        <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: '55%' }} />
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
            activeTab === 'preview'
              ? 'bg-primary text-primary-foreground'
              : 'bg-background border border-border text-foreground hover:bg-muted/50'
          }`}
        >
          <Eye size={16} />
          Предпросмотр
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('settings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
            activeTab === 'settings'
              ? 'bg-primary text-primary-foreground'
              : 'bg-background border border-border text-foreground hover:bg-muted/50'
          }`}
        >
          <Settings size={16} />
          Настройки
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('export')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
            activeTab === 'export'
              ? 'bg-primary text-primary-foreground'
              : 'bg-background border border-border text-foreground hover:bg-muted/50'
          }`}
        >
          <Download size={16} />
          Экспорт
        </button>
      </div>

      {activeTab === 'preview' && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[16px] font-semibold text-foreground">Предпросмотр сайта</h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setPreviewDevice('mobile')}
                  className={`p-2 rounded-lg transition-all ${
                    previewDevice === 'mobile'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background border border-border text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Smartphone size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewDevice('tablet')}
                  className={`p-2 rounded-lg transition-all ${
                    previewDevice === 'tablet'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background border border-border text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Tablet size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewDevice('desktop')}
                  className={`p-2 rounded-lg transition-all ${
                    previewDevice === 'desktop'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background border border-border text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Monitor size={18} />
                </button>
              </div>
            </div>

            <div className={`${getPreviewWidth()} mx-auto border border-border rounded-lg overflow-hidden bg-background`}>
              <div className="h-8 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="flex-1 ml-4 h-5 bg-background rounded text-[10px] flex items-center px-2 text-muted-foreground">
                  yoursite.com
                </div>
              </div>
              <div className="p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={32} className="text-primary" />
                  </div>
                  <h3 className="text-[18px] font-bold text-foreground mb-2">Предпросмотр сайта</h3>
                  <p className="text-[13px] text-muted-foreground mb-4">
                    {settings.siteName}
                  </p>
                  <p className="text-[12px] text-muted-foreground">
                    {previewDevice === 'desktop' && '🖥️ Десктопная версия'}
                    {previewDevice === 'tablet' && '📱 Планшетная версия'}
                    {previewDevice === 'mobile' && '📱 Мобильная версия'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-[18px] font-semibold text-foreground mb-4">Сводка проекта</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-muted/30">
                <p className="text-[11px] text-muted-foreground mb-1">Страниц</p>
                <p className="text-[20px] font-bold text-foreground">5</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <p className="text-[11px] text-muted-foreground mb-1">Разделов</p>
                <p className="text-[20px] font-bold text-foreground">12</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <p className="text-[11px] text-muted-foreground mb-1">Функций</p>
                <p className="text-[20px] font-bold text-foreground">6</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <p className="text-[11px] text-muted-foreground mb-1">Стиль</p>
                <p className="text-[20px] font-bold text-foreground">Modern</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-[18px] font-semibold text-foreground mb-4">Основные настройки</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Название сайта</label>
                <input
                  type="text"
                  value={settings.siteName}
                  onChange={(e) => updateSetting('siteName', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Описание сайта</label>
                <textarea
                  value={settings.siteDescription}
                  onChange={(e) => updateSetting('siteDescription', e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Favicon (иконка сайта)</label>
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center">
                    <span className="text-[10px] text-muted-foreground">64×64</span>
                  </div>
                  <button className="px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground hover:bg-muted/50 transition-all">
                    Загрузить
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-[18px] font-semibold text-foreground mb-4">Аналитика</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Google Analytics ID</label>
                <input
                  type="text"
                  value={settings.googleAnalytics}
                  onChange={(e) => updateSetting('googleAnalytics', e.target.value)}
                  placeholder="G-XXXXXXXXXX"
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Google Tag Manager ID</label>
                <input
                  type="text"
                  value={settings.googleTagManager}
                  onChange={(e) => updateSetting('googleTagManager', e.target.value)}
                  placeholder="GTM-XXXXXXX"
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-[18px] font-semibold text-foreground mb-4">Производительность</h2>
            
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border cursor-pointer hover:border-primary/30 transition-all">
                <input
                  type="checkbox"
                  checked={settings.enableCache}
                  onChange={(e) => updateSetting('enableCache', e.target.checked)}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                />
                <div>
                  <p className="text-[13px] font-medium text-foreground">Включить кеширование</p>
                  <p className="text-[11px] text-muted-foreground">Ускорит загрузку сайта</p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border cursor-pointer hover:border-primary/30 transition-all">
                <input
                  type="checkbox"
                  checked={settings.enableMinify}
                  onChange={(e) => updateSetting('enableMinify', e.target.checked)}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                />
                <div>
                  <p className="text-[13px] font-medium text-foreground">Минификация кода</p>
                  <p className="text-[11px] text-muted-foreground">Сжать CSS и JavaScript</p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border cursor-pointer hover:border-primary/30 transition-all">
                <input
                  type="checkbox"
                  checked={settings.enableImageOptimization}
                  onChange={(e) => updateSetting('enableImageOptimization', e.target.checked)}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                />
                <div>
                  <p className="text-[13px] font-medium text-foreground">Оптимизация изображений</p>
                  <p className="text-[11px] text-muted-foreground">Автоматическое сжатие картинок</p>
                </div>
              </label>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-[18px] font-semibold text-foreground mb-4">Custom Code</h2>
            
            <div>
              <label className="block text-[13px] font-medium text-foreground mb-1.5">Дополнительный код (HTML/CSS/JS)</label>
              <textarea
                value={settings.customCode}
                onChange={(e) => updateSetting('customCode', e.target.value)}
                placeholder="<script>console.log('Hello');</script>"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-[12px] font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'export' && (
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-[18px] font-semibold text-foreground mb-4">Экспорт проекта</h2>
          <p className="text-[13px] text-muted-foreground mb-6">Выберите формат экспорта</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <button className="p-6 rounded-lg border-2 border-border bg-background hover:border-primary/50 transition-all text-left">
              <div className="text-[24px] mb-3">📦</div>
              <h3 className="text-[14px] font-semibold text-foreground mb-1">HTML + CSS + JS</h3>
              <p className="text-[11px] text-muted-foreground">Статический сайт</p>
            </button>

            <button className="p-6 rounded-lg border-2 border-primary bg-primary/5 text-left">
              <div className="text-[24px] mb-3">⚛️</div>
              <h3 className="text-[14px] font-semibold text-foreground mb-1">React Component</h3>
              <p className="text-[11px] text-muted-foreground">Для интеграции</p>
            </button>

            <button className="p-6 rounded-lg border-2 border-border bg-background hover:border-primary/50 transition-all text-left">
              <div className="text-[24px] mb-3">🚀</div>
              <h3 className="text-[14px] font-semibold text-foreground mb-1">Deploy</h3>
              <p className="text-[11px] text-muted-foreground">Опубликовать онлайн</p>
            </button>
          </div>

          <div className="p-4 rounded-lg bg-muted/30">
            <h3 className="text-[14px] font-semibold text-foreground mb-2">Что будет экспортировано:</h3>
            <ul className="text-[12px] text-muted-foreground space-y-1">
              <li>✓ Все страницы и разделы</li>
              <li>✓ Контент и изображения</li>
              <li>✓ Выбранные функции</li>
              <li>✓ Настройки и стили</li>
            </ul>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-6">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-background border border-border text-[14px] font-medium text-foreground hover:bg-muted/50 transition-all"
        >
          ← Назад
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-[14px] font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          Далее
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
