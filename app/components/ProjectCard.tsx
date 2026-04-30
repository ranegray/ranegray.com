import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group block border-t border-border py-6 transition-colors hover:border-accent-gold"
    >
      <div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl text-fg group-hover:text-accent-gold">
              {project.title}
            </h3>
            <span className="shrink-0 text-xs text-fg-dim">
              {project.timeframe}
            </span>
          </div>

          <p className="mt-2 text-sm text-fg-dim">{project.subtitle}</p>

          <p className="mt-4 text-sm leading-7 text-fg-dim">
            {project.summary}
          </p>

          <p className="mt-4 text-xs text-fg-dim">
            {project.repo} &rarr;
          </p>
        </div>
      </div>
    </a>
  );
}
