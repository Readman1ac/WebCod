'use client';

import React, { useState } from 'react';
import { Layout, ChevronRight, Plus } from 'lucide-react';

interface WebStudioStep2Props {
  onNext: () => void;
  onBack: () => void;
}

interface Page {
  id: string;
  name: string;
  slug: string;
  icon: string;
  enabled: boolean;
}

interface Section {
  id: string;
  name: string;
  pageId: string;
  enabled: boolean;
}

export default function WebStudioStep2({ onNext, onBack }: WebStudioStep2Props) {
  console.log('STEP2 onNext:', typeof onNext, onNext);
  const [pages, setPages] = useState<Page[]>([
    { id: 'home', name: 'Главная', slug: '/', icon: '🏠', enabled: true },
    { id: 'about', name: 'О нас', slug: '/about', icon: '👥', enabled: true },
    { id: 'services', name: 'Услуги', slug: '/services', icon: '⚡', enabled: true },
    { id: 'portfolio', name: 'Портфолио', slug: '/portfolio', icon: '📁', enabled: true },
    { id: 'blog', name: 'Блог', slug: '/blog', icon: '📝', enabled: false },
    { id: 'contact', name: 'Контакты', slug: '/contact', icon: '📧', enabled: true },
    { id: 'faq', name: 'FAQ', slug: '/faq', icon: '❓', enabled: false },
    { id: 'pricing', name: 'Цены', slug: '/pricing', icon: '💰', enabled: false },
  ]);

  const [sections, setSections] = useState<Section[]>([
    { id: 'hero', name: 'Hero (главный экран)', pageId: 'home', enabled: true },
    { id: 'features', name: 'Преимущества', pageId: 'home', enabled: true },
    { id: 'about-preview', name: 'О компании (кратко)', pageId: 'home', enabled: true },
    { id: 'services-preview', name: 'Услуги (превью)', pageId: 'home', enabled: true },
    { id: 'portfolio-preview', name: 'Работы (превью)', pageId: 'home', enabled: true },
    { id: 'testimonials', name: 'Отзывы', pageId: 'home', enabled: true },
    { id: 'cta', name: 'Призыв к действию', pageId: 'home', enabled: true },
    { id: 'team', name: 'Команда', pageId: 'about', enabled: true },
    { id: 'history', name: 'История', pageId: 'about', enabled: false },
    { id: 'services-list', name: 'Список услуг', pageId: 'services', enabled: true },
    { id: 'pricing-table', name: 'Таблица цен', pageId: 'services', enabled: false },
    { id: 'portfolio-grid', name: 'Галерея работ', pageId: 'portfolio', enabled: true },
    { id: 'contact-form', name: 'Форма связи', pageId: 'contact', enabled: true },
    { id: 'map', name: 'Карта', pageId: 'contact', enabled: true },
    { id: 'social', name: 'Соцсети', pageId: 'contact', enabled: true },
  ]);

  const togglePage = (pageId: string) => {
    setPages(prev => prev.map(p => 
      p.id === pageId ? { ...p, enabled: !p.enabled } : p
    ));
  };

  const toggleSection = (sectionId: string) => {
    setSections(prev => prev.map(s => 
      s.id === sectionId ? { ...s, enabled: !s.enabled } : s
    ));
  };

  const enabledPagesCount = pages.filter(p => p.enabled).length;
  const enabledSectionsCount = sections.filter(s => s.enabled).length;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Layout size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-[24px] font-bold text-foreground">Web Studio</h1>
            <p className="text-[14px] text-muted-foreground">Шаг 2 из 9 · Структура сайта</p>
          </div>
        </div>
        <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: '22%' }} />
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-[18px] font-semibold text-foreground mb-4">Страницы сайта</h2>
        <p className="text-[13px] text-muted-foreground mb-4">Выберите страницы, которые будут на вашем сайте</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {pages.map((page) => (
            <button
              key={page.id}
              type="button"
              onClick={() => togglePage(page.id)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${page.enabled ? 'border-primary bg-primary/5' : 'border-border bg-background hover:border-primary/30'}`}
            >
              <div className="text-[24px] mb-2">{page.icon}</div>
              <p className="text-[13px] font-semibold text-foreground">{page.name}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{page.slug}</p>
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between p-3 rounded-lg bg-muted/30">
          <span className="text-[13px] text-muted-foreground">
            Выбрано страниц: <span className="font-semibold text-foreground">{enabledPagesCount}</span>
          </span>
          <button type="button" className="flex items-center gap-2 text-[13px] font-medium text-primary hover:text-primary/80 transition-colors">
            <Plus size={16} />
            Добавить страницу
          </button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-[18px] font-semibold text-foreground mb-4">Разделы страниц</h2>
        <p className="text-[13px] text-muted-foreground mb-4">Настройте какие секции будут на каждой странице</p>

        <div className="space-y-6">
          {pages.filter(p => p.enabled).map((page) => (
            <div key={page.id} className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[18px]">{page.icon}</span>
                <h3 className="text-[15px] font-semibold text-foreground">{page.name}</h3>
                <span className="text-[11px] text-muted-foreground ml-2">{page.slug}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sections.filter(s => s.pageId === page.id).map((section) => (
                  <label key={section.id} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border cursor-pointer hover:border-primary/30 transition-all">
                    <input type="checkbox" checked={section.enabled} onChange={() => toggleSection(section.id)} className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20" />
                    <span className="text-[13px] font-medium text-foreground">{section.name}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-lg bg-muted/30">
          <span className="text-[13px] text-muted-foreground">
            Выбрано разделов: <span className="font-semibold text-foreground">{enabledSectionsCount}</span>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button type="button" onClick={onBack} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-background border border-border text-[14px] font-medium text-foreground hover:bg-muted/50 transition-all">
          ← Назад
        </button>

        <button type="button" onClick={onNext} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-[14px] font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          Далее
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
