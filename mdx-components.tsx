import type { MDXComponents } from "mdx/types";

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-fg mb-6 mt-10">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-[family-name:var(--font-heading)] text-2xl text-fg mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-[family-name:var(--font-heading)] text-xl text-fg mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-[family-name:var(--font-heading)] text-lg text-fg mb-2 mt-4">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-fg leading-[1.8] mb-6">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent-gold hover:underline underline-offset-4"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-1 text-fg leading-[1.8]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-1 text-fg leading-[1.8]">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent-gold pl-4 my-6 text-fg-dim italic">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-bg-subtle text-accent-red px-1.5 py-0.5 rounded text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-bg-subtle border border-border rounded-md p-4 mb-6 overflow-x-auto text-sm">
        {children}
      </pre>
    ),
    ...components,
  };
}
