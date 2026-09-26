import { NextRequest, NextResponse } from "next/server";
import { createProject, listProjects } from "@/lib/projects";
import { ProjectBrief } from "@/lib/types";

export async function GET() {
  const projects = listProjects();
  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const brief: ProjectBrief = {
    id:
      body.id ||
      `project_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    name: body.name,
    client: body.client,
    brief: body.brief,
    references: body.references || [],
    stylePreset: body.stylePreset,
    seo: body.seo,
    responsive: !!body.responsive,
    createdAt: new Date().toISOString(),
  };

  const project = createProject(brief);
  return NextResponse.json(project);
}
