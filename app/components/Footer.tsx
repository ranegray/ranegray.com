import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-3xl px-6 pb-10 pt-20 text-sm text-fg-dim sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p>
          {site.name} &middot; {site.location}
        </p>
        <div className="flex flex-wrap gap-5">
          {site.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
