import { Mail, MapPin, Phone, Send } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ContactProps = {
  isActive?: boolean;
};

const Contact = ({ isActive = false }: ContactProps) => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "kennethjezreel1@gmail.com",
      href: "mailto:kennethjezreel1@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 8850175023",
      href: "tel:+918850175023",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Mumbai, India",
      href: "https://maps.google.com/?q=Mumbai",
    },
  ];

  return (
    <section
      id="contact"
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-blue-50/90 via-white/95 to-slate-100/85 px-4 py-24 shadow-[0_60px_180px_-90px_rgba(148,163,184,0.58)] transition duration-500 sm:px-6",
        "dark:from-background dark:via-background dark:to-background/70",
        isActive
          ? "border-primary/50 shadow-[0_70px_200px_-95px_rgba(59,130,246,0.38)] ring-1 ring-primary/15 dark:shadow-[0_75px_200px_-100px_rgba(59,130,246,0.35)]"
          : "hover:border-border/60"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] blur-3xl transition-opacity duration-700",
          "bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),_transparent_58%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.24),_transparent_62%),radial-gradient(circle_at_left,_rgba(14,165,233,0.24),_transparent_60%),radial-gradient(circle_at_right,_rgba(147,51,234,0.22),_transparent_60%)]",
          "dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.45),_transparent_62%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.4),_transparent_65%),radial-gradient(circle_at_left,_rgba(14,165,233,0.38),_transparent_62%),radial-gradient(circle_at_right,_rgba(147,51,234,0.36),_transparent_62%)]",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.22),_transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[-25%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(147,51,234,0.24),_transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.5),_rgba(255,255,255,0))] dark:bg-[linear-gradient(120deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0))]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16">
        <SectionHeading
          eyebrow="Let&apos;s collaborate"
          title="Get in touch"
          description="Ready for an intro call, code review, or product jam? Drop a note—my inbox is always open."
        />

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-8">
            <div className="space-y-4 text-base text-muted-foreground">
              <p>
                Looking to launch a new idea, accelerate a roadmap, or explore how AI can streamline your team? I&apos;d love to
                hear the vision. I respond quickly and can usually hop on a call within a couple of days.
              </p>
              <p>
                Choose what fits best—email for thoughtful briefs, a quick call if you&apos;re on the go, or a visit to Mumbai for
                a coffee-fueled jam session.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-5 shadow-inner backdrop-blur transition hover:-translate-y-1 hover:border-border"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/6 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative space-y-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-white/15 to-transparent text-foreground shadow-inner">
                      {info.icon}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground/70">
                      {info.title}
                    </p>
                    <p className="text-sm font-medium text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/80 p-6 text-sm text-muted-foreground shadow-inner backdrop-blur">
              <p>
                Prefer asynchronous collaboration? I can provide async video walkthroughs, loom audits, or detailed architecture
                docs tailored to your project.
              </p>
            </div>
          </div>

          <Card className="relative overflow-hidden border border-border/60 bg-background/80 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.75)] backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-transparent" />
            <CardHeader className="relative">
              <CardTitle className="text-xl font-semibold tracking-tight text-foreground">Start a conversation</CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">
                Share a few details and I&apos;ll follow up with next steps, relevant work samples, or a booking link.
              </p>
            </CardHeader>
            <CardContent className="relative">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                      Your name
                    </label>
                    <Input placeholder="Ada Lovelace" className="border-border/60 bg-background/80" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                      Email
                    </label>
                    <Input type="email" placeholder="you@example.com" className="border-border/60 bg-background/80" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                    How can I help?
                  </label>
                  <Textarea
                    placeholder="Share a quick brief, project goals, or timelines…"
                    rows={5}
                    className="resize-none border-border/60 bg-background/80"
                  />
                </div>

                <Button className="group w-full bg-gradient-to-r from-rose-400 via-pink-500 to-orange-400 py-6 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:shadow-xl dark:from-sky-500 dark:via-blue-500 dark:to-indigo-500">
                  <Send className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Send message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;