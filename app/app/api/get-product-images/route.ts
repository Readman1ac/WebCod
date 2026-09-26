import { NextRequest, NextResponse } from 'next/server';
import { execSync } from 'child_process';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const { products } = await request.json();
    
    const scriptPath = join(process.cwd(), '..', 'app', 'image_selector.py');
    const input = JSON.stringify(products);
    
    const result = execSync(`python "${scriptPath}"`, {
      input: input,
      encoding: 'utf-8',
      env: { ...process.env, PYTHONIOENCODING: 'utf-8' }
    });
    
    const images: Record<string, string> = JSON.parse(result);
    
    return NextResponse.json(images);
  } catch (error) {
    console.error('Python image selector error:', error);
    return NextResponse.json({}, { status: 500 });
  }
}
