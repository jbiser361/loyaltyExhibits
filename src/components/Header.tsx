// components/Header.tsx
"use client";

import TopBrandTabs from "./TopBrandTabs";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <TopBrandTabs />

      <nav className="border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
      <div className="text-lg font-semibold tracking-tight text-orange-500">
      Loyalty Exhibits
      </div>

          <div className="flex gap-6 text-sm">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full px-3 py-1 text-neutral-200 hover:bg-white/10 transition"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}