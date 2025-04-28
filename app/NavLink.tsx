import { ReactNode } from "react";
import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
    return (
        <Link
            href={href}
            className="text-zinc-600 hover:text-orange-600 transition-colors px-3 py-2"
        >
            {children}
        </Link>
    );
}
