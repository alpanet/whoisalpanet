import React from "react";

import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

// Font files can be colocated inside of `app`
const CalSans = localFont({
  src: [{ path: "../../fonts/CalSans-SemiBold.woff2" }],
  display: "swap",
});

type HeadingProps = {
  className?: string;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};

export const Heading = ({ className, children, as = "h1" }: HeadingProps) => {
  const Component = as;
  return (
    <Component
      className={twMerge(
        CalSans.className,
        "text-base md:text-xl lg:text-4xl font-semibold text-black dark:text-white",
        className
      )}
    >
      {children}
    </Component>
  );
};
