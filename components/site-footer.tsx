'use client'

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200/70 dark:border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            &copy; {new Date().getFullYear()} Kenneth Jezreel. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="https://github.com/cracken23" target="_blank" rel="noreferrer">
              <Github className="h-6 w-6 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/kenneth-jezreel-a57b35237/" target="_blank" rel="noreferrer">
              <Linkedin className="h-6 w-6 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" />
            </Link>
            <Link href="mailto:kennethjezreel1@gmail.com">
              <Mail className="h-6 w-6 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
