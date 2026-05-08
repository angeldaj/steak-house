import { cn } from "@/lib/utils";
import { CabinDivider } from "./cabin-divider";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  divider?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  divider = true,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow ? (
        <span className="font-script text-gold text-2xl sm:text-3xl leading-none">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-fluid-h2 text-cream max-w-3xl">
        {title}
      </h2>
      {divider && align === "center" ? (
        <CabinDivider variant="small" className="h-6 w-20 mt-1" />
      ) : null}
      {description ? (
        <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
