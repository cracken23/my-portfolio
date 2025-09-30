"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { useSectionHighlight } from "@/hooks/use-section-highlight";

export function SiteHeader() {
  const { isScrolled } = useScroll();
  const [isMounted, setIsMounted] = useState(false);
  const sectionIds = ["home", "skills", "about", "projects", "contact"];
  const activeSection = useSectionHighlight(sectionIds);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsMounted(true), 20);
    return () => window.clearTimeout(timer);
  }, []);

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
  ];

  const auraStyles: Record<string, string> = {
    home: "bg-[radial-gradient(circle_at_center,_rgba(244,114,182,0.55),_transparent_68%)]",
    skills: "bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.5),_transparent_68%)]",
    projects: "bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.55),_transparent_70%)]",
    about: "bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.5),_transparent_70%)]",
    contact: "bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.5),_transparent_70%)]",
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/80 bg-[rgba(248,250,252,0.75)] backdrop-blur-xl transition-all duration-500 supports-[backdrop-filter]:bg-[rgba(248,250,252,0.65)]",
        "dark:bg-background/70 dark:supports-[backdrop-filter]:bg-background/60",
        isScrolled ? "shadow-lg shadow-foreground/5" : "shadow-none"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8",
          "transition-all duration-500",
          isScrolled ? "h-14" : "h-16"
        )}
      >
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-foreground/80 transition hover:text-foreground/100",
            isMounted ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          )}
        >
          KJ
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-3 py-1.5 text-sm transition duration-300",
                isMounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                activeSection === item.href.replace("#", "")
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
              style={{ transitionDelay: `${100 + index * 80}ms` }}
            >
              {(() => {
                const key = item.href.replace("#", "");
                return (
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full opacity-0 transition-all duration-300",
                      auraStyles[key] ?? "bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.45),_transparent_65%)]",
                      activeSection === key
                        ? "opacity-100 blur-md scale-110"
                        : "group-hover:opacity-100 group-hover:blur-md group-hover:scale-105"
                    )}
                  />
                );
              })()}
              <span
                className="relative z-10 font-medium tracking-[0.12em] uppercase"
              >
                {item.label}
              </span>
            </Link>
          ))}
          <Link
            href="/Kenneth_Jezreel.pdf"
            className={cn(
              "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-3 py-1.5 text-sm transition duration-300",
              isMounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            )}
            style={{ transitionDelay: `${100 + navigation.length * 80}ms` }}
          >
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.45),_transparent_65%)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:blur-md group-hover:scale-105" />
            <span className="relative z-10 font-medium tracking-[0.12em] uppercase text-muted-foreground group-hover:text-foreground">
              Resume
            </span>
          </Link>
        </nav>

        <div
          className={cn(
            "flex items-center gap-3 transition duration-500",
            isMounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          )}
          style={{ transitionDelay: `${100 + (navigation.length + 1) * 80}ms` }}
        >
          <Button
            asChild
            size="sm"
            variant="ghost"
            className={cn(
              "hidden rounded-full border border-border/70 bg-white/80 px-4 py-0 text-xs font-semibold uppercase tracking-[0.35em] transition md:inline-flex",
              "dark:bg-background/60",
              activeSection === "contact"
                ? "border-primary/60 text-foreground shadow-[0_12px_40px_-18px_rgba(59,130,246,0.35)]"
                : "hover:border-border"
            )}
          >
            <Link href="#contact">Let&apos;s Talk</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
