import { Award, Coffee, Code2, Heart } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

type AboutProps = {
  isActive?: boolean;
};

const About = ({ isActive = false }: AboutProps) => {
  const stats = [
    { icon: <Code2 className="h-6 w-6" />, value: "3+", label: "Years shipping software" },
    { icon: <Award className="h-6 w-6" />, value: "50+", label: "Projects launched" },
    { icon: <Coffee className="h-6 w-6" />, value: "∞", label: "Cups of curiosity" },
    { icon: <Heart className="h-6 w-6" />, value: "100%", label: "Care for the craft" },
  ];

  const principles = [
    {
      title: "Product-minded engineering",
      description:
        "I approach every feature like a product owner—aligning user needs, clear UX, and technical pragmatism.",
    },
    {
      title: "Crafted systems",
      description:
        "From design systems to API contracts, I obsess over the details that make experiences cohesive and scalable.",
    },
    {
      title: "Momentum & collaboration",
      description:
        "I thrive in close partnerships with designers, PMs, and founders, keeping projects shipping with healthy velocity.",
    },
  ];

  return (
    <section
      id="about"
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-amber-50/90 via-white/95 to-emerald-50/75 px-4 py-24 shadow-[0_55px_150px_-85px_rgba(148,163,184,0.55)] transition duration-500 sm:px-6",
        "dark:from-background dark:via-background dark:to-background/65",
        isActive
          ? "border-primary/50 shadow-[0_65px_180px_-90px_rgba(59,130,246,0.38)] ring-1 ring-primary/15 dark:shadow-[0_70px_200px_-95px_rgba(59,130,246,0.35)]"
          : "hover:border-border/60"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] blur-3xl transition-opacity duration-700",
          "bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.22),_transparent_58%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.2),_transparent_62%),radial-gradient(circle_at_left,_rgba(251,191,36,0.18),_transparent_58%),radial-gradient(circle_at_right,_rgba(16,185,129,0.2),_transparent_60%)]",
          "dark:bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.38),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.32),_transparent_65%),radial-gradient(circle_at_left,_rgba(250,204,21,0.28),_transparent_60%),radial-gradient(circle_at_right,_rgba(16,185,129,0.32),_transparent_62%)]",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_70%)] blur-3xl" />
        <div className="absolute right-[-18%] top-8 h-96 w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(22,163,74,0.2),_transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.45),_rgba(255,255,255,0))] dark:bg-[linear-gradient(120deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0))]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="The person"
            title="About me"
            description="A developer driven by curiosity, empathy, and the thrill of turning ambitious ideas into elegant products."
            align="left"
          />

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I&apos;m in my final year of computer engineering, putting classroom theory into practice by building web apps with
              modern JavaScript and TypeScript stacks. The goal is always clear: solve real problems for classmates, campus clubs,
              or anyone who will give honest feedback.
            </p>
            <p>
              I&apos;m not a designer, but I collaborate closely with the folks who are—translating their notes and mockups into
              dependable, well-structured code. Clean architecture, considered UI decisions, and tight feedback loops keep every
              project moving forward.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-5 shadow-inner backdrop-blur transition hover:border-border"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative space-y-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-6">
          <div className="absolute -right-10 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.18),_transparent_70%)] blur-3xl lg:block" />

          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/75 p-6 text-left shadow-[0_30px_90px_-60px_rgba(15,23,42,0.65)] backdrop-blur transition hover:-translate-y-1"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative space-y-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/15 to-transparent text-foreground shadow-inner">
                    {stat.icon}
                  </span>
                  <div className="text-4xl font-semibold tracking-tight text-foreground">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border/60 bg-background/80 p-7 text-sm text-muted-foreground shadow-inner backdrop-blur">
            <p>
              Outside of assignments I help classmates debug, document what I learn, and chase the perfect cold brew. Sharing small
              wins keeps the journey collaborative and fun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;