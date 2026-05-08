import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "full" | "small";
};

export function CabinDivider({ className, variant = "small" }: Props) {
  if (variant === "small") {
    return (
      <svg
        viewBox="0 0 80 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className={cn("text-gold", className)}
      >
        <path
          d="M2 22 L20 4 L38 22 M42 22 L58 6 L74 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 4 L20 22 M58 6 L58 22"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.5"
        />
        <circle cx="40" cy="22" r="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 text-gold/60",
        className
      )}
      aria-hidden
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
      <CabinDivider variant="small" className="h-6 w-20" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}

export function CabinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("text-gold", className)}
    >
      <path
        d="M2 36 L18 6 L34 36 M30 36 L46 8 L62 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 6 L18 36 M46 8 L46 36"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M10 22 L26 22 M38 24 L54 24"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}
