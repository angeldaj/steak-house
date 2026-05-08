import { Badge } from "@/components/ui/badge";
import type { Dish, DishBadge } from "@/lib/data/dishes";
import { cn } from "@/lib/utils";

const badgeLabels: Record<DishBadge, string> = {
  especialidad: "Especialidad",
  recomendado: "Recomendado",
  picante: "Picante",
  nuevo: "Nuevo",
};

export function DishCard({
  dish,
  className,
  variant = "default",
}: {
  dish: Dish;
  className?: string;
  variant?: "default" | "featured";
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-gold/15 bg-elevated/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-2xl hover:shadow-ember/10",
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
        <div
          className="absolute inset-0 bg-gradient-to-br from-ember/30 via-elevated to-base transition-transform duration-700 group-hover:scale-105"
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center justify-center text-gold/30">
          <svg
            viewBox="0 0 64 40"
            className="h-16 w-24"
            fill="none"
            aria-hidden
          >
            <path
              d="M2 36 L18 6 L34 36 M30 36 L46 8 L62 36"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {dish.badges && dish.badges.length > 0 ? (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {dish.badges.map((b) => (
              <Badge key={b} variant={b}>
                {badgeLabels[b]}
              </Badge>
            ))}
          </div>
        ) : null}
        <div className="absolute right-3 top-3 rounded-full bg-base/80 backdrop-blur px-3 py-1 text-sm font-semibold text-gold border border-gold/20">
          ${dish.price}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col gap-2 p-5",
          variant === "featured" ? "sm:p-6" : ""
        )}
      >
        <h3 className="font-display text-xl text-cream tracking-tight">
          {dish.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted line-clamp-3">
          {dish.description}
        </p>
      </div>
    </article>
  );
}
