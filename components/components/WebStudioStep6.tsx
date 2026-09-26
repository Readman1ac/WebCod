'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Sparkles, CheckCircle, Loader, ChevronRight, Image } from 'lucide-react';

interface Section {
  id: string;
  name: string;
  status: 'pending' | 'generating' | 'done';
  tokens: number;
  content: string;
  image?: string;
}

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const initialSections: Section[] = [
  { id: 'sec-01', name: 'Главная — Герой', status: 'pending', tokens: 0, content: '' },
  { id: 'sec-02', name: 'О нас', status: 'pending', tokens: 0, content: '' },
  { id: 'sec-03', name: 'Услуги', status: 'pending', tokens: 0, content: '' },
  { id: 'sec-04', name: 'Портфолио', status: 'pending', tokens: 0, content: '' },
  { id: 'sec-05', name: 'Контакты', status: 'pending', tokens: 0, content: '' },
];

// Генерация URL картинки по названию
function generateImageUrl(sectionName: string): string {
  const prompts: Record<string, string> = {
    'Главная': 'modern website hero section professional design',
    'О нас': 'creative team office workspace collaboration',
    'Услуги': 'digital services icons web development design',
    'Портфолио': 'portfolio showcase projects gallery modern',
    'Контакты': 'contact form communication business professional',
    'Каталог': 'product catalog grid layout ecommerce',
    'Доставка': 'delivery shipping package logistics',
    'Гарантия': 'warranty service support quality assurance',
  };
  
  const key = Object.keys(prompts).find(k => sectionName.includes(k)) || 'Главная';
  const prompt = prompts[key];
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=600&nologo=true`;
}

// Генерация картинки товара
function generateProductImage(productName: string): string {
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(productName + ' product photography')}?width=400&height=400&nologo=true`;
}

export default function WebStudioStep6({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [sections, setSections] = useState<Section[]>(initialSections);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalTokens, setTotalTokens] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    const generateAll = async () => {
      setIsGenerating(true);

      try {
        // Вызов API (закомментируй для демо, раскомментируй для реальной генерации)
        /*
        const response = await fetch('/api/generate-site', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            mode: 'builder',
            sections: initialSections,
            style: { theme: 'modern' },
          }),
        });
        const data = await response.json();
        
        if (data.success) {
          setSections(data.data.sections);
          setProducts(data.data.products || []);
          setTotalTokens(data.data.sections.reduce((sum: number, s: Section) => sum + s.tokens, 0));
          setIsComplete(true);
        }
        */

        // Демо режим (имитация API)
        const generateSection = async (index: number) => {
          await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1500));
          
          const section = initialSections[index];
          const tokens = Math.floor(100 + Math.random() * 200);
          const content = `Генерированный контент для секции "${section.name}". Уникальный текст описывающий преимущества и особенности раздела.`;
          const image = generateImageUrl(section.name);

          setSections(prev => prev.map((s, i) => 
            i === index ? { ...s, status: 'done', tokens, content, image } : s
          ));
          setTotalTokens(prev => prev + tokens);
        };

        await Promise.all(initialSections.map((_, i) => generateSection(i)));

        // Генерируем товары для магазина
        const demoProducts = [
          { id: 'prod-1', name: 'RTX 5090', price: '189 990₽' },
          { id: 'prod-2', name: 'Intel Core i9', price: '59 990₽' },
          { id: 'prod-3', name: 'DDR5 32GB', price: '14 990₽' },
          { id: 'prod-4', name: 'NVMe 1TB', price: '9 990₽' },
        ];

        const productsWithImages = demoProducts.map(p => ({
          ...p,
          image: generateProductImage(p.name),
        }));

        setProducts(productsWithImages);
        setIsComplete(true);
      } catch (error) {
        console.error('Generation error:', error);
      } finally {
        setIsGenerating(false);
      }
    };

    generateAll();
  }, []);

  const completedCount = sections.filter(s => s.status === 'done').length;
  const progressPercent = (completedCount / sections.length) * 100;

  const previewSection = sections.find(s => s.status === 'done' && s.content);
  const previewContent = previewSection?.content || '';
  const previewTitle = previewSection?.name || '';
  const previewImage = previewSection?.image || '';

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileText size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-[24px] font-bold text-foreground">Генерация контента</h1>
            <p className="text-[14px] text-muted-foreground">Шаг 6 из 9 · Тексты и изображения</p>
          </div>
        </div>
        <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* Progress */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          {isComplete ? <CheckCircle size={20} className="text-success" /> : <Loader size={20} className="text-primary animate-spin" />}
          <div>
            <p className="text-[15px] font-semibold text-foreground">
              {isComplete ? 'Весь контент сгенерирован!' : isGenerating ? 'Генерируем тексты и картинки...' : 'Обработка...'}
            </p>
            <p className="text-[13px] text-muted-foreground">Создаём уникальный контент с релевантными изображениями</p>
          </div>
        </div>
        <div className="h-2 bg-muted/50 rounded-full overflow-hidden mb-3">
          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>
        <p className="text-[12px] text-muted-foreground">Использовано {totalTokens} токенов · llama3.2:3b</p>
      </div>

      {/* Sections */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-[18px] font-semibold text-foreground mb-4">Секции контента</h2>
        <div className="space-y-2">
          {sections.map((section) => (
            <div key={section.id} className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border">
              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0">
                {section.status === 'done' ? <CheckCircle size={18} className="text-success" /> : <Loader size={18} className="text-primary animate-spin"/>}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold text-foreground">{section.name}</p>
                <p className="text-[11px] text-muted-foreground">{section.tokens > 0 ? `${section.tokens} токенов` : 'Ожидание...'}</p>
              </div>
              <div className="flex items-center gap-2">
                {section.status === 'done' && (
                  <span className="text-[11px] text-success flex items-center gap-1">
                    <CheckCircle size={12} /> Готово
                  </span>
                )}
                {section.status === 'generating' && (
                  <span className="text-[11px] text-primary flex items-center gap-1">
                    <Loader size={12} className="animate-spin" /> Генерация
                  </span>
                )}
                {section.status === 'pending' && (
                  <span className="text-[11px] text-muted-foreground">Ожидание</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Preview */}
      {products.length > 0 && (
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-[18px] font-semibold text-foreground mb-4">Товары</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="rounded-lg bg-background border border-border overflow-hidden">
                <div className="aspect-square bg-muted/50 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-[12px] font-medium text-foreground mb-1">{product.name}</p>
                  <p className="text-[11px] text-primary font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Preview with Image */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-[18px] font-semibold text-foreground mb-4">Предпросмотр</h2>
        {previewContent ? (
          <div className="rounded-lg bg-background border border-border overflow-hidden">
            {previewImage && (
              <div className="w-full h-48 bg-muted/50 overflow-hidden">
                <img 
                  src={previewImage} 
                  alt={previewTitle}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-4">
              <p className="text-[13px] font-medium text-foreground mb-2">{previewTitle}</p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{previewContent}</p>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-lg bg-muted/50 border border-border text-center">
            <p className="text-[13px] text-muted-foreground">Ожидание контента...</p>
          </div>
        )}
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
          disabled={!isComplete}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] font-semibold transition-all ${
            isComplete
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          Продолжить
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
