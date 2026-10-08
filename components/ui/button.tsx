import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium text-[#2f4a52] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84c0b4] disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        default: "bg-[#FAD5B3] text-[#2A150C] hover:bg-[#FFC2AA]",
        secondary: "border border-[#84c0b4] bg-[#e2f6fe] text-[#2f4a52] hover:bg-[#f0d8a8]",
        outline: "border border-[#2f4a52]/30 bg-[#f0d8a8] text-[#2f4a52] hover:bg-[#f0b478]",
        ghost: "text-[#2f4a52] hover:bg-[#f0d8a8]",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
