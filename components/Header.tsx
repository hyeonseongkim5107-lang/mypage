"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/lib/posts";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#e5e5e5]">
      <div className="max-w-2xl mx-auto px-6 py-6">
        <div className="flex items-baseline justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-[#1a1a1a] hover:opacity-70 transition-opacity"
          >
            현성의 공간
          </Link>
          <nav className="flex items-center gap-1">
            <Link
              href="/about"
              className={`text-sm px-3 py-1 rounded transition-colors ${
                pathname === "/about"
                  ? "text-[#1a1a1a] font-medium"
                  : "text-[#888] hover:text-[#1a1a1a]"
              }`}
            >
              소개
            </Link>
          </nav>
        </div>
        <nav className="flex items-center gap-1 mt-4 flex-wrap">
          <Link
            href="/"
            className={`text-sm px-3 py-1 rounded transition-colors ${
              pathname === "/"
                ? "bg-[#1a1a1a] text-white"
                : "text-[#888] hover:text-[#1a1a1a]"
            }`}
          >
            전체
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/category/${encodeURIComponent(cat)}`}
              className={`text-sm px-3 py-1 rounded transition-colors ${
                pathname === `/category/${encodeURIComponent(cat)}`
                  ? "bg-[#1a1a1a] text-white"
                  : "text-[#888] hover:text-[#1a1a1a]"
              }`}
            >
              {cat}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
