// components/TopBrandTabs.tsx
"use client";

const tabs = [
  { name: "Exhibit Design Search", href: "#", color: "text-orange-500" },
  { name: "Client File Upload", href: "#", color: "text-blue-500" },
  { name: "Client Login", href: "#", color: "text-purple-500" },
];
export default function TopBrandTabs() {
  return (
    <div className="w-full border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex w-full items-center gap-2 sm:gap-4 sm:justify-end">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={`
                flex-1 sm:flex-none
                text-center
                rounded-full
                border border-white/20
                px-3 py-2 sm:px-4
                text-[11px] sm:text-xs
                font-semibold
                transition
                hover:bg-white/10
                ${tab.color}
              `}
            >
              {tab.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}