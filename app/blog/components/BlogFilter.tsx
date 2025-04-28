"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface BlogFilterProps {
    allTags: string[];
    selectedTag: string;
    searchQuery: string;
}

export default function BlogFilter({ allTags, selectedTag, searchQuery }: BlogFilterProps) {
    const router = useRouter();
    const pathname = usePathname();

    // Local state to manage the input field
    const [searchInput, setSearchInput] = useState(searchQuery);

    // Update local state when props change (e.g., when user navigates back)
    useEffect(() => {
        setSearchInput(searchQuery);
    }, [searchQuery]);

    // Handle tag selection
    const handleTagSelect = (tag: string) => {
        // If clicking the already selected tag, clear it
        if (tag === selectedTag) {
            // Clear the tag parameter but keep search if it exists
            const newParams = new URLSearchParams();
            if (searchQuery) {
                newParams.set('search', searchQuery);
            }
            router.push(`${pathname}?${newParams.toString()}`);
        } else {
            // Set the new tag and keep search if it exists
            const newParams = new URLSearchParams();
            newParams.set('tag', tag);
            if (searchQuery) {
                newParams.set('search', searchQuery);
            }
            router.push(`${pathname}?${newParams.toString()}`);
        }
    };

    // Handle search input change
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Update URL with search query and keep selected tag if it exists
        const newParams = new URLSearchParams();
        if (searchInput.trim()) {
            newParams.set('search', searchInput.trim());
        }
        if (selectedTag) {
            newParams.set('tag', selectedTag);
        }

        router.push(`${pathname}?${newParams.toString()}`);
    };

    // Clear tag filter
    const clearTag = () => {
        // Keep search if it exists
        const newParams = new URLSearchParams();
        if (searchQuery) {
            newParams.set('search', searchQuery);
        }
        router.push(`${pathname}?${newParams.toString()}`);
    };

    // Clear search filter
    const clearSearch = () => {
        setSearchInput('');

        // Keep tag if it exists
        const newParams = new URLSearchParams();
        if (selectedTag) {
            newParams.set('tag', selectedTag);
        }
        router.push(`${pathname}?${newParams.toString()}`);
    };

    return (
        <div className="max-w-4xl mx-auto mb-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                {/* Search */}
                <form onSubmit={handleSearchSubmit} className="w-full sm:w-64">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search posts..."
                            className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        {searchInput && (
                            <button
                                type="button"
                                onClick={clearSearch}
                                className="absolute inset-y-0 right-10 flex items-center pr-1"
                            >
                                <svg className="h-4 w-4 text-zinc-400 hover:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                        <button
                            type="submit"
                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                            <svg className="h-5 w-5 text-zinc-400 hover:text-zinc-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </form>

                {/* Tag filter label */}
                <div className="flex items-center gap-2">
                    <span className="text-zinc-600">Filter by:</span>
                    {selectedTag ? (
                        <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                            {selectedTag}
                            <button
                                onClick={clearTag}
                                className="ml-2 text-orange-600 hover:text-orange-800"
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <span className="text-zinc-400 italic">All posts</span>
                    )}
                </div>
            </div>

            {/* Tags */}
            <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => handleTagSelect(tag)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === tag
                                    ? 'bg-orange-600 text-white'
                                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
