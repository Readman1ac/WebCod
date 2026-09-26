'use client';

import React, { useState } from 'react';
import { Type, Image, Link, ChevronRight, Upload, Plus, Trash2 } from 'lucide-react';

interface WebStudioStep3Props {
  onNext: () => void;
  onBack: () => void;
}

interface ContentItem {
  id: string;
  pageId: string;
  sectionId: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export default function WebStudioStep3({ onNext, onBack }: WebStudioStep3Props) {
  const [activeTab, setActiveTab] = useState('text');
  
  const [content, setContent] = useState({
    // Главная
    hero: {
      title: 'Создаём цифровое будущее',
      subtitle: 'Разрабатываем сайты и приложения, которые помогают бизнесу расти',
      ctaText: 'Начать проект',
      ctaLink: '/contact',
    },
    features: {
      title: 'Почему выбирают нас',
      items: [
        { icon: '⚡', title: 'Быстро', desc: 'Сроки от 3 дней' },
        { icon: '🎨', title: 'Красиво', desc: 'Современный дизайн' },
        { icon: '📱', title: 'Адаптивно', desc: 'На всех устройствах' },
        { icon: '🔒', title: 'Надёжно', desc: 'Гарантия качества' },
      ],
    },
    aboutPreview: {
      title: 'О компании',
      text: 'Мы — команда профессионалов с опытом более 5 лет. Создаём сайты, которые приносят результат.',
    },
    servicesPreview: {
      title: 'Наши услуги',
      items: [
        { title: 'Веб-дизайн', desc: 'UI/UX, прототипы, макеты' },
        { title: 'Разработка', desc: 'Frontend, backend, CMS' },
        { title: 'Поддержка', desc: 'Хостинг, обновления, SEO' },
      ],
    },
    portfolioPreview: {
      title: 'Наши работы',
      subtitle: 'Последние проекты',
      items: [
        { title: 'Проект 1', category: 'Сайт' },
        { title: 'Проект 2', category: 'Приложение' },
        { title: 'Проект 3', category: 'Бренд' },
      ],
    },
    testimonials: {
      title: 'Отзывы клиентов',
      items: [
        { name: 'Иван Петров', role: 'CEO, Компания A', text: 'Отличная работа! Сайт превзошёл ожидания.' },
        { name: 'Анна Сидорова', role: 'Маркетолог, Компания B', text: 'Профессионально и в срок. Рекомендую!' },
      ],
    },
    cta: {
      title: 'Готовы начать?',
      subtitle: 'Оставьте заявку и мы свяжемся с вами в течение часа',
      buttonText: 'Оставить заявку',
    },
  });

  const handleNext = () => {
    const step2Data = JSON.parse(localStorage.getItem('webStudioStep2') || '{}');
    const step3Data = {
      ...step2Data,
      content: content,
    };
    localStorage.setItem('webStudioStep3', JSON.stringify(step3Data));
    onNext();
  };

  const updateHero = (field: string, value: string) => {
    setContent(prev => ({ ...prev, hero: { ...prev.hero, [field]: value } }));
  };

  const updateFeature = (index: number, field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      features: {
        ...prev.features,
        items: prev.features.items.map((item, i) => 
          i === index ? { ...item, [field]: value } : item
        ),
      },
    }));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Type size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-[24px] font-bold text-foreground">Web Studio</h1>
            <p className="text-[14px] text-muted-foreground">Шаг 3 из 9 · Контент</p>
          </div>
        </div>
        <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: '33%' }} />
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab('text')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
            activeTab === 'text'
              ? 'bg-primary text-primary-foreground'
              : 'bg-background border border-border text-foreground hover:bg-muted/50'
          }`}
        >
          <Type size={16} />
          Текст
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('images')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
            activeTab === 'images'
              ? 'bg-primary text-primary-foreground'
              : 'bg-background border border-border text-foreground hover:bg-muted/50'
          }`}
        >
          <Image size={16} />
          Изображения
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('links')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
            activeTab === 'links'
              ? 'bg-primary text-primary-foreground'
              : 'bg-background border border-border text-foreground hover:bg-muted/50'
          }`}
        >
          <Link size={16} />
          Ссылки
        </button>
      </div>

      {activeTab === 'text' && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-[18px] font-semibold text-foreground mb-4">Главный экран (Hero)</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Заголовок</label>
                <input
                  type="text"
                  value={content.hero.title}
                  onChange={(e) => updateHero('title', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Подзаголовок</label>
                <textarea
                  value={content.hero.subtitle}
                  onChange={(e) => updateHero('subtitle', e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-1.5">Текст кнопки</label>
                  <input
                    type="text"
                    value={content.hero.ctaText}
                    onChange={(e) => updateHero('ctaText', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-1.5">Ссылка кнопки</label>
                  <input
                    type="text"
                    value={content.hero.ctaLink}
                    onChange={(e) => updateHero('ctaLink', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-[18px] font-semibold text-foreground mb-4">Преимущества</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.features.items.map((item, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[20px]">{item.icon}</span>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => updateFeature(index, 'title', e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <input
                    type="text"
                    value={item.desc}
                    onChange={(e) => updateFeature(index, 'desc', e.target.value)}
                    className="w-full px-3 py-1.5 rounded bg-background border border-border text-[12px] text-foreground focus:outline-none focus:border-primary/50"
                    placeholder="Описание"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-[18px] font-semibold text-foreground mb-4">О компании (кратко)</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Заголовок</label>
                <input
                  type="text"
                  value={content.aboutPreview.title}
                  onChange={(e) => setContent(prev => ({ ...prev, aboutPreview: { ...prev.aboutPreview, title: e.target.value } }))}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Текст</label>
                <textarea
                  value={content.aboutPreview.text}
                  onChange={(e) => setContent(prev => ({ ...prev, aboutPreview: { ...prev.aboutPreview, text: e.target.value } }))}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-[18px] font-semibold text-foreground mb-4">Призыв к действию (CTA)</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Заголовок</label>
                <input
                  type="text"
                  value={content.cta.title}
                  onChange={(e) => setContent(prev => ({ ...prev, cta: { ...prev.cta, title: e.target.value } }))}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Подзаголовок</label>
                <textarea
                  value={content.cta.subtitle}
                  onChange={(e) => setContent(prev => ({ ...prev, cta: { ...prev.cta, subtitle: e.target.value } }))}
                  rows={2}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Текст кнопки</label>
                <input
                  type="text"
                  value={content.cta.buttonText}
                  onChange={(e) => setContent(prev => ({ ...prev, cta: { ...prev.cta, buttonText: e.target.value } }))}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'images' && (
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-[18px] font-semibold text-foreground mb-4">Изображения</h2>
          <p className="text-[13px] text-muted-foreground mb-4">Загрузите изображения для вашего сайта</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 text-center">
                <div className="w-full aspect-square bg-muted/30 rounded-lg mb-3 flex items-center justify-center">
                  <Upload size={32} className="text-muted-foreground" />
                </div>
                <p className="text-[12px] font-medium text-foreground mb-2">Изображение {i}</p>
                <button className="text-[11px] text-primary hover:text-primary/80 font-medium">
                  Загрузить
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'links' && (
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-[18px] font-semibold text-foreground mb-4">Социальные сети и ссылки</h2>
          <p className="text-[13px] text-muted-foreground mb-4">Добавьте ссылки на ваши соцсети</p>

          <div className="space-y-3">
            {[
              { name: 'Telegram', icon: '✈️' },
              { name: 'WhatsApp', icon: '📱' },
              { name: 'Instagram', icon: '📷' },
              { name: 'Facebook', icon: '👍' },
              { name: 'LinkedIn', icon: '💼' },
              { name: 'YouTube', icon: '🎬' },
            ].map((social) => (
              <div key={social.name} className="flex items-center gap-3">
                <span className="text-[20px]">{social.icon}</span>
                <input
                  type="text"
                  placeholder={`Ссылка на ${social.name}`}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
            ))}
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
