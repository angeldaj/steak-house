import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "flex h-11 w-full rounded-md border border-gold/20 bg-elevated/60 px-4 py-2 text-sm text-cream placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-gold transition-colors",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
