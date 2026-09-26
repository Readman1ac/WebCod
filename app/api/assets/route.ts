import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { join } from 'path';

const ASSETS_DIR = join(process.cwd(), 'assets_library');

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || '';

    const categories = await fs.readdir(ASSETS_DIR, { withFileTypes: true });
    const result: any[] = [];

    for (const cat of categories) {
      if (cat.isDirectory() && (!category || cat.name === category)) {
        const files = await fs.readdir(join(ASSETS_DIR, cat.name));
        result.push({
          name: cat.name,
          files: files.map(f => ({
            name: f,
            url: `/assets_library/${cat.name}/${f}`,
          })),
        });
      }
    }

    return NextResponse.json({ success: true, assets: result });
  } catch (error) {
    console.error('[assets] error:', error);
    return NextResponse.json({ error: 'Failed to load assets' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { category, file, metadata } = await request.json();

    if (!category || !file) {
      return NextResponse.json({ error: 'category and file are required' }, { status: 400 });
    }

    const categoryDir = join(ASSETS_DIR, category);
    await fs.mkdir(categoryDir, { recursive: true });

    const filePath = join(categoryDir, file.name);
    await fs.writeFile(filePath, Buffer.from(file.data, 'base64'));

    // Сохраняем metadata
    if (metadata) {
      const metaPath = join(categoryDir, file.name + '.json');
      await fs.writeFile(metaPath, JSON.stringify(metadata, null, 2));
    }

    return NextResponse.json({
      success: true,
      url: `/assets_library/${category}/${file.name}`,
    });
  } catch (error) {
    console.error('[assets] error:', error);
    return NextResponse.json({ error: 'Failed to save asset' }, { status: 500 });
  }
}
