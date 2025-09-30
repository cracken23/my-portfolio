import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProjectsProps = {
  isActive?: boolean;
};

const Projects = ({ isActive = false }: ProjectsProps) => {
  const projects = [
    {
      title: "Knowflow",
      description:
        "A research automation companion that turns GitHub repositories into IEEE-ready documentation with LLM agents and custom workflows.",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&h=600&fit=crop",
      tech: ["Next.js", "TypeScript", "Flask"],
      github: "https://www.github.com/cracken23/knowflow",
      live: "https://knowflow-three.vercel.app/",
    },
    {
      title: "Task Management Hub",
      description:
        "A collaborative workspace with real-time syncing, team dashboards, and kanban boards. Crafted for hybrid teams to stay aligned.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "Firebase", "Tailwind"],
      github: "https://github.com/cracken23",
      live: "https://github.com/cracken23",
    },
    {
      title: "Weather Vision",
      description:
        "A responsive weather intelligence dashboard with geolocation, radar overlays, and time-series analytics for any city worldwide.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop",
      tech: ["Vue", "TypeScript", "Chart.js"],
      github: "https://github.com/cracken23",
      live: "https://github.com/cracken23",
    },
  ];

  return (
    <section
      id="projects"
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-slate-50/95 via-white/95 to-fuchsia-50/80 px-4 py-24 shadow-[0_60px_170px_-90px_rgba(148,163,184,0.6)] transition duration-500 sm:px-6",
        "dark:from-background dark:via-background dark:to-background/70",
        isActive
          ? "border-primary/50 shadow-[0_70px_190px_-95px_rgba(59,130,246,0.4)] ring-1 ring-primary/15 dark:shadow-[0_75px_210px_-100px_rgba(59,130,246,0.36)]"
          : "hover:border-border/60"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] blur-3xl transition-opacity duration-700",
          "bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.3),_transparent_60%),radial-gradient(circle_at_left,_rgba(236,72,153,0.28),_transparent_58%),radial-gradient(circle_at_right,_rgba(59,130,246,0.28),_transparent_58%)]",
          "dark:bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.55),_transparent_58%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.48),_transparent_62%),radial-gradient(circle_at_left,_rgba(236,72,153,0.42),_transparent_60%),radial-gradient(circle_at_right,_rgba(59,130,246,0.44),_transparent_60%)]",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-[-25%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.22),_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-30%] right-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.24),_transparent_68%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(130deg,_rgba(255,255,255,0.5),_rgba(255,255,255,0))] dark:bg-[linear-gradient(130deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0))]" />
      </div>

  <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="A snapshot of products where I&apos;ve led end-to-end execution—from concept and architecture to shipped polish."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={cn(
                "group relative overflow-hidden border bg-background/80 shadow-[0_35px_110px_-70px_rgba(15,23,42,0.75)] backdrop-blur transition duration-300",
                isActive
                  ? "border-primary/40 shadow-[0_45px_140px_-85px_rgba(59,130,246,0.45)] ring-1 ring-primary/10"
                  : "border-border/50 hover:border-border/70 hover:shadow-[0_45px_140px_-85px_rgba(15,23,42,0.85)]"
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-transparent opacity-0 transition-opacity duration-300",
                  isActive ? "opacity-100" : "group-hover:opacity-100"
                )}
              />

              <CardHeader className="space-y-5 pb-0">
                <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-white/80 backdrop-blur">
                    Case study
                  </div>
                </div>

                <div className="space-y-3">
                  <CardTitle className="text-2xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={cn(
                        "rounded-full border bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition",
                        isActive
                          ? "border-primary/30 text-foreground"
                          : "border-border/60 group-hover:border-border group-hover:text-foreground"
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "flex-1 border-border/70 bg-background/80 text-sm transition",
                    isActive ? "border-primary/40 text-foreground" : "hover:border-foreground"
                  )}
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className={cn(
                    "flex-1 bg-gradient-to-r from-rose-400 via-pink-500 to-orange-400 text-sm text-white shadow-lg transition hover:shadow-xl dark:from-sky-500 dark:via-blue-500 dark:to-indigo-500",
                    isActive && "shadow-[0_30px_90px_-60px_rgba(244,114,182,0.55)]"
                  )}
                  onClick={() => window.open(project.live, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="relative flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-background/80 px-6 py-10 text-center text-sm text-muted-foreground shadow-inner backdrop-blur lg:flex-row lg:justify-between lg:text-left">
          <div className="space-y-2">
            <h3 className="text-base font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
              Want a deeper dive?
            </h3>
            <p>
              Let&apos;s chat about the process, architecture, and results of these projects—or tailor something new for your team.
            </p>
          </div>
          <Button
            size="lg"
            variant="ghost"
            className="w-full rounded-full border border-border/70 bg-background/70 px-8 py-0 text-xs font-semibold uppercase tracking-[0.35em] hover:border-foreground md:w-auto"
            onClick={() => window.open(process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL, "_blank")}
          >
            Schedule a walkthrough
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;