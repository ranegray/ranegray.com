import Link from "next/link";
import { getAllPosts } from "@/lib/writing";

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-3xl mb-8">
        writing
      </h1>
      <ul className="space-y-4">
        {posts.map((post) => (
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
    </div>
  );
}
