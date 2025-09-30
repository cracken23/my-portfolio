"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:border-neutral-800/60 dark:bg-neutral-950/50 supports-[backdrop-filter]:dark:bg-neutral-950/40">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
        >
          Portfolio
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="#projects"
            className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            href="/Kenneth_Jezreel.pdf"
            className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
          >
            Resume
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
