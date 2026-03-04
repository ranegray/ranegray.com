import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

export interface PostMeta {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  slug: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(WRITING_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(WRITING_DIR, file), "utf-8");
    const { data } = matter(raw);
    return { ...(data as Omit<PostMeta, "slug">), slug };
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(WRITING_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: { ...(data as Omit<PostMeta, "slug">), slug }, content };
}
