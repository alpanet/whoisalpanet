"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <I18nextProvider i18n={i18n}>
                <Sidebar />
                <div className="lg:pl-2 lg:pt-2 flex-1 overflow-y-auto bg-background text-foreground">
                    <div className="flex-1 bg-background text-foreground min-h-screen lg:rounded-tl-xl border border-transparent lg:bg-background overflow-y-auto flex flex-col">
                        <div className="flex-1">
                            {children}
                        </div>
                        <Toaster />
                        <Footer />
                    </div>
                </div>
            </I18nextProvider>
        </ThemeProvider>
    );
}
