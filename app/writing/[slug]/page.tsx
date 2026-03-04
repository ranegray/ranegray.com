import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeShiki from "@shikijs/rehype";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/writing";
import { useMDXComponents } from "@/mdx-components";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta, content } = getPostBySlug(slug);
  const components = useMDXComponents({});

  const formattedDate = new Date(meta.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article>
      <Link
        href="/writing"
        className="text-fg-dim hover:text-accent-gold text-sm mb-8 inline-block transition-colors"
      >
        &larr; writing
      </Link>
      <h1 className="font-[family-name:var(--font-heading)] text-3xl mb-2">
        {meta.title}
      </h1>
      <p className="text-fg-dim text-sm mb-10">{formattedDate}</p>

      <div className="leading-[1.8]">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypeShiki, { theme: "kanagawa-dragon" }]],
            },
          }}
          components={components}
        />
      </div>

      {meta.tags && meta.tags.length > 0 && (
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex gap-2 flex-wrap">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-fg-dim bg-bg-subtle px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
