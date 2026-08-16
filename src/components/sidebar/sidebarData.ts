export interface SidebarSkillGroup {
  label: string;
  items: string[];
}

export const coreStack = [
  "C#",
  "TypeScript",
  ".NET",
  "Node",
  "React",
  "Next.js",
  "Azure",
  "Cosmos DB",
];

export const skillGroups: SidebarSkillGroup[] = [
  { label: "Languages", items: ["C#", "TypeScript", "Python", "Ruby"] },
  {
    label: "Frameworks",
    items: [
      ".NET",
      "Node",
      "React",
      "Next.js",
      "React Native",
      "Rails",
      "Astro",
      "Django",
      "Angular",
    ],
  },
  { label: "Cloud", items: ["Azure", "AWS", "Cloudflare Workers", "Firebase"] },
  { label: "Databases", items: ["Cosmos DB", "Postgres", "SQL Server", "MongoDB"] },
  {
    label: "DevOps & Tools",
    items: ["Azure DevOps", "GitHub Actions", "Docker", "Terraform"],
  },
];

export const isCoreSkill = (skill: string) => coreStack.includes(skill);
