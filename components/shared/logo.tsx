import { cn } from "@/lib/utils";
import { CabinIcon } from "./cabin-divider";

type Props = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className, showText = true }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-cream",
        className
      )}
    >
      <CabinIcon className="h-8 w-12 text-gold" />
      {showText ? (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg sm:text-xl tracking-wide">
            La Cabaña
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-gold-soft">
            Steak House
          </span>
        </span>
      ) : null}
    </span>
  );
}
