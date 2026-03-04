import Link from "next/link";
import { getAllPosts } from "@/lib/writing";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-4xl mb-2">
        rane gray
      </h1>
      <p className="text-fg-dim mb-12">i build robots.</p>

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
