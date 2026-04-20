import Link from "next/link";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/writing";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-4xl mb-2">
        rane gray
      </h1>
      <p className="text-fg-dim mb-12">i build robots.</p>

      <section className="mb-12">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-sm text-fg-dim uppercase tracking-wider">
            selected projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-fg-dim hover:text-accent-gold transition-colors"
          >
            all projects
          </Link>
        </div>
        <ul className="space-y-4">
          {featuredProjects.map((project) => (
            <li
              key={project.slug}
              className="rounded-sm border border-border bg-bg-subtle p-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg">{project.title}</h3>
                  <p className="text-sm text-accent-gold">{project.subtitle}</p>
                </div>
                <span className="shrink-0 text-xs uppercase tracking-wider text-fg-dim">
                  {project.timeframe}
                </span>
              </div>
              <p className="mt-3 text-sm text-fg-dim">{project.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      {recentPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm text-fg-dim uppercase tracking-wider mb-4">
            recent writing
          </h2>
          <ul className="space-y-3">
            {recentPosts.map((post) => (
              <li
                key={post.slug}
                className="flex justify-between items-baseline gap-4"
              >
                <Link
                  href={`/writing/${post.slug}`}
                  className="text-fg hover:text-accent-gold transition-colors"
                >
                  {post.title}
                </Link>
                <span className="text-fg-dim text-sm shrink-0">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="flex gap-6 text-sm">
        <a
          href="mailto:ranegray@outlook.com"
          className="text-fg-dim hover:text-accent-gold transition-colors"
        >
          email
        </a>
        <a
          href="https://github.com/ranegray"
          className="text-fg-dim hover:text-accent-gold transition-colors"
        >
          github
        </a>
        <a
          href="https://x.com/ranegray_"
          className="text-fg-dim hover:text-accent-gold transition-colors"
        >
          x.com
        </a>
      </div>
    </div>
  );
}
