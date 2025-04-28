'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        /* Navigation */
        <nav className="border-b border-zinc-200 bg-white sticky top-0 z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="font-bold text-4xl text-zinc-900">
                            rane<span className="text-orange-600">.</span>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="/blog">Blog</NavLink>
                        <NavLink href="/about">About</NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-zinc-500 hover:text-zinc-700 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {
                isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-zinc-200 px-2 pt-2 pb-3 space-y-1">
                        <Link href="/" className="block px-3 py-2 text-zinc-600 hover:text-orange-600">Home</Link>
                        <Link href="/projects" className="block px-3 py-2 text-zinc-600 hover:text-orange-600">Projects</Link>
                        <Link href="/blog" className="block px-3 py-2 text-zinc-600 hover:text-orange-600">Blog</Link>
                        <Link href="/about" className="block px-3 py-2 text-zinc-600 hover:text-orange-600">About</Link>
                    </div>
                )
            }
        </nav>
    );
}
