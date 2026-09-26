export interface Template {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: 'landing' | 'business' | 'ecommerce' | 'portfolio';
  pages: string[];
  features: string[];
  previewImage: string;
}

export const templates: Template[] = [
  {
    id: 'landing',
    name: 'Landing Page',
    icon: '🎯',
    description: 'Одностраничный сайт для быстрого запуска',
    category: 'landing',
    pages: ['home'],
    features: ['Hero секция', 'Преимущества', 'CTA', 'Контакты'],
    previewImage: '/templates/landing/preview.png',
  },
  {
    id: 'fitness',
    name: 'Фитнес-клуб',
    icon: '💪',
    description: 'Сайт для спортзала или фитнес-центра',
    category: 'business',
    pages: ['home', 'programs', 'trainers', 'pricing', 'contacts'],
    features: ['Расписание', 'Тренеры', 'Цены', 'Галерея', 'Форма записи'],
    previewImage: '/templates/fitness/preview.png',
  },
  {
    id: 'restaurant',
    name: 'Ресторан',
    icon: '🍽️',
    description: 'Сайт ресторана или кафе',
    category: 'business',
    pages: ['home', 'menu', 'about', 'gallery', 'reservation', 'contacts'],
    features: ['Меню', 'Бронирование', 'Галерея', 'Отзывы'],
    previewImage: '/templates/restaurant/preview.png',
  },
  {
    id: 'portfolio',
    name: 'Портфолио',
    icon: '🎨',
    description: 'Персональное портфолио специалиста',
    category: 'portfolio',
    pages: ['home', 'projects', 'about', 'contact'],
    features: ['Галерея работ', 'Обо мне', 'Услуги', 'Контакты'],
    previewImage: '/templates/portfolio/preview.png',
  },
  {
    id: 'agency',
    name: 'Агентство',
    icon: '🏢',
    description: 'Сайт веб-студии или агентства',
    category: 'business',
    pages: ['home', 'services', 'portfolio', 'team', 'blog', 'contacts'],
    features: ['Услуги', 'Портфолио', 'Команда', 'Блог', 'Кейсы'],
    previewImage: '/templates/agency/preview.png',
  },
  {
    id: 'ecommerce',
    name: 'Интернет-магазин',
    icon: '🛒',
    description: 'Каталог товаров с корзиной',
    category: 'ecommerce',
    pages: ['home', 'catalog', 'product', 'cart', 'checkout', 'contacts'],
    features: ['Каталог', 'Карточка товара', 'Корзина', 'Оформление заказа'],
    previewImage: '/templates/ecommerce/preview.png',
  },
];

export function getTemplateById(id: string): Template | undefined {
  return templates.find(t => t.id === id);
}
