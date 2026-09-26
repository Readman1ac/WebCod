'use client';

import React, { useState } from 'react';
import { Settings, Mail, MessageSquare, ShoppingCart, Calendar, Star, Shield, ChevronRight } from 'lucide-react';

interface WebStudioStep4Props {
  onNext: () => void;
  onBack: () => void;
}

interface Feature {
  id: string;
  name: string;
  icon: string;
  enabled: boolean;
  description: string;
  settings?: {
    email?: string;
    webhook?: string;
    providers?: string[];
  };
}

export default function WebStudioStep4({ onNext, onBack }: WebStudioStep4Props) {
  const [features, setFeatures] = useState<Feature[]>([
    {
      id: 'contact-form',
      name: 'Форма обратной связи',
      icon: '📧',
      enabled: true,
      description: 'Позвольте клиентам связаться с вами',
      settings: { email: '' },
    },
    {
      id: 'live-chat',
      name: 'Онлайн-чат',
      icon: '💬',
      enabled: false,
      description: 'Общайтесь с посетителями в реальном времени',
      settings: { providers: ['telegram', 'whatsapp'] },
    },
    {
      id: 'newsletter',
      name: 'Рассылка',
      icon: '📨',
      enabled: false,
      description: 'Собирайте email для рассылок',
      settings: { email: '' },
    },
    {
      id: 'ecommerce',
      name: 'Интернет-магазин',
      icon: '🛒',
      enabled: false,
      description: 'Продавайте товары онлайн',
      settings: { webhook: '' },
    },
    {
      id: 'booking',
      name: 'Онлайн-запись',
      icon: '📅',
      enabled: false,
      description: 'Запись на услуги через сайт',
      settings: {},
    },
    {
      id: 'reviews',
      name: 'Отзывы',
      icon: '⭐',
      enabled: true,
      description: 'Показывайте отзывы клиентов',
      settings: {},
    },
    {
      id: 'analytics',
      name: 'Аналитика',
      icon: '📊',
      enabled: true,
      description: 'Отслеживайте посещаемость',
      settings: {},
    },
    {
      id: 'seo',
      name: 'SEO-оптимизация',
      icon: '🔍',
      enabled: true,
      description: 'Улучшите позиции в поиске',
      settings: {},
    },
    {
      id: 'ssl',
      name: 'SSL-сертификат',
      icon: '🔒',
      enabled: true,
      description: 'Безопасное соединение HTTPS',
      settings: {},
    },
    {
      id: 'multilang',
      name: 'Мультиязычность',
      icon: '🌐',
      enabled: false,
      description: 'Сайт на нескольких языках',
      settings: {},
    },
    {
      id: 'dark-mode',
      name: 'Тёмная тема',
      icon: '🌙',
      enabled: false,
      description: 'Переключатель темы',
      settings: {},
    },
    {
      id: 'animations',
      name: 'Анимации',
      icon: '✨',
      enabled: true,
      description: 'Плавные анимации элементов',
      settings: {},
    },
  ]);

  const toggleFeature = (featureId: string) => {
    setFeatures(prev => prev.map(f => 
      f.id === featureId ? { ...f, enabled: !f.enabled } : f
    ));
  };

  const handleNext = () => {
    const step3Data = JSON.parse(localStorage.getItem('webStudioStep3') || '{}');
    const step4Data = {
      ...step3Data,
      features: features.filter(f => f.enabled),
    };
    localStorage.setItem('webStudioStep4', JSON.stringify(step4Data));
    onNext();
  };

  const enabledFeaturesCount = features.filter(f => f.enabled).length;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Settings size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-[24px] font-bold text-foreground">Web Studio</h1>
            <p className="text-[14px] text-muted-foreground">Шаг 4 из 9 · Дополнительные функции</p>
          </div>
        </div>
        <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: '44%' }} />
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-[18px] font-semibold text-foreground mb-4">Функции сайта</h2>
        <p className="text-[13px] text-muted-foreground mb-4">Выберите дополнительные функции для вашего сайта</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <label 
              key={feature.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                feature.enabled
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-background hover:border-primary/30'
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={feature.enabled}
                  onChange={() => toggleFeature(feature.id)}
                  className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[18px]">{feature.icon}</span>
                    <span className="text-[14px] font-semibold text-foreground">{feature.name}</span>
                  </div>
                  <p className="text-[12px] text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg bg-muted/30">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-muted-foreground">
              Выбрано функций: <span className="font-semibold text-foreground">{enabledFeaturesCount}</span>
            </span>
            <span className="text-[11px] text-muted-foreground">
              Некоторые функции могут влиять на стоимость
            </span>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-[18px] font-semibold text-foreground mb-4">Настройки функций</h2>
        <p className="text-[13px] text-muted-foreground mb-4">Дополнительные параметры для выбранных функций</p>

        <div className="space-y-4">
          {features.filter(f => f.enabled && f.id === 'contact-form').map((feature) => (
            <div key={feature.id} className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[18px]">📧</span>
                <h3 className="text-[15px] font-semibold text-foreground">Форма обратной связи</h3>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Email для уведомлений</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
          ))}

          {features.filter(f => f.enabled && f.id === 'live-chat').map((feature) => (
            <div key={feature.id} className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[18px]">💬</span>
                <h3 className="text-[15px] font-semibold text-foreground">Онлайн-чат</h3>
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded border-border text-primary" />
                  <span className="text-[13px] text-foreground">Telegram</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded border-border text-primary" />
                  <span className="text-[13px] text-foreground">WhatsApp</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded border-border text-primary" />
                  <span className="text-[13px] text-foreground">Viber</span>
                </label>
              </div>
            </div>
          ))}

          {features.filter(f => f.enabled && f.id === 'newsletter').map((feature) => (
            <div key={feature.id} className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[18px]">📨</span>
                <h3 className="text-[15px] font-semibold text-foreground">Рассылка</h3>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Email для сбора подписок</label>
                <input
                  type="email"
                  placeholder="newsletter@email.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
          ))}

          {features.filter(f => f.enabled && !['contact-form', 'live-chat', 'newsletter'].includes(f.id)).length === 0 && (
            <p className="text-[13px] text-muted-foreground text-center py-8">
              Настройки доступны для выбранных функций выше
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
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
