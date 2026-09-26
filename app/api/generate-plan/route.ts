import { NextRequest, NextResponse } from "next/server";
import { callOllamaChat } from "@/lib/ollama";
import { ProjectPlan } from "@/lib/types";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { brief, references } = body as {
    brief: string;
    references?: string[];
  };

  const prompt = `
Ты — архитектор веб-проектов. 
На основе технического задания составь структурированный план сайта в формате JSON.

ТЗ:
${brief}

${references && references.length > 0 ? `Референсы (описания): ${references.join(", ")}` : ""}

Верни строго JSON такой структуры:
{
  "project_type": "тип проекта, например landing, shop, portfolio и т.п.",
  "pages": ["home", "..."],
  "sections": ["header", "hero", "..."],
  "style": "краткое описание стиля, например 'минимализм, светлый, акцент оранжевый'",
  "required_assets": ["hero_image", "logo", "..."],
  "responsive": true
}

Никакого текста до и после JSON.
`.trim();

  try {
    const content = await callOllamaChat({
      model: "qwen2.5-coder:latest",
      prompt,
      json: true,
    });

    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No JSON found in Ollama response");
    }

    const plan: ProjectPlan = JSON.parse(jsonMatch[0]);
    return NextResponse.json(plan);
  } catch (e: any) {
    return NextResponse.json(
      { error: "Failed to generate plan", details: e?.message || String(e) },
      { status: 500 }
    );
  }
}
