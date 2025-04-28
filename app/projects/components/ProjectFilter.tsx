'use client';

import { useRouter, usePathname } from 'next/navigation';

interface Category {
    id: string;
    name: string;
}

export default function ProjectFilter({
    categories,
    selectedCategory
}: {
    categories: Category[];
    selectedCategory: string;
}) {
    const router = useRouter();
    const pathname = usePathname();

    // Handle category selection by updating URL
    const handleCategoryChange = (categoryId: string) => {
        const params = new URLSearchParams();
        if (categoryId !== 'all') {
            params.set('category', categoryId);
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="mb-10">
            <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedCategory === category.id
                            ? 'bg-orange-600 text-white'
                            : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
