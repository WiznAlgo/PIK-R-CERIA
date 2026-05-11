import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <Badge variant="yellow" className="mb-4">
          {eyebrow}
        </Badge>
      ) : null}
      <h1 className="text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
