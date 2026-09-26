'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search, Filter, Globe, Box, ArrowUpDown, ArrowUp, ArrowDown,
  FolderOpen, Copy, Archive, MoreHorizontal, Trash2, ChevronLeft, ChevronRight,
} from 'lucide-react';
import Badge from '@/components/ui/Badge';
import EmptyState from '@/components/ui/EmptyState';

type ProjectStatus = 'generating' | 'review' | 'export-ready' | 'draft' | 'testing' | 'delivered' | 'failed';
type ProjectType = 'web' | '3d';

interface Project {
  id: string;
  name: string;
  client: string;
  type: ProjectType;
  status: ProjectStatus;
  model: string;
  step: string;
  stepNum: number;
  fileSize: string;
  lastModified: string;
  created: string;
}

const projects: Project[] = [
  { id: 'proj-001', name: 'Hartmann & Co. Agency Site', client: 'ORD-2026-0847', type: 'web', status: 'generating', model: 'llama3.2', step: 'Generate', stepNum: 6, fileSize: '—', lastModified: '18 min ago', created: '12 Sep 2026' },
  { id: 'proj-002', name: 'Nakamura Studio Portfolio', client: 'ORD-2026-0831', type: 'web', status: 'review', model: 'codellama:13b', step: 'Preview', stepNum: 7, fileSize: '2.3 MB', lastModified: '2 hrs ago', created: '09 Sep 2026' },
  { id: 'proj-003', name: 'Osei Product 3D Render', client: 'ORD-2026-0819', type: '3d', status: 'export-ready', model: 'llava:7b', step: 'Export', stepNum: 9, fileSize: '12.4 MB', lastModified: '1 day ago', created: '05 Sep 2026' },
  { id: 'proj-004', name: 'Bergström E-commerce', client: 'ORD-2026-0802', type: 'web', status: 'draft', model: 'llama3.2', step: 'Brief', stepNum: 1, fileSize: '—', lastModified: '3 days ago', created: '28 Aug 2026' },
  { id: 'proj-005', name: 'Volkov Architecture Viz', client: 'ORD-2026-0791', type: '3d', status: 'testing', model: 'llava:7b', step: 'Test', stepNum: 8, fileSize: '34.1 MB', lastModified: '4 days ago', created: '25 Aug 2026' },
  { id: 'proj-006', name: 'Adeyemi Consulting Site', client: 'ORD-2026-0774', type: 'web', status: 'delivered', model: 'codellama:13b', step: 'Delivered', stepNum: 9, fileSize: '1.8 MB', lastModified: '6 days ago', created: '20 Aug 2026' },
  { id: 'proj-007', name: 'Lindqvist SaaS Landing', client: 'ORD-2026-0762', type: 'web', status: 'failed', model: 'llama3.2', step: 'Generate', stepNum: 6, fileSize: '—', lastModified: '1 week ago', created: '15 Aug 2026' },
  { id: 'proj-008', name: 'Patel Restaurant Brand', client: 'ORD-2026-0751', type: 'web', status: 'review', model: 'llama3.2', step: 'Design', stepNum: 4, fileSize: '—', lastModified: '1 week ago', created: '12 Aug 2026' },
  { id: 'proj-009', name: 'Kowalski Interior 3D', client: 'ORD-2026-0739', type: '3d', status: 'draft', model: 'llava:7b', step: 'Brief', stepNum: 1, fileSize: '—', lastModified: '2 weeks ago', created: '08 Aug 2026' },
  { id: 'proj-010', name: 'Fernandez Tech Blog', client: 'ORD-2026-0722', type: 'web', status: 'export-ready', model: 'codellama:13b', step: 'Export', stepNum: 9, fileSize: '0.9 MB', lastModified: '2 weeks ago', created: '03 Aug 2026' },
];

const statusConfig: Record<ProjectStatus, { variant: 'success' | 'error' | 'warning' | 'info' | 'muted' | 'primary' | 'generating'; label: string }> = {
  generating: { variant: 'generating', label: 'Generating' },
  review: { variant: 'warning', label: 'In Review' },
  'export-ready': { variant: 'success', label: 'Export Ready' },
  draft: { variant: 'muted', label: 'Draft' },
  testing: { variant: 'info', label: 'Testing' },
  delivered: { variant: 'success', label: 'Delivered' },
  failed: { variant: 'error', label: 'Failed' },
};

