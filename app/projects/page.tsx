import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl mb-3">
          projects
        </h1>
        <p className="max-w-2xl text-fg-dim">
          Current resume projects across robot perception, navigation, and
          reinforcement learning.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-sm border border-border bg-bg-subtle p-6"
          >
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl">
                  {project.title}
                </h2>
                <p className="text-accent-gold">{project.subtitle}</p>
              </div>
              <p className="shrink-0 text-sm uppercase tracking-wider text-fg-dim">
                {project.timeframe}
              </p>
            </div>

            <p className="mb-4 text-fg-dim">{project.summary}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-fg-dim"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ul className="space-y-2 text-sm">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden="true" className="text-accent-gold">
                    +
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
