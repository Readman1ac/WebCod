import * as fs from "fs";
import * as path from "path";
import { ProjectBrief, Project } from "./types";

const PROJECTS_DIR = path.join(process.cwd(), "projects");
const INDEX_FILE = path.join(PROJECTS_DIR, "index.json");

function ensureProjectsDir() {
  if (!fs.existsSync(PROJECTS_DIR)) {
    fs.mkdirSync(PROJECTS_DIR, { recursive: true });
  }
  if (!fs.existsSync(INDEX_FILE)) {
    fs.writeFileSync(INDEX_FILE, JSON.stringify([]), "utf-8");
  }
}

function readIndex(): string[] {
  const data = fs.readFileSync(INDEX_FILE, "utf-8");
  return JSON.parse(data) as string[];
}

function writeIndex(ids: string[]) {
  fs.writeFileSync(INDEX_FILE, JSON.stringify(ids, null, 2), "utf-8");
}

export function createProject(brief: ProjectBrief): Project {
  ensureProjectsDir();

  const projectDir = path.join(PROJECTS_DIR, brief.id);
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(projectDir, "brief.json"),
    JSON.stringify(brief, null, 2),
    "utf-8"
  );

  const webDir = path.join(projectDir, "web");
  if (!fs.existsSync(webDir)) {
    fs.mkdirSync(webDir, { recursive: true });
  }

  const versionsDir = path.join(projectDir, "versions");
  if (!fs.existsSync(versionsDir)) {
    fs.mkdirSync(versionsDir, { recursive: true });
  }

  const index = readIndex();
  if (!index.includes(brief.id)) {
    index.push(brief.id);
    writeIndex(index);
  }

  const project: Project = {
    id: brief.id,
    brief,
    status: "draft",
    webPath: path.relative(process.cwd(), webDir),
    versions: [],
  };

  return project;
}

export function getProject(id: string): Project | null {
  ensureProjectsDir();
  const projectDir = path.join(PROJECTS_DIR, id);
  if (!fs.existsSync(projectDir)) {
    return null;
  }

  const briefPath = path.join(projectDir, "brief.json");
  const planPath = path.join(projectDir, "plan.json");

  const brief = JSON.parse(
    fs.readFileSync(briefPath, "utf-8")
  ) as ProjectBrief;

  let plan: Project["plan"] = undefined;
  if (fs.existsSync(planPath)) {
    plan = JSON.parse(fs.readFileSync(planPath, "utf-8"));
  }

  const versionsDir = path.join(projectDir, "versions");
  const versions = fs
    .readdirSync(versionsDir)
    .filter((f) => fs.statSync(path.join(versionsDir, f)).isDirectory());

  return {
    id,
    brief,
    plan,
    status: plan ? "planned" : "draft",
    webPath: path.relative(process.cwd(), path.join(projectDir, "web")),
    versions,
  };
}

export function listProjects(): Project[] {
  ensureProjectsDir();
  const ids = readIndex();
  return ids
    .map((id) => getProject(id))
    .filter((p): p is Project => p !== null);
}

export function saveProjectPlan(
  id: string,
  plan: Project["plan"]
): Project {
  const projectDir = path.join(PROJECTS_DIR, id);
  if (!fs.existsSync(projectDir)) {
    throw new Error(`Project ${id} not found`);
  }

  fs.writeFileSync(
    path.join(projectDir, "plan.json"),
    JSON.stringify(plan, null, 2),
    "utf-8"
  );

  const project = getProject(id);
  if (!project) {
    throw new Error(`Project ${id} not found after saving plan`);
  }
  return project;
}
