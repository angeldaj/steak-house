import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-ember text-cream hover:bg-ember-bright shadow-lg shadow-ember/20 hover:shadow-ember/40",
        secondary:
          "bg-elevated text-cream hover:bg-surface border border-gold/20 hover:border-gold/40",
        outline:
          "border border-gold/40 text-cream hover:bg-elevated hover:border-gold",
        ghost: "text-cream hover:bg-elevated/60",
        gold: "bg-gold text-base hover:bg-gold-soft shadow-lg shadow-gold/20",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebe5b] shadow-lg shadow-[#25D366]/20",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base min-h-[44px]",
        xl: "h-14 px-10 text-base sm:text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
