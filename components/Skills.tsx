import { Code, Database, Globe, Server } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

type SkillsProps = {
  isActive?: boolean;
};

const Skills = ({ isActive = false }: SkillsProps) => {
  const skillCategories = [
    {
      icon: <Code className="h-7 w-7 text-sky-400" />,
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      icon: <Server className="h-7 w-7 text-emerald-400" />,
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "Flask"],
    },
    {
      icon: <Database className="h-7 w-7 text-amber-400" />,
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Supabase"],
    },
    {
      icon: <Globe className="h-7 w-7 text-purple-400" />,
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vercel"],
    },
  ];

  return (
    <section
      id="skills"
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-slate-50/95 via-white/95 to-sky-50/85 px-4 py-24 shadow-[0_50px_140px_-80px_rgba(148,163,184,0.55)] transition duration-500 sm:px-6",
        "dark:from-background dark:via-background dark:to-background/60",
        isActive
          ? "border-primary/50 shadow-[0_60px_160px_-85px_rgba(59,130,246,0.4)] ring-1 ring-primary/15 dark:shadow-[0_65px_160px_-90px_rgba(59,130,246,0.38)]"
          : "hover:border-border/60"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] blur-3xl transition-opacity duration-700",
          "bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.24),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(99,102,241,0.22),_transparent_64%),radial-gradient(circle_at_left,_rgba(14,165,233,0.2),_transparent_60%),radial-gradient(circle_at_right,_rgba(236,72,153,0.18),_transparent_60%)]",
          "dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.38),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(120,113,198,0.36),_transparent_65%),radial-gradient(circle_at_left,_rgba(14,165,233,0.32),_transparent_62%),radial-gradient(circle_at_right,_rgba(236,72,153,0.26),_transparent_62%)]",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-72 w-[640px] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(129,140,248,0.22),_transparent_65%)] blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.2),_transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.45),_rgba(255,255,255,0))] dark:bg-[linear-gradient(120deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0))]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & Technologies"
          description="An end-to-end stack combining delightful UI, dependable services, and resilient infrastructure."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/75 p-6 shadow-[0_25px_80px_-50px_rgba(15,23,42,0.75)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-border"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-white/3" />
              <div className="relative space-y-5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/15 to-transparent text-foreground shadow-inner">
                  {category.icon}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-sm font-medium text-muted-foreground transition group-hover:border-border/80 group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(129,140,248,0.25),_transparent_70%)] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ transitionDelay: `${index * 40}ms` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;