import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { siteName, description } = await request.json();

    if (!siteName) {
      return NextResponse.json({ error: 'siteName is required' }, { status: 400 });
    }

    const text = `${siteName} ${description || ''}`.toLowerCase();
    const hasNeon =
      text.includes('неон') ||
      text.includes('neon') ||
      text.includes('rgb') ||
      text.includes('подсветк') ||
      text.includes('светящ') ||
      text.includes('glow');

    const themeHint =
      description && (description.toLowerCase().includes('компьютер') || description.toLowerCase().includes('техно'))
        ? hasNeon
          ? 'high-end gaming PC setup, liquid cooling, strong RGB neon lighting, glowing tubes, tech magazine style, isolated hero object'
          : 'high-end gaming PC setup, liquid cooling, RGB components, tech magazine style, isolated hero object'
        : hasNeon
        ? 'modern e-commerce hero object with neon accents, glowing edges, cyan and violet light, clean composition, isolated subject'
        : 'modern e-commerce hero object, clean composition, isolated subject';

    const neonHint = hasNeon
      ? 'strong cyan and violet neon lighting, glowing edges, subtle light rays, cyberpunk atmosphere'
      : 'subtle cyan and violet rim light';

    const prompt = `${themeHint}, for online store "${siteName}", ${description || ''}, soft dark background, ${neonHint}, no text, no logo, no solid background wall, object suitable for overlay on gradient background, high quality, cinematic lighting, wide composition`;

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1920&height=1080&nologo=true`;

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch background image');
    }

    const buffer = await response.arrayBuffer();
    const bytes = Buffer.from(buffer);

    const fileName = `bg-${Date.now()}.png`;
    const dir = path.join(process.cwd(), 'public', 'generated-images');
    const filePath = path.join(dir, fileName);

    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(filePath, bytes);

    const publicUrl = `/generated-images/${fileName}`;

    return NextResponse.json({ url: publicUrl });
  } catch (error) {
    console.error('[generate-background] error:', error);
    return NextResponse.json({ error: 'Failed to generate background' }, { status: 500 });
  }
}

