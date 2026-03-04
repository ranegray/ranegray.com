import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="max-w-[680px] mx-auto px-6 pt-8 pb-4 flex justify-between items-center">
      <Link
        href="/"
        className="text-fg hover:text-accent-gold transition-colors font-[family-name:var(--font-heading)] text-lg"
      >
        rane gray
      </Link>
      <div className="flex gap-6 text-sm">
        <Link
          href="/writing"
          className="text-fg-dim hover:text-fg transition-colors"
        >
          writing
        </Link>
        <Link
          href="/projects"
          className="text-fg-dim hover:text-fg transition-colors"
        >
          projects
        </Link>
        <Link
          href="/about"
          className="text-fg-dim hover:text-fg transition-colors"
        >
          about
        </Link>
      </div>
    </nav>
  );
}
