import fs from 'fs'
import path from 'path'

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { default: Post } = await import(`../posts/${slug}.mdx`)

    return (
        <div className='min-h-screen bg-zinc-50'>   
            <main className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <Post />
            </main>
        </div>
    )
}

export function generateStaticParams() {
    const files = fs.readdirSync(path.join(process.cwd(), 'app/blog/posts'))
    return files.map((file) => ({
        slug: file.replace(/\.mdx?$/, ''),
    }))
}

export const dynamicParams = false
