import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`max-w-7xl w-full mx-auto py-10 md:py-20 px-6 md:px-12 lg:px-20 bg-background text-foreground`}>
      {children}
    </main>
  );
};
