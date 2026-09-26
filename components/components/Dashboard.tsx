"use client";

import Link from "next/link";
import {
  Activity,
  Box,
  FolderKanban,
  Globe2,
  Plus,
  Server,
  Sparkles,
} from "lucide-react";

const stats = [
  { label: "Active projects", value: "0", icon: FolderKanban },
  { label: "Generated websites", value: "0", icon: Globe2 },
  { label: "3D projects", value: "0", icon: Box },
  { label: "Models available", value: "—", icon: Server },
];

export default function Dashboard() {
  return (
    <div className="app-shell">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">Workspace</p>
          <h1 className="page-title">Dashboard</h1>
        </div>

        <div className="status-pill">
          <span className="status-dot" />
          Ollama not connected
        </div>
      </header>

      <main className="dashboard-main">
        <section className="hero-card">
          <div className="hero-content">
            <div>
              <div className="hero-icon">
                <Sparkles size={21} />
              </div>

              <h2 className="hero-title">Create something extraordinary</h2>

              <p className="hero-description">
                Generate websites and 3D projects locally with Ollama,
                reusable templates, and your own creative workflow.
              </p>
            </div>

            <Activity className="hero-decoration" size={76} />
          </div>

          <div className="action-row">
            <Link href="/web-studio" className="primary-button">
              <Plus size={17} />
              New web project
            </Link>

            <Link href="/3d-studio" className="secondary-button">
              <Box size={17} />
              New 3D project
            </Link>
          </div>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article key={stat.label} className="stat-card">
                <div className="stat-top">
                  <span className="stat-label">{stat.label}</span>
                  <Icon size={18} className="stat-icon" />
                </div>

                <p className="stat-value">{stat.value}</p>
              </article>
            );
          })}
        </section>

        <section className="empty-card">
          <FolderKanban size={30} className="empty-icon" />

          <h2 className="empty-title">No projects yet</h2>

          <p className="empty-description">
            Create your first website or 3D project. Later this area will show
            real projects loaded from the Python backend.
          </p>
        </section>
      </main>
    </div>
  );
}
