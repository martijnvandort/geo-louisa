import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl border border-[#2f4a52]/25 bg-[#e2f6fe] px-3 py-2 text-sm text-[#2f4a52] outline-none placeholder:text-[#5d7a82] focus-visible:ring-2 focus-visible:ring-[#84c0b4] disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
