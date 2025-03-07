import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alpaslan DOGAN - Frontend UI/UX Developer",
  description:
    "Alpaslan DOGAN—an ever-evolving developer, passionate designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2 flex-1 overflow-y-auto bg-background text-foreground">
            <div className="flex-1 bg-background text-foreground min-h-screen lg:rounded-tl-xl border border-transparent lg:bg-background overflow-y-auto">
              {children}
              <Toaster />
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html >
  );
}