type SortField = 'name' | 'lastModified' | 'status' | 'stepNum';
type SortDir = 'asc' | 'desc';

export default function ProjectsTable() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'web' | '3d'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | ProjectStatus>('all');
  const [sortField, setSortField] = useState<SortField>('lastModified');
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);
  const [openActionMenu, setOpenActionMenu] = useState<string | null>(null);
  const perPage = 8;

  const filtered = projects.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.client.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === 'all' || p.type === typeFilter;
    const matchStatus = statusFilter === 'all' || p.status === statusFilter;
    return matchSearch && matchType && matchStatus;
  });

  const sorted = [...filtered].sort((a, b) => {
    let cmp = 0;
    if (sortField === 'name') cmp = a.name.localeCompare(b.name);
    else if (sortField === 'stepNum') cmp = a.stepNum - b.stepNum;
    else if (sortField === 'status') cmp = a.status.localeCompare(b.status);
    else cmp = 0;
    return sortDir === 'asc' ? cmp : -cmp;
  });

  const paginated = sorted.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(sorted.length / perPage);

  const toggleSort = (field: SortField) => {
    if (sortField === field) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else { setSortField(field); setSortDir('asc'); }
  };

  const toggleSelect = (id: string) => {
    setSelected((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allSelected = paginated.length > 0 && paginated.every((p) => selected.has(p.id));

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown size={12} className="text-muted-foreground/50" />;
    return sortDir === 'asc' ? <ArrowUp size={12} className="text-primary" /> : <ArrowDown size={12} className="text-primary" />;
  };

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-5">
        <div className="relative flex-1 min-w-0 max-w-sm">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects or order numbers..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-card border border-border text-[13px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Filter size={14} className="text-muted-foreground" />
          {/* Type filter */}
          <div className="flex rounded-lg border border-border overflow-hidden">
            {(['all', 'web', '3d'] as const).map((t) => (
              <button
                key={`type-filter-${t}`}
                onClick={() => { setTypeFilter(t); setPage(1); }}
                className={`px-3 py-1.5 text-[12px] font-medium transition-all duration-150 ${
                  typeFilter === t
                    ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
              >
                {t === 'all' ? 'All Types' : t === 'web' ? '🌐 Web' : '📦 3D'}
              </button>
            ))}
          </div>

          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value as 'all' | ProjectStatus); setPage(1); }}
            className="px-3 py-1.5 rounded-lg bg-card border border-border text-[12px] text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          >
            <option value="all">All Status</option>
            <option value="generating">Generating</option>
            <option value="review">In Review</option>
            <option value="export-ready">Export Ready</option>
            <option value="draft">Draft</option>
            <option value="testing">Testing</option>
            <option value="delivered">Delivered</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      {/* Bulk action bar */}
      {selected.size > 0 && (
        <div className="flex items-center gap-3 px-4 py-3 mb-3 rounded-xl bg-primary/5 border border-primary/20 fade-in">
          <span className="text-[13px] font-medium text-primary">{selected.size} selected</span>
          <div className="flex items-center gap-2 ml-auto">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/30 border border-border text-[12px] text-muted-foreground hover:text-foreground transition-colors">
              <Archive size={13} /> Archive
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-error/10 border border-error/20 text-[12px] text-error hover:bg-error/20 transition-colors">
              <Trash2 size={13} /> Delete
            </button>
            <button
              onClick={() => setSelected(new Set())}
              className="text-[12px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-border bg-background/30">
                <th className="px-4 py-3 w-10">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={() => {
                      if (allSelected) setSelected(new Set());
                      else setSelected(new Set(paginated.map((p) => p.id)));
                    }}
                    className="rounded border-border accent-primary"
                    aria-label="Select all"
                  />
                </th>
                <th className="px-4 py-3 text-left">
                  <button
                    onClick={() => toggleSort('name')}
                    className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Project <SortIcon field="name" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Client / Order
                </th>
                <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Model
                </th>
                <th className="px-4 py-3 text-left">
                  <button
                    onClick={() => toggleSort('stepNum')}
                    className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Step <SortIcon field="stepNum" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left">
                  <button
                    onClick={() => toggleSort('status')}
                    className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Status <SortIcon field="status" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Size
                </th>
                <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Modified
                </th>
                <th className="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={9}>
                    <EmptyState
                      icon={FolderOpen}
                      title="No projects found"
                      description="No projects match your current filters. Try adjusting the search or filter criteria."
                      action={{ label: 'Clear Filters', onClick: () => { setSearch(''); setTypeFilter('all'); setStatusFilter('all'); } }}
                    />
                  </td>
                </tr>
              ) : (
                paginated.map((project, rowIdx) => {
                  const sc = statusConfig[project.status];
                  const isSelected = selected.has(project.id);
                  return (
                    <tr
                      key={project.id}
                      className={`border-b border-border/50 transition-colors group ${
                        isSelected ? 'bg-primary/5' : rowIdx % 2 === 0 ? 'bg-transparent' : 'bg-background/20'
                      } hover:bg-muted/20`}
                    >
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelect(project.id)}
                          className="rounded border-border accent-primary"
                          aria-label={`Select ${project.name}`}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              project.type === 'web' ? 'bg-primary/10' : 'bg-blue-500/10'
                            }`}
                          >
                            {project.type === 'web' ? (
                              <Globe size={13} className="text-primary" />
                            ) : (
                              <Box size={13} className="text-blue-400" />
                            )}
                          </div>
                          <div>
                            <p className="text-[13px] font-medium text-foreground leading-tight">
                              {project.name}
                            </p>
                            <p className="text-[11px] text-muted-foreground">Created {project.created}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[12px] text-muted-foreground font-mono">{project.client}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[12px] text-muted-foreground bg-muted/40 px-2 py-0.5 rounded-full">
                          {project.model}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[12px] font-medium text-foreground font-tabular">
                            {project.stepNum}/9
                          </span>
                          <span className="text-[11px] text-muted-foreground">{project.step}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant={sc.variant === "error" ? "danger" : sc.variant}
                          dot
                        >
                         {sc.label}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[12px] text-muted-foreground font-tabular">{project.fileSize}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[12px] text-muted-foreground">{project.lastModified}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Link
                            href="/web-studio"
                            title="Open project"
                            className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-150"
                          >
                            <FolderOpen size={13} />
                          </Link>
                          <button
                            title="Duplicate project"
                            className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all duration-150"
                          >
                            <Copy size={13} />
                          </button>
                          <button
                            title="Archive project"
                            className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all duration-150"
                          >
                            <Archive size={13} />
                          </button>
                          <div className="relative">
                            <button
                              title="More options"
                              onClick={() => setOpenActionMenu(openActionMenu === project.id ? null : project.id)}
                              className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all duration-150"
                            >
                              <MoreHorizontal size={13} />
                            </button>
                            {openActionMenu === project.id && (
                              <div className="absolute right-0 top-8 z-20 w-40 bg-card border border-border rounded-xl shadow-xl py-1 fade-in">
                                <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors">
                                  <Copy size={12} /> Duplicate
                                </button>
                                <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors">
                                  <Archive size={12} /> Archive
                                </button>
                                <div className="my-1 border-t border-border" />
                                <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-error hover:bg-error/10 transition-colors">
                                  <Trash2 size={12} /> Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-border">
            <span className="text-[12px] text-muted-foreground font-tabular">
              {(page - 1) * perPage + 1}–{Math.min(page * perPage, sorted.length)} of {sorted.length} projects
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-7 h-7 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Previous page"
              >
                <ChevronLeft size={13} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={`page-${p}`}
                  onClick={() => setPage(p)}
                  className={`w-7 h-7 flex items-center justify-center rounded-md text-[12px] font-medium transition-all duration-150 ${
                    p === page
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/30 border border-border'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-7 h-7 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Next page"
              >
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
