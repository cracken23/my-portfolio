import { ArrowUpRight, Github, Mail } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { saveAs } from "file-saver";

type HeroProps = {
  isActive?: boolean;
};

const Hero = ({ isActive = false }: HeroProps) => {
  return (
    <section
      id="home"
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-slate-100/95 via-white/95 to-blue-50/80 px-4 py-24 shadow-[0_40px_120px_-60px_rgba(148,163,184,0.55)] transition duration-500 sm:px-6 md:py-28",
        "dark:from-background dark:via-background dark:to-background/60",
        isActive
          ? "border-primary/50 shadow-[0_50px_160px_-70px_rgba(59,130,246,0.45)] ring-1 ring-primary/15 dark:shadow-[0_55px_160px_-80px_rgba(59,130,246,0.4)]"
          : "hover:border-border/60"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] blur-3xl transition-opacity duration-700",
          "bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.32),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.26),_transparent_65%),radial-gradient(circle_at_left,_rgba(129,140,248,0.22),_transparent_62%),radial-gradient(circle_at_right,_rgba(236,72,153,0.2),_transparent_62%)]",
          "dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.45),_transparent_62%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.4),_transparent_68%),radial-gradient(circle_at_left,_rgba(129,140,248,0.38),_transparent_65%),radial-gradient(circle_at_right,_rgba(236,72,153,0.28),_transparent_65%)]",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-30%] h-[620px] w-[620px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2),_transparent_62%)] blur-3xl" />
        <div className="absolute -right-24 top-12 hidden h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.18),_transparent_68%)] blur-3xl lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-slate-100/90 via-white/70 to-transparent dark:from-background dark:via-background/80" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.5)_0%,_rgba(255,255,255,0)_45%)] dark:bg-[linear-gradient(135deg,_rgba(255,255,255,0.02)_0%,_rgba(255,255,255,0)_45%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-primary/80">
            Full Stack Developer
          </div>
          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Crafting human-centered digital experiences with precision and heart.
            </h1>
            <p className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
              I&apos;m Kenneth Jezreel, a full stack developer focused on building performant, inclusive apps.
              From concept to production, I blend clean code, thoughtful design, and business impact.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL, "_blank")}
              size="lg"
              className="group flex-1 bg-gradient-to-r from-rose-400 via-pink-500 to-orange-400 text-white shadow-lg transition hover:shadow-xl dark:from-sky-500 dark:via-blue-500 dark:to-indigo-500 sm:flex-none"
            >
              <span>View Recent Work</span>
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            <Button
              onClick={() =>
                fetch("/Kenneth_Jezreel.pdf")
                  .then((res) => res.blob())
                  .then((blob) => saveAs(blob, "Kenneth_Jezreel_Resume.pdf"))
              }
              variant="outline"
              size="lg"
              className="flex-1 border-border/60 bg-background/80 backdrop-blur transition hover:border-foreground/40 hover:bg-background sm:flex-none"
            >
              Download Résumé
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Let&apos;s connect
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL, "_blank")}
                className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-background/80 text-muted-foreground transition hover:border-foreground hover:text-foreground"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <Github className="h-5 w-5" />
              </button>
              <button
                onClick={() => window.open(process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL, "_blank")}
                className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-background/80 text-muted-foreground transition hover:border-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-transparent to-sky-500/30 opacity-0 transition-opacity group-hover:opacity-100" />
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    fill="#0a66c2"
                    d="M42 37c0 2.8-2.2 5-5 5H11c-2.8 0-5-2.2-5-5V11c0-2.8 2.2-5 5-5h26c2.8 0 5 2.2 5 5z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12 19h5v17h-5zm2.5-7c-1.5 0-2.5 1.1-2.5 2.5S12.9 17 14.5 17s2.5-1.1 2.5-2.5S16 12 14.5 12zM36 36h-5v-9.1c0-2.2-1.2-3.7-3.2-3.7-1.5 0-2.3 1-2.7 2-.1.4-.1.9-.1 1.4V36h-5V19h5v2.6c.7-1.1 1.9-2.6 4.8-2.6 3.6 0 6.2 2.2 6.2 7.3z"
                  ></path>
                </svg>
              </button>
              <a
                href="mailto:kennethjezreel1@gmail.com"
                className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-background/80 text-muted-foreground transition hover:border-foreground hover:text-foreground"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-transparent to-pink-500/25 opacity-0 transition-opacity group-hover:opacity-100" />
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[34px] bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-border/50 bg-background/70 p-10 shadow-[0_35px_120px_-75px_rgba(15,23,42,0.9)] backdrop-blur-xl">
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(96,165,250,0.25),_transparent_62%)] blur-2xl" />
            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(192,132,252,0.24),_transparent_62%)] blur-2xl" />

            <div className="relative flex flex-col items-center gap-8 text-center">
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 rounded-[28px] bg-[conic-gradient(from_140deg,_rgba(255,255,255,0.18)_0deg,_rgba(14,165,233,0.12)_120deg,_rgba(147,51,234,0.16)_240deg,_rgba(255,255,255,0.18)_360deg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]" />
                <div className="absolute inset-[3px] overflow-hidden rounded-[24px] border border-white/5 bg-background/90 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.9)]">
                  <Image
                    src="/profile.jpeg"
                    alt="Kenneth Jezreel"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-medium text-muted-foreground">Currently working on</h2>
                <div className="rounded-2xl border border-border/50 bg-background/80 px-6 py-5 text-left shadow-inner">
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground/80">Project</p>
                  <p className="mt-2 text-xl font-semibold text-foreground">
                    Knowflow – Research automation companion
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Leveraging AI agents to transform GitHub repos into publish-ready technical docs.
                  </p>
                </div>
              </div>

              <div className="grid w-full gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/50 bg-background/70 px-5 py-4 text-left shadow-inner">
                  <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground/80">
                    Experience
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-foreground">3+ years</p>
                </div>
                <div className="rounded-2xl border border-border/50 bg-background/70 px-5 py-4 text-left shadow-inner">
                  <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground/80">
                    Coffee count
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-foreground">∞</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
