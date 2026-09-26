import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { prompt, productId } = await request.json();

    if (!prompt || !productId) {
      return NextResponse.json({ error: 'prompt and productId are required' }, { status: 400 });
    }

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=600&nologo=true`;

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch image from pollinations.ai');
    }

    const buffer = await response.arrayBuffer();
    const bytes = Buffer.from(buffer);

    const fileName = `${productId}.png`;
    const dir = path.join(process.cwd(), 'public', 'generated-images');
    const filePath = path.join(dir, fileName);

    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(filePath, bytes);

    const publicUrl = `/generated-images/${fileName}`;

    return NextResponse.json({ url: publicUrl });
  } catch (error) {
    console.error('[generate-image] error:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}
