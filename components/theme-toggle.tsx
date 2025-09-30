"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, SunMedium } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const isDark =
    theme === "dark" || (theme === "system" && resolvedTheme === "dark");

  const base =
    "h-9 w-9 inline-grid place-items-center rounded-md border transition-colors shadow-sm";
  const themed =
    "border-neutral-200 bg-white/80 text-neutral-700 hover:bg-white " +
    "dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:bg-neutral-900";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => mounted && setTheme(isDark ? "light" : "dark")}
      className={`${base} ${themed}`}
    >
      {!mounted ? (
        <SunMedium className="h-4 w-4" />
      ) : isDark ? (
        <SunMedium className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
