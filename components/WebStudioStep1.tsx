'use client';

import React, { useState } from 'react';
import { Globe, Sparkles, ChevronRight, Upload, Image, Link } from 'lucide-react';

interface WebStudioStep1Props {
  onNext: () => void;
}

const styles = [
  { id: 'modern', name: 'Современный', desc: 'Чёткие линии, смелая типографика', colors: ['#3b82f6', '#1e40af', '#ffffff', '#f8fafc'] },
  { id: 'classic', name: 'Классика', desc: 'Элегантный, вне времени', colors: ['#1a365d', '#2c5282', '#f7fafc', '#e2e8f0'] },
  { id: 'bold', name: 'Яркий', desc: 'Сочный, привлекающий внимание', colors: ['#dc2626', '#7f1d1d', '#fef2f2', '#1a1a2e'] },
  { id: 'minimal', name: 'Минимализм', desc: 'Простой и чистый', colors: ['#000000', '#333333', '#ffffff', '#f5f5f5'] },
  { id: 'creative', name: 'Креатив', desc: 'Художественный и уникальный', colors: ['#7c3aed', '#5b21b6', '#f5f3ff', '#1e1b4b'] },
];

const colorPalettes = [
  { id: 'ocean', name: 'Океан', colors: ['#0077b6', '#00b4d8', '#90e0ef', '#caf0f8'] },
  { id: 'sunset', name: 'Закат', colors: ['#f72585', '#b5179e', '#7209b7', '#560bad'] },
  { id: 'forest', name: 'Лес', colors: ['#2d6a4f', '#40916c', '#74c69d', '#d8f3dc'] },
  { id: 'earth', name: 'Земля', colors: ['#606c38', '#283618', '#fefae0', '#dda15e'] },
  { id: 'monochrome', name: 'Монохром', colors: ['#000000', '#333333', '#666666', '#cccccc'] },
  { id: 'pastel', name: 'Пастель', colors: ['#ffb5e8', '#b5deff', '#dcf6e4', '#fff5ba'] },
  { id: 'neon', name: 'Неон', colors: ['#ff00ff', '#00ffff', '#ff00aa', '#00ff00'] },
  { id: 'warm', name: 'Тёплый', colors: ['#ff6b35', '#f7c59f', '#2ec4b6', '#011627'] },
  { id: 'cool', name: 'Холодный', colors: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261'] },
  { id: 'royal', name: 'Королевский', colors: ['#1a1a2e', '#16213e', '#0f3460', '#e94560'] },
];

const fonts = [
  { id: 'inter', name: 'Inter', desc: 'Современный гротеск', preview: 'Aa Bb Cc 123' },
  { id: 'roboto', name: 'Roboto', desc: 'Универсальный шрифт', preview: 'Aa Bb Cc 123' },
  { id: 'montserrat', name: 'Montserrat', desc: 'Геометричный гротеск', preview: 'Aa Bb Cc 123' },
  { id: 'opensans', name: 'Open Sans', desc: 'Дружелюбный и читаемый', preview: 'Aa Bb Cc 123' },
  { id: 'lato', name: 'Lato', desc: 'Тёплый и стабильный', preview: 'Aa Bb Cc 123' },
  { id: 'georgia', name: 'Georgia', desc: 'Классический с засечками', preview: 'Aa Bb Cc 123' },
  { id: 'times', name: 'Times New Roman', desc: 'Традиционный академический', preview: 'Aa Bb Cc 123' },
  { id: 'playfair', name: 'Playfair Display', desc: 'Элегантный заголовочный', preview: 'Aa Bb Cc 123' },
  { id: 'merriweather', name: 'Merriweather', desc: 'Литературный с засечками', preview: 'Aa Bb Cc 123' },
  { id: 'firamono', name: 'Fira Code', desc: 'Моноширинный для кода', preview: 'Aa Bb Cc 123' },
  { id: 'sourcecode', name: 'Source Code Pro', desc: 'Профессиональный моноширинный', preview: 'Aa Bb Cc 123' },
  { id: 'oswald', name: 'Oswald', desc: 'Узкий и выразительный', preview: 'Aa Bb Cc 123' },
  { id: 'raleway', name: 'Raleway', desc: 'Утончённый гротеск', preview: 'Aa Bb Cc 123' },
  { id: 'poppins', name: 'Poppins', desc: 'Геометричный и современный', preview: 'Aa Bb Cc 123' },
  { id: 'nunito', name: 'Nunito', desc: 'Округлый и мягкий', preview: 'Aa Bb Cc 123' },
];

const stylePreviews: Record<string, string> = {
  modern: `
    <div style="font-family: 'Inter', -apple-system, sans-serif; background: #fff;">
      <div style="background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); padding: 24px; border-radius: 16px; color: white;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <div style="font-size: 16px; font-weight: 700;">Бренд</div>
          <div style="display: flex; gap: 12px; font-size: 12px; font-weight: 500;">
            <span>Главная</span><span>О нас</span><span>Контакты</span>
          </div>
        </div>
        <h2 style="font-size: 22px; font-weight: 700; margin-bottom: 8px;">Современный дизайн</h2>
        <p style="font-size: 13px; opacity: 0.9; margin-bottom: 16px;">Чёткие линии, смелая типографика и плавные градиенты</p>
        <button style="background: white; color: #3b82f6; border: none; padding: 10px 20px; border-radius: 10px; font-weight: 600; font-size: 13px; cursor: pointer;">Начать →</button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 16px;">
        <div style="background: #f8fafc; padding: 16px 12px; border-radius: 12px; text-align: center;">
          <div style="font-size: 24px; margin-bottom: 6px;">⚡</div>
          <div style="font-size: 11px; font-weight: 600; color: #1e293b;">Быстро</div>
        </div>
        <div style="background: #f8fafc; padding: 16px 12px; border-radius: 12px; text-align: center;">
          <div style="font-size: 24px; margin-bottom: 6px;">🎨</div>
          <div style="font-size: 11px; font-weight: 600; color: #1e293b;">Красиво</div>
        </div>
        <div style="background: #f8fafc; padding: 16px 12px; border-radius: 12px; text-align: center;">
          <div style="font-size: 24px; margin-bottom: 6px;">📱</div>
          <div style="font-size: 11px; font-weight: 600; color: #1e293b;">Адаптивно</div>
        </div>
      </div>
    </div>
  `,
  classic: `
    <div style="font-family: 'Georgia', 'Times New Roman', serif; background: #fefefe;">
      <div style="border: 3px double #1a365d; padding: 24px; background: linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%);">
        <div style="text-align: center; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #e2e8f0;">
          <div style="font-size: 18px; font-weight: 600; color: #1a365d; letter-spacing: 1px; text-transform: uppercase;">Основано в 2026</div>
        </div>
        <h2 style="font-size: 20px; font-weight: 600; color: #1a365d; margin-bottom: 12px; font-style: italic;">Классическая элегантность</h2>
        <p style="font-size: 13px; color: #4a5568; line-height: 1.7; margin-bottom: 20px;">Вне времени дизайн с утончённой эстетикой и традиционными ценностями</p>
        <button style="background: #2c5282; color: white; border: none; padding: 10px 24px; font-weight: 600; font-size: 13px; letter-spacing: 0.5px; cursor: pointer; border-radius: 2px;">Узнать больше</button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 16px;">
        <div style="border: 1px solid #e2e8f0; padding: 16px 12px; text-align: center; background: white;">
          <div style="font-size: 22px; margin-bottom: 6px;">🏛️</div>
          <div style="font-size: 10px; color: #4a5568; text-transform: uppercase; letter-spacing: 0.5px;">Наследие</div>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 16px 12px; text-align: center; background: white;">
          <div style="font-size: 22px; margin-bottom: 6px;">📚</div>
          <div style="font-size: 10px; color: #4a5568; text-transform: uppercase; letter-spacing: 0.5px;">Знания</div>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 16px 12px; text-align: center; background: white;">
          <div style="font-size: 22px; margin-bottom: 6px;">✨</div>
          <div style="font-size: 10px; color: #4a5568; text-transform: uppercase; letter-spacing: 0.5px;">Превосходство</div>
        </div>
      </div>
    </div>
  `,
  bold: `
    <div style="font-family: 'Oswald', 'Impact', sans-serif; background: #fff;">
      <div style="background: #dc2626; padding: 24px; clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <div style="font-size: 18px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">BOLD™</div>
          <div style="display: flex; gap: 16px; font-size: 11px; font-weight: 700; text-transform: uppercase;">
            <span>Главная</span><span>Работы</span><span>Контакты</span>
          </div>
        </div>
        <h2 style="font-size: 26px; font-weight: 800; text-transform: uppercase; margin-bottom: 8px; line-height: 1.1;">Произведи впечатление</h2>
        <p style="font-size: 13px; opacity: 0.95; margin-bottom: 20px; font-weight: 500;">Выделяйся. Будь смелым. Будь замеченным.</p>
        <button style="background: #7f1d1d; color: white; border: none; padding: 12px 28px; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; clip-path: polygon(5% 0, 100% 0, 95% 100%, 0% 100%);">Действовать ⚡</button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 16px;">
        <div style="background: #fef2f2; padding: 16px 12px; text-align: center; border-left: 3px solid #dc2626;">
          <div style="font-size: 26px; margin-bottom: 6px;">🔥</div>
          <div style="font-size: 11px; font-weight: 700; color: #7f1d1d; text-transform: uppercase;">Мощь</div>
        </div>
        <div style="background: #fef2f2; padding: 16px 12px; text-align: center; border-left: 3px solid #dc2626;">
          <div style="font-size: 26px; margin-bottom: 6px;">⚡</div>
          <div style="font-size: 11px; font-weight: 700; color: #7f1d1d; text-transform: uppercase;">Энергия</div>
        </div>
        <div style="background: #fef2f2; padding: 16px 12px; text-align: center; border-left: 3px solid #dc2626;">
          <div style="font-size: 26px; margin-bottom: 6px;">💪</div>
          <div style="font-size: 11px; font-weight: 700; color: #7f1d1d; text-transform: uppercase;">Сила</div>
        </div>
      </div>
    </div>
  `,
  minimal: `
    <div style="font-family: 'Helvetica Neue', 'Arial', sans-serif; background: #f5f5f5;">
      <div style="padding: 32px 24px; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 1px solid #f0f0f0;">
          <div style="font-size: 14px; font-weight: 500; letter-spacing: -0.5px; color: #1a1a1a;">студия</div>
          <div style="display: flex; gap: 24px; font-size: 11px; font-weight: 400;">
            <span style="color: #1a1a1a; font-weight: 500;">Работы</span><span style="color: #666;">Студия</span><span style="color: #666;">О нас</span>
          </div>
        </div>
        <h2 style="font-size: 18px; font-weight: 400; margin-bottom: 12px; letter-spacing: -0.5px; color: #1a1a1a;">Минимализм</h2>
        <p style="font-size: 13px; color: #555; line-height: 1.8; margin-bottom: 24px;">Меньше — значит больше. Фокус на том, что действительно важно — контенте.</p>
        <button style="background: #1a1a1a; color: #fff; border: none; padding: 10px 24px; font-weight: 400; font-size: 12px; letter-spacing: 0.5px; cursor: pointer; border-radius: 4px;">Исследовать →</button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 16px;">
        <div style="padding: 20px 12px; text-align: center; background: #fff; border: 1px solid #e8e8e8; border-radius: 6px;">
          <div style="font-size: 18px; color: #1a1a1a; margin-bottom: 8px; font-weight: 300;">•</div>
          <div style="font-size: 10px; color: #666;">Просто</div>
        </div>
        <div style="padding: 20px 12px; text-align: center; background: #fff; border: 1px solid #e8e8e8; border-radius: 6px;">
          <div style="font-size: 18px; color: #1a1a1a; margin-bottom: 8px; font-weight: 300;">•</div>
          <div style="font-size: 10px; color: #666;">Чисто</div>
        </div>
        <div style="padding: 20px 12px; text-align: center; background: #fff; border: 1px solid #e8e8e8; border-radius: 6px;">
          <div style="font-size: 18px; color: #1a1a1a; margin-bottom: 8px; font-weight: 300;">•</div>
          <div style="font-size: 10px; color: #666;">Ясно</div>
        </div>
      </div>
    </div>
  `,
  creative: `
    <div style="font-family: 'Playfair Display', 'Georgia', serif; background: #fff;">
      <div style="background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%); padding: 24px; border-radius: 24px; color: white; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
        <div style="position: absolute; bottom: -30px; left: -30px; width: 150px; height: 150px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
        <div style="position: relative; z-index: 1;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <div style="font-size: 16px; font-weight: 600; font-style: italic;">Арт</div>
            <div style="display: flex; gap: 16px; font-size: 11px; font-weight: 500;">
              <span>Галерея</span><span>Студия</span><span>Контакты</span>
            </div>
          </div>
          <h2 style="font-size: 22px; font-weight: 600; margin-bottom: 8px; font-style: italic;">Креативное видение</h2>
          <p style="font-size: 13px; opacity: 0.9; margin-bottom: 20px; line-height: 1.6;">Где искусство встречает функциональность. Каждый пиксель рассказывает историю.</p>
          <button style="background: white; color: #7c3aed; border: none; padding: 12px 24px; border-radius: 20px; font-weight: 600; font-size: 13px; font-style: italic; cursor: pointer; box-shadow: 0 8px 24px rgba(0,0,0,0.15);">Открыть ✨</button>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 16px;">
        <div style="background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%); padding: 16px 12px; border-radius: 16px; text-align: center; border: 1px solid #e9d5ff;">
          <div style="font-size: 24px; margin-bottom: 6px;">🎨</div>
          <div style="font-size: 10px; font-weight: 500; color: #5b21b6; font-style: italic;">Искусство</div>
        </div>
        <div style="background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%); padding: 16px 12px; border-radius: 16px; text-align: center; border: 1px solid #e9d5ff;">
          <div style="font-size: 24px; margin-bottom: 6px;">✨</div>
          <div style="font-size: 10px; font-weight: 500; color: #5b21b6; font-style: italic;">Магия</div>
        </div>
        <div style="background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%); padding: 16px 12px; border-radius: 16px; text-align: center; border: 1px solid #e9d5ff;">
          <div style="font-size: 24px; margin-bottom: 6px;">🌟</div>
          <div style="font-size: 10px; font-weight: 500; color: #5b21b6; font-style: italic;">Уникальность</div>
        </div>
      </div>
    </div>
  `,
};

const fontPreviews: Record<string, string> = {
  inter: `
    <div style="font-family: 'Inter', -apple-system, sans-serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">Заголовок</h3>
      <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin-bottom: 14px;">Современный гротеск для веб-интерфейсов. Отлично читается на любых экранах.</p>
      <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
        <span style="font-weight: 700;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-weight: 300;">Тонкий</span>
      </div>
      <button style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 14px; margin-top: 16px;">Кнопка</button>
    </div>
  `,
  roboto: `
    <div style="font-family: 'Roboto', sans-serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">Заголовок</h3>
      <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin-bottom: 14px;">Универсальный шрифт от Google. Подходит для любых задач.</p>
      <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
        <span style="font-weight: 700;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-weight: 300;">Тонкий</span>
      </div>
      <button style="background: #1976d2; color: white; border: none; padding: 10px 20px; border-radius: 4px; font-weight: 500; font-size: 14px; margin-top: 16px;">Кнопка</button>
    </div>
  `,
  montserrat: `
    <div style="font-family: 'Montserrat', sans-serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">Заголовок</h3>
      <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin-bottom: 14px;">Геометричный гротеск с характером. Для стильных проектов.</p>
      <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
        <span style="font-weight: 700;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-weight: 300;">Тонкий</span>
      </div>
      <button style="background: #000; color: white; border: none; padding: 10px 20px; font-weight: 600; font-size: 14px; margin-top: 16px;">Кнопка</button>
    </div>
  `,
  opensans: `
    <div style="font-family: 'Open Sans', sans-serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">Заголовок</h3>
      <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin-bottom: 14px;">Дружелюбный и читаемый шрифт. Оптимален для длинных текстов.</p>
      <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
        <span style="font-weight: 700;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-weight: 300;">Тонкий</span>
      </div>
      <button style="background: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 14px; margin-top: 16px;">Кнопка</button>
    </div>
  `,
  lato: `
    <div style="font-family: 'Lato', sans-serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">Заголовок</h3>
      <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin-bottom: 14px;">Тёплый и стабильный шрифт. Баланс между серьёзностью и дружелюбием.</p>
      <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
        <span style="font-weight: 700;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-weight: 300;">Тонкий</span>
      </div>
      <button style="background: #059669; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-weight: 700; font-size: 14px; margin-top: 16px;">Кнопка</button>
    </div>
  `,
  georgia: `
    <div style="font-family: 'Georgia', serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">Заголовок</h3>
      <p style="font-size: 15px; color: #4a4a4a; line-height: 1.7; margin-bottom: 14px;">Классический шрифт с засечками. Для традиционных и академических проектов.</p>
      <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
        <span style="font-weight: 700;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-style: italic;">Курсив</span>
      </div>
      <button style="background: #7c2d12; color: white; border: none; padding: 10px 20px; font-weight: 600; font-size: 14px; margin-top: 16px;">Кнопка</button>
    </div>
  `,
  times: `
    <div style="font-family: 'Times New Roman', serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">Заголовок</h3>
      <p style="font-size: 15px; color: #4a4a4a; line-height: 1.7; margin-bottom: 14px;">Традиционный академический шрифт. Символ надёжности и авторитета.</p>
      <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
        <span style="font-weight: 700;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-style: italic;">Курсив</span>
      </div>
      <button style="background: #1e3a5f; color: white; border: none; padding: 10px 20px; font-weight: 600; font-size: 14px; margin-top: 16px;">Кнопка</button>
    </div>
  `,
  playfair: `
    <div style="font-family: 'Playfair Display', serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 24px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px; font-style: italic;">Заголовок</h3>
      <p style="font-size: 15px; color: #4a4a4a; line-height: 1.7; margin-bottom: 14px;">Элегантный заголовочный шрифт. Для моды, искусства и люксовых брендов.</p>
      <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
        <span style="font-weight: 700;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-style: italic;">Курсив</span>
      </div>
      <button style="background: #7c3aed; color: white; border: none; padding: 10px 20px; border-radius: 20px; font-weight: 600; font-size: 14px; margin-top: 16px;">Кнопка</button>
    </div>
  `,
  merriweather: `
    <div style="font-family: 'Merriweather', serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">Заголовок</h3>
      <p style="font-size: 15px; color: #4a4a4a; line-height: 1.8; margin-bottom: 14px;">Литературный шрифт с засечками. Идеален для блогов и статей.</p>
      <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
        <span style="font-weight: 700;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-style: italic;">Курсив</span>
      </div>
      <button style="background: #0369a1; color: white; border: none; padding: 10px 20px; border-radius: 4px; font-weight: 700; font-size: 14px; margin-top: 16px;">Кнопка</button>
    </div>
  `,
  firamono: `
    <div style="font-family: 'Fira Code', 'Courier New', monospace; background: #fff; padding: 20px;">
      <h3 style="font-size: 18px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">function hello() &#123;</h3>
      <p style="font-size: 14px; color: #4a4a4a; line-height: 1.6; margin-bottom: 14px;">Моноширинный шрифт для кода. Ligatures поддерживаются.</p>
      <div style="display: flex; gap: 12px; font-size: 13px; color: #666;">
        <span>const x = 42</span>
        <span>let y = "text"</span>
      </div>
      <button style="background: #374151; color: white; border: none; padding: 10px 20px; font-weight: 500; font-size: 13px; margin-top: 16px;">console.log()</button>
    </div>
  `,
  sourcecode: `
    <div style="font-family: 'Source Code Pro', 'Courier New', monospace; background: #fff; padding: 20px;">
      <h3 style="font-size: 18px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">import React</h3>
      <p style="font-size: 14px; color: #4a4a4a; line-height: 1.6; margin-bottom: 14px;">Профессиональный моноширинный шрифт от Adobe.</p>
      <div style="display: flex; gap: 12px; font-size: 13px; color: #666;">
        <span>const App = ()</span>
        <span>return &lt;div&gt;</span>
      </div>
      <button style="background: #0f172a; color: white; border: none; padding: 10px 20px; font-weight: 600; font-size: 13px; margin-top: 16px;">{'<Component />'}</button>
    </div>
  `,
  oswald: `
    <div style="font-family: 'Oswald', sans-serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 24px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px; text-transform: uppercase;">Заголовок</h3>
      <p style="font-size: 14px; color: #4a4a4a; line-height: 1.6; margin-bottom: 14px; text-transform: uppercase;">Узкий и выразительный. Для заголовков и акцентов.</p>
      <div style="display: flex; gap: 12px; font-size: 13px; color: #666; text-transform: uppercase;">
        <span style="font-weight: 700;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-weight: 300;">Тонкий</span>
      </div>
      <button style="background: #dc2626; color: white; border: none; padding: 12px 24px; font-weight: 700; font-size: 13px; margin-top: 16px; text-transform: uppercase;">Кнопка</button>
    </div>
  `,
  raleway: `
    <div style="font-family: 'Raleway', sans-serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">Заголовок</h3>
      <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin-bottom: 14px;">Утончённый гротеск с элегантными пропорциями.</p>
      <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
        <span style="font-weight: 700;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-weight: 200;">Тонкий</span>
      </div>
      <button style="background: #0891b2; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 14px; margin-top: 16px;">Кнопка</button>
    </div>
  `,
  poppins: `
    <div style="font-family: 'Poppins', sans-serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px;">Заголовок</h3>
      <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin-bottom: 14px;">Геометричный и современный. Для стартапов и технологичных проектов.</p>
      <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
        <span style="font-weight: 700;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-weight: 300;">Тонкий</span>
      </div>
      <button style="background: #7c3aed; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 14px; margin-top: 16px;">Кнопка</button>
    </div>
  `,
  nunito: `
    <div style="font-family: 'Nunito', sans-serif; background: #fff; padding: 20px;">
      <h3 style="font-size: 22px; font-weight: 800; color: #1a1a1a; margin-bottom: 10px;">Заголовок</h3>
      <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin-bottom: 14px;">Округлый и мягкий шрифт. Дружелюбный и современный.</p>
      <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
        <span style="font-weight: 800;">Жирный</span>
        <span style="font-weight: 400;">Обычный</span>
        <span style="font-weight: 300;">Тонкий</span>
      </div>
      <button style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 12px; font-weight: 700; font-size: 14px; margin-top: 16px;">Кнопка</button>
    </div>
  `,
};

export default function WebStudioStep1({ onNext }: WebStudioStep1Props) {
  const [formData, setFormData] = useState({
    projectName: '',
    siteType: 'Сайт агентства',
    description: '',
    style: 'modern',
    colorPalette: 'ocean',
    fonts: 'inter',
    additionalNotes: '',
    autoGenerateContent: true,
    seoOptimization: false,
    responsiveDesign: true,
  });

  const [hoveredStyle, setHoveredStyle] = useState<string | null>(null);
  const [hoveredFont, setHoveredFont] = useState<string | null>(null);

  const handleGenerate = () => {
    const selectedStyle = styles.find(s => s.id === formData.style);
    const selectedPalette = colorPalettes.find(p => p.id === formData.colorPalette);
    const selectedFont = fonts.find(f => f.id === formData.fonts);
    
    const step1Data = {
      plan: `${formData.siteType}: ${formData.description}`,
      requirements: formData.additionalNotes,
      settings: {
        projectName: formData.projectName || 'My Project',
        siteType: formData.siteType,
        style: formData.style,
        colors: { primary: selectedPalette?.colors[0] || '#3b82f6', palette: selectedPalette?.colors || [] },
        fonts: { primary: selectedFont?.name || 'Inter' },
        features: {
          autoGenerateContent: formData.autoGenerateContent,
          seoOptimization: formData.seoOptimization,
          responsiveDesign: formData.responsiveDesign,
        },
      },
    };
    
    localStorage.setItem('webStudioStep1', JSON.stringify(step1Data));
    onNext();
  };

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Globe size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-[24px] font-bold text-foreground">Web Studio</h1>
            <p className="text-[14px] text-muted-foreground">Шаг 1 из 9 · Ввод данных</p>
          </div>
        </div>
        <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: '11%' }} />
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-[18px] font-semibold text-foreground mb-4">Основная информация</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[13px] font-medium text-foreground mb-1.5">Название проекта</label>
            <input
              type="text"
              value={formData.projectName}
              onChange={(e) => updateField('projectName', e.target.value)}
              placeholder="Например: Hartmann & Co."
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-foreground mb-1.5">Тип сайта</label>
            <select 
              value={formData.siteType}
              onChange={(e) => updateField('siteType', e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            >
              <option>Сайт агентства</option>
              <option>Портфолио</option>
              <option>Интернет-магазин</option>
              <option>Блог</option>
              <option>Лендинг</option>
              <option>Корпоративный сайт</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[13px] font-medium text-foreground mb-1.5">Описание проекта</label>
          <textarea
            value={formData.description}
            onChange={(e) => updateField('description', e.target.value)}
            placeholder="Опишите концепцию, целевую аудиторию, ключевые особенности..."
            rows={3}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-[13px] font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
          />
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-[18px] font-semibold text-foreground mb-4">Стиль дизайна</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {styles.map((style) => (
            <div key={style.id} className="relative">
              <button
                type="button"
                onClick={() => updateField('style', style.id)}
                onMouseEnter={() => setHoveredStyle(style.id)}
                onMouseLeave={() => setHoveredStyle(null)}
                className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                  formData.style === style.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background hover:border-primary/30'
                }`}
              >
                <div className="flex gap-1 mb-2">
                  {style.colors.slice(0, 4).map((color, i) => (
                    <div key={i} className="w-4 h-4 rounded-full" style={{ background: color }} />
                  ))}
                </div>
                <p className="text-[13px] font-semibold text-foreground">{style.name}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{style.desc}</p>
              </button>
              
              {hoveredStyle === style.id && (
                <div className="absolute top-full left-0 mt-2 p-4 bg-card border border-border rounded-xl shadow-2xl z-50 w-80">
                  <p className="text-[12px] font-semibold text-foreground mb-3">Превью: {style.name}</p>
                  <div 
                    className="border border-border rounded-lg overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: stylePreviews[style.id] }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <label className="block text-[13px] font-medium text-foreground mb-1.5">Цветовая палитра</label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {colorPalettes.map((palette) => (
            <button
              key={palette.id}
              type="button"
              onClick={() => updateField('colorPalette', palette.id)}
              className={`p-2 rounded-lg border-2 transition-all ${
                formData.colorPalette === palette.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-background hover:border-primary/30'
              }`}
            >
              <div className="flex gap-0.5 mb-1">
                {palette.colors.map((color, i) => (
                  <div key={i} className="w-full h-6 rounded" style={{ background: color }} />
                ))}
              </div>
              <p className="text-[11px] font-medium text-foreground text-center">{palette.name}</p>
            </button>
          ))}
        </div>

        <div className="mt-6">
          <label className="block text-[13px] font-medium text-foreground mb-1.5">Шрифты</label>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {fonts.map((font) => (
              <div key={font.id} className="relative">
                <button
                  type="button"
                  onClick={() => updateField('fonts', font.id)}
                  onMouseEnter={() => setHoveredFont(font.id)}
                  onMouseLeave={() => setHoveredFont(null)}
                  className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                    formData.fonts === font.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-background hover:border-primary/30'
                  }`}
                >
                  <p className="text-[13px] font-semibold text-foreground">{font.name}</p>
                  <p className="text-[9px] text-muted-foreground mt-1 truncate">{font.desc}</p>
                </button>
                
                {hoveredFont === font.id && (
                  <div className="absolute top-full left-0 mt-2 p-4 bg-card border border-border rounded-xl shadow-2xl z-50 w-80">
                    <p className="text-[12px] font-semibold text-foreground mb-3">Превью: {font.name}</p>
                    <div 
                      className="border border-border rounded-lg overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: fontPreviews[font.id] }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <h2 className="text-[18px] font-semibold text-foreground mb-4">Настройки контента</h2>

        <div className="space-y-3 mb-4">
          <label className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border cursor-pointer hover:border-primary/30 transition-all">
            <input
              type="checkbox"
              checked={formData.autoGenerateContent}
              onChange={(e) => updateField('autoGenerateContent', e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
            />
            <div>
              <p className="text-[13px] font-medium text-foreground">Генерировать текст автоматически</p>
              <p className="text-[11px] text-muted-foreground">AI создаст уникальный контент для всех разделов</p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border cursor-pointer hover:border-primary/30 transition-all">
            <input
              type="checkbox"
              checked={formData.seoOptimization}
              onChange={(e) => updateField('seoOptimization', e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
            />
            <div>
              <p className="text-[13px] font-medium text-foreground">Включить SEO-оптимизацию</p>
              <p className="text-[11px] text-muted-foreground">Мета-теги, заголовки, alt-тексты</p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border cursor-pointer hover:border-primary/30 transition-all">
            <input
              type="checkbox"
              checked={formData.responsiveDesign}
              onChange={(e) => updateField('responsiveDesign', e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
            />
            <div>
              <p className="text-[13px] font-medium text-foreground">Адаптивная вёрстка</p>
              <p className="text-[11px] text-muted-foreground">Mobile-first, responsive дизайн</p>
            </div>
          </label>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <button type="button" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-background border border-border text-[14px] font-medium text-foreground hover:bg-muted/50 transition-all">
          Сохранить черновик
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-[14px] font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          <Sparkles size={18} />
          Начать генерацию
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
