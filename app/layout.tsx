// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Kenneth Jezreel - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-[-40vh] z-0 h-[80vh] bg-[radial-gradient(circle_at_top,_hsl(222_80%_70%/0.25),_transparent_55%)] blur-2xl" />
            <div className="pointer-events-none absolute -right-40 top-1/4 z-0 hidden h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,_hsl(270_85%_70%/0.18),_transparent)] blur-3xl lg:block" />

            <div className="relative z-10 flex flex-1 flex-col">
              <SiteHeader />
              <main className="flex-1 pb-24">
                <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                  {children}
                </div>
              </main>
              <SiteFooter />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
