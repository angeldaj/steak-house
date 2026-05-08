import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider",
  {
    variants: {
      variant: {
        especialidad: "bg-ember/20 text-ember-bright border border-ember/30",
        recomendado: "bg-gold/20 text-gold border border-gold/30",
        nuevo: "bg-cream/15 text-cream border border-cream/25",
        picante: "bg-red-500/20 text-red-400 border border-red-500/30",
        muted: "bg-elevated text-muted border border-gold/15",
      },
    },
    defaultVariants: { variant: "muted" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
