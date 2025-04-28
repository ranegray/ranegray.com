import BlogFilter from './components/BlogFilter';
import Link from 'next/link';
import Image from 'next/image';

// Sample blog post data
const blogPosts = [
    {
        id: 1,
        title: 'Putting Together a Mobile Robotics Lab for My Small Apartment',
        slug: 'mobile-robotics-lab',
        excerpt: "How I built a compact, adaptable space for robotics experimentation without turning my living room into a workshop.",
        content: '',
        publishedAt: '2025-04-10',
        readingTime: '6 min read',
        tags: ['robotics', 'DIY', 'setup'],
        author: 'Rane Gray',
        imageUrl: '/api/placeholder/800/400'
    },
    {
        id: 2,
        title: 'Humanizing Robotics: Breaking Down the Fear of Humanoid Systems',
        slug: 'humanizing-robotics',
        excerpt: "Addressing common misconceptions about humanoid robots and why they're vital for advancing human-robot interaction.",
        content: '',
        publishedAt: '2025-03-22',
        readingTime: '8 min read',
        tags: ['humanoid-robots', 'ethics', 'future'],
        author: 'Rane Gray',
        imageUrl: '/api/placeholder/800/400'
    },
    {
        id: 3,
        title: 'Ethics in Robotics: Drawing the Lines for Autonomous Systems',
        slug: 'ethics-in-robotics',
        excerpt: "Exploring the ethical frameworks needed as robots become increasingly capable and integrated into society.",
        content: '',
        publishedAt: '2025-03-05',
        readingTime: '12 min read',
        tags: ['ethics', 'philosophy', 'AI'],
        author: 'Rane Gray',
        imageUrl: '/api/placeholder/800/400'
    },
    {
        id: 4,
        title: 'ROS 2 Workshop: Setting Up a Development Environment',
        slug: 'ros2-workshop-setup',
        excerpt: "A step-by-step guide to configuring a robust ROS 2 development environment for robotics projects.",
        content: '',
        publishedAt: '2025-02-18',
        readingTime: '10 min read',
        tags: ['ROS2', 'tutorial', 'development'],
        author: 'Rane Gray',
        imageUrl: '/api/placeholder/800/400'
    },
    {
        id: 5,
        title: 'Learning from Human Movement: Imitation in Humanoid Robotics',
        slug: 'imitation-learning',
        excerpt: "How we're teaching robots to learn from human demonstrations and the challenges of translating human motion to robotic systems.",
        content: '',
        publishedAt: '2025-01-30',
        readingTime: '9 min read',
        tags: ['imitation-learning', 'research', 'motion-capture'],
        author: 'Rane Gray',
        imageUrl: '/api/placeholder/800/400'
    },
    {
        id: 6,
        title: 'Unitree H1-2: First Impressions and Research Potential',
        slug: 'unitree-h1-first-impressions',
        excerpt: "My experience with the Unitree H1-2 humanoid robot and the research opportunities it presents for the Correll Lab.",
        content: '',
        publishedAt: '2025-01-15',
        readingTime: '7 min read',
        tags: ['unitree', 'hardware', 'review'],
        author: 'Rane Gray',
        imageUrl: '/api/placeholder/800/400'
    }
];

// All unique tags from the blog posts
const allTags = [...new Set(blogPosts.flatMap(post => post.tags))].sort();

export default function BlogPage({
    searchParams
}: {
    searchParams: { tag?: string; search?: string }
}) {
    // Get filter values from URL params
    const selectedTag = searchParams.tag || '';
    const searchQuery = searchParams.search || '';

    // Filter posts based on URL parameters
    const filteredPosts = blogPosts.filter(post => {
        const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
        const matchesSearch = searchQuery
            ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
            : true;
        return matchesTag && matchesSearch;
    });

    // Format date for display
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900">
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold mb-6">Blog</h1>
                    <p className="text-xl text-zinc-600">
                        Documenting my journey in robotics, sharing technical insights, and exploring the ethical dimensions of the field. Here you&apos;ll find research notes, tutorials, and philosophical musings on humanoid robotics.
                    </p>
                </div>

                {/* Client-side filter component */}
                <BlogFilter
                    allTags={allTags}
                    selectedTag={selectedTag}
                    searchQuery={searchQuery}
                />

                {/* Blog posts */}
                <div className="max-w-4xl mx-auto">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-12">
                            <h3 className="text-lg font-medium text-zinc-900 mb-2">No posts found</h3>
                            <p className="text-zinc-600">Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {filteredPosts.map(post => (
                                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="md:flex">
                                        <div className="md:flex-shrink-0">
                                            <Image
                                                className="h-48 w-full object-cover md:h-full md:w-48"
                                                src={post.imageUrl}
                                                alt={post.title}
                                                width={800}
                                                height={400}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                                                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                                                <span>•</span>
                                                <span>{post.readingTime}</span>
                                            </div>

                                            <Link href={`/blog/${post.slug}`} className="block">
                                                <h2 className="text-xl font-semibold text-zinc-900 hover:text-orange-600 transition-colors mb-2">
                                                    {post.title}
                                                </h2>
                                            </Link>

                                            <p className="text-zinc-600 mb-4">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {post.tags.map(tag => (
                                                    <Link
                                                        key={`${post.id}-${tag}`}
                                                        href={`/blog?tag=${tag}`}
                                                        className="px-2 py-1 bg-zinc-100 text-zinc-700 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors"
                                                    >
                                                        {tag}
                                                    </Link>
                                                ))}
                                            </div>

                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                                            >
                                                Read more
                                                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
