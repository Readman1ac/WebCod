'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Globe, Box } from 'lucide-react';
import Modal from '@/components/ui/Modal';

export default function ProjectsHeader() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-6 lg:px-8 xl:px-10 2xl:px-12 py-5 border-b border-border">
        <div>
          <h1 className="text-[22px] font-semibold text-foreground">Projects</h1>
          <p className="text-[13px] text-muted-foreground mt-0.5">
            12 projects · 7 active · 3 export ready
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-[13px] font-semibold hover:bg-primary/90 active:scale-95 transition-all duration-150"
        >
          <Plus size={15} />
          New Project
        </button>
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)} title="Create New Project">
        <div className="space-y-3">
          <p className="text-[13px] text-muted-foreground mb-4">
            Choose a project type to get started.
          </p>
          <button
            onClick={() => { setShowModal(false); router?.push('/web-studio'); }}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-150 active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
              <Globe size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-[14px] font-semibold text-foreground">Web Project</p>
              <p className="text-[12px] text-muted-foreground">Brief → Design → Generate → Export</p>
            </div>
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-muted/20 border border-border hover:bg-blue-500/5 hover:border-blue-500/20 transition-all duration-150 active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <Box size={18} className="text-blue-400" />
            </div>
            <div className="text-left">
              <p className="text-[14px] font-semibold text-foreground">3D Project</p>
              <p className="text-[12px] text-muted-foreground">Reference → Analyze → Generate .blend</p>
            </div>
          </button>
        </div>
      </Modal>
    </>
  );
}
