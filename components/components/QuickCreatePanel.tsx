'use client';

import React from 'react';
import { Globe, Box, ChevronRight } from 'lucide-react';

export default function QuickCreatePanel() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="mb-4 text-[18px] font-semibold text-foreground">Новый проект</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <button
          type="button"
          className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 text-left transition-all duration-200 hover:border-primary/50 hover:bg-primary/5"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
            <Globe size={22} className="text-primary" />
          </div>

          <div className="flex-1">
            <p className="text-[14px] font-semibold text-foreground">Web проект</p>
            <p className="text-[12px] text-muted-foreground">HTML · CSS · JS · React</p>
          </div>

          <ChevronRight size={18} className="text-muted-foreground transition-colors group-hover:text-primary" />
        </button>

        <button
          type="button"
          disabled
          className="flex cursor-not-allowed items-center gap-4 rounded-xl border border-border bg-background p-4 text-left opacity-50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/30">
            <Box size={22} className="text-muted-foreground" />
          </div>

          <div className="flex-1">
            <p className="text-[14px] font-semibold text-muted-foreground">3D проект</p>
            <p className="text-[12px] text-muted-foreground">Blender · GLTF · .blend</p>
          </div>

          <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
            Скоро
          </span>
        </button>
      </div>
    </div>
  );
}