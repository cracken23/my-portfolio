import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : align === "right"
        ? "text-right items-end"
        : "text-center items-center";

  return (
    <div className={cn("flex flex-col gap-3", alignment, className)}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary/80">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-balance text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
