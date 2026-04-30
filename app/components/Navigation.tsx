import Link from "next/link";
import { site } from "@/lib/site";

export default function Navigation() {
  return (
    <nav className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-6 pb-4 pt-10 sm:px-8">
      <Link
        href="/"
        className="font-[family-name:var(--font-heading)] text-xl text-fg transition-colors hover:text-accent-gold"
      >
        {site.name}
      </Link>

      <div className="flex flex-wrap items-center gap-5 text-sm">
        <Link
          href="/#research"
          className="text-fg-dim transition-colors hover:text-fg"
        >
          Research
        </Link>
        <Link
          href="/#projects"
          className="text-fg-dim transition-colors hover:text-fg"
        >
          Projects
        </Link>
        <a
          href="https://github.com/ranegray"
          target="_blank"
          rel="noreferrer"
          className="text-fg-dim transition-colors hover:text-fg"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
