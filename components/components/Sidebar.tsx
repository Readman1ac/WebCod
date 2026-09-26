'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import {
  LayoutDashboard,
  FolderOpen,
  Globe,
  Box,
  FlaskConical,
  PackageOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  Shield,
  Cpu,
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navGroups = [
  {
    label: 'Рабочее пространство',
    items: [
      { label: 'Панель управления', icon: LayoutDashboard, href: '/' },
      { label: 'Проекты', icon: FolderOpen, href: '/projects' },
    ],
  },
  {
    label: 'Студии',
    items: [
      { label: 'Web Studio', icon: Globe, href: '/web-studio' },
      { label: '3D Studio', icon: Box, href: '/3d-studio', disabled: true },
    ],
  },
  {
    label: 'Публикация',
    items: [
      { label: 'Тесты', icon: FlaskConical, href: '/test', disabled: true },
      { label: 'Экспорт', icon: PackageOpen, href: '/export', disabled: true },
    ],
  },
];

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className="sidebar-transition relative flex min-h-screen flex-shrink-0 flex-col border-r border-border bg-sidebar"
      style={{ width: collapsed ? 64 : 240 }}
    >
      <div className="flex min-h-[64px] items-center gap-3 border-b border-border px-4 py-4">
        <div className="flex-shrink-0">
          <AppLogo size={32} />
        </div>

        {!collapsed && (
          <span className="truncate text-[15px] font-semibold tracking-tight text-foreground">
            Local AI Studio
          </span>
        )}
      </div>

      <div
        className={`flex items-center gap-2 border-b border-border px-4 py-3 ${
          collapsed ? 'justify-center' : ''
        }`}
        title="Ollama: Connected"
      >
        <div className="relative flex-shrink-0">
          <Cpu size={16} className="text-success" />
          <span className="pulse-dot absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-success" />
        </div>

        {!collapsed && (
          <div className="flex min-w-0 flex-col">
            <span className="text-[11px] font-medium leading-tight text-success">
              Ollama подключён
            </span>
            <span className="truncate text-[10px] text-muted-foreground">
              llama3.2 · 3 модели
            </span>
          </div>
        )}
      </div>

      <nav className="scrollbar-thin flex-1 overflow-y-auto py-3">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-4">
            {!collapsed && (
              <p className="mb-1 px-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {group.label}
              </p>
            )}

            {group.items.map((item) => {
              const isActive = pathname === item.href;
              const isDisabled = item.disabled === true;

              return (
                <Link
                  key={item.href}
                  href={isDisabled ? '#' : item.href}
                  aria-disabled={isDisabled}
                  title={collapsed ? item.label : undefined}
                  onClick={isDisabled ? (event) => event.preventDefault() : undefined}
                  className={[
                    'mx-2 flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium transition-all duration-150',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : isDisabled
                        ? 'pointer-events-none cursor-not-allowed text-muted-foreground/40'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                    collapsed ? 'justify-center' : '',
                  ].join(' ')}
                >
                  <item.icon size={16} className="flex-shrink-0" />
                  {!collapsed && <span className="truncate">{item.label}</span>}

                  {!collapsed && isDisabled && (
                    <span className="ml-auto rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                      Скоро
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="border-t border-border">
        <div
          className={`flex items-center gap-2 px-4 py-3 ${
            collapsed ? 'justify-center' : ''
          }`}
          title="100% Local — No Cloud"
        >
          <Shield size={14} className="flex-shrink-0 text-success" />
          {!collapsed && (
            <span className="text-[11px] font-medium text-success">
              100% Локально · Без облака
            </span>
          )}
        </div>

        <Link
          href="/settings"
          title={collapsed ? 'Настройки' : undefined}
          className={[
            'mx-2 mb-2 flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium transition-all duration-150',
            pathname === '/settings'
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
            collapsed ? 'justify-center' : '',
          ].join(' ')}
        >
          <Settings size={16} />
          {!collapsed && <span>Настройки</span>}
        </Link>

        <button
          type="button"
          onClick={onToggle}
          className={[
            'mx-2 mb-3 flex w-[calc(100%-16px)] items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium text-muted-foreground transition-all duration-150 hover:bg-muted/50 hover:text-foreground',
            collapsed ? 'justify-center' : '',
          ].join(' ')}
          aria-label={collapsed ? 'Развернуть боковую панель' : 'Свернуть боковую панель'}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          {!collapsed && <span>Свернуть</span>}
        </button>
      </div>
    </aside>
  );
}