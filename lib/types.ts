export interface ProjectBrief {
  id: string;
  name: string;
  client?: string;
  brief: string;
  references?: string[];
  stylePreset?: string;
  seo?: {
    title?: string;
    description?: string;
  };
  responsive?: boolean;
  createdAt: string;
}

export interface ProjectPlan {
  project_type: string;
  pages: string[];
  sections: string[];
  style: string;
  required_assets: string[];
  responsive: boolean;
}

export interface Project {
  id: string;
  brief: ProjectBrief;
  plan?: ProjectPlan;
  status: "draft" | "planned" | "generated" | "tested" | "exported";
  webPath: string;
  versions: string[];
}
