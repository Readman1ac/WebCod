import { NextRequest, NextResponse } from 'next/server';
import { execSync } from 'child_process';
import { join } from 'path';
import { promises as fs } from 'fs';

const PROJECTS_DIR = join(process.cwd(), 'projects');

export async function POST(request: NextRequest) {
  try {
    const { projectId } = await request.json();

    if (!projectId) {
      return NextResponse.json({ error: 'projectId is required' }, { status: 400 });
    }

    const projectPath = join(PROJECTS_DIR, projectId);
    
    // Проверяем существует ли проект
    try {
      await fs.access(projectPath);
    } catch {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // Проверяем есть ли package.json
    const packageJsonPath = join(projectPath, 'package.json');
    try {
      await fs.access(packageJsonPath);
    } catch {
      const packageJson = {
        name: projectId,
        version: '1.0.0',
        private: true,
        scripts: {
          dev: 'vite',
          build: 'vite build',
          preview: 'vite preview',
        },
        dependencies: {
          react: '^18.3.1',
          'react-dom': '^18.3.1',
        },
        devDependencies: {
          '@vitejs/plugin-react': '^4.3.0',
          vite: '^5.3.0',
        },
      };
      await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
    }

    // Устанавливаем зависимости если нужно
    const nodeModulesPath = join(projectPath, 'node_modules');
    try {
      await fs.access(nodeModulesPath);
    } catch {
      execSync('npm install', { cwd: projectPath, stdio: 'ignore' });
    }

    const previewUrl = `http://localhost:5173`;

    return NextResponse.json({
      success: true,
      previewUrl,
      projectPath,
    });
  } catch (error) {
    console.error('[preview] error:', error);
    return NextResponse.json({ error: 'Failed to start preview' }, { status: 500 });
  }
}
