import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/lib/projects";
import ProjectCard from "./components/ProjectCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Rane Gray, robotics researcher at the Correll Lab, CU Boulder. Embodied agentic AI, perception, and manipulation.",
};

export default function Home() {
  return (
    <div className="space-y-16">
      <section>
        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-lg border border-border bg-bg-subtle/40">
          <Image
            src="/images/hero-minimal.png"
            alt="Minimal dark abstract texture with subtle warm highlights"
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>

        <h1 className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl leading-tight text-fg sm:text-5xl">
          Robotics researcher at the Correll Lab.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-fg-dim">
          I work across perception, manipulation, and autonomy, with a growing
          focus on agentic systems and their limitations on low-cost hardware.
          The pull, like much of the field, is general-purpose physical
          intelligence. Currently an undergrad at CU Boulder. Senior thesis on
          embodied agentic AI starts fall 2026. Master&apos;s in robotics
          fall 2027.
        </p>

        <div className="mt-8 flex flex-wrap gap-5 text-sm">
          <a
            href={site.paper.href}
            target="_blank"
            rel="noreferrer"
            className="text-fg underline decoration-accent-gold decoration-2 underline-offset-4 transition-colors hover:text-accent-gold"
          >
            Read the paper &rarr;
          </a>
          <a
            href="https://github.com/ranegray"
            target="_blank"
            rel="noreferrer"
            className="text-fg-dim transition-colors hover:text-fg"
          >
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-fg-dim transition-colors hover:text-fg"
          >
            Email
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-2xl text-fg">
          Selected
        </h2>

        <a
          href={site.paper.href}
          target="_blank"
          rel="noreferrer"
          className="group block border-t border-border py-5 transition-colors hover:border-accent-gold"
        >
          <p className="text-xs text-fg-dim">{site.paper.venue}</p>
          <p className="mt-2 font-[family-name:var(--font-heading)] text-xl leading-snug text-fg group-hover:text-accent-gold">
            {site.paper.title}
          </p>
          <p className="mt-2 text-sm leading-6 text-fg-dim">
            {site.paper.authors}
          </p>
        </a>

        <div className="block border-t border-border py-5">
          <p className="text-xs text-fg-dim">{site.award.venue}</p>
          <p className="mt-2 font-[family-name:var(--font-heading)] text-xl leading-snug text-fg">
            {site.award.title}
          </p>
          <p className="mt-2 text-sm leading-6 text-fg-dim">
            {site.award.description}
          </p>
        </div>
      </section>

      <section id="research" className="scroll-mt-10">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-fg">
            Research
          </h2>
          <p className="text-xs text-fg-dim">
            {site.lab.name} &middot; {site.lab.since}
          </p>
        </div>

        <ul className="space-y-4 border-t border-border pt-5 text-sm leading-7 text-fg-dim">
          {site.lab.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span aria-hidden="true" className="text-accent-gold">
                &middot;
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="scroll-mt-10">
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-2xl text-fg">
          Projects
        </h2>

        <div>
          {projects.map((project) => (
            <ProjectCard key={project.repo} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-2xl text-fg">
          Previously
        </h2>
        <p className="border-t border-border pt-5 text-sm leading-7 text-fg-dim">
          {site.previously}
        </p>
      </section>
    </div>
  );
}
