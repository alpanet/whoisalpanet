"use client";

import { useEffect, useState } from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const GithubActivity = () => {
    const { t } = useTranslation();
    const [commitCount, setCommitCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const response = await fetch("https://api.github.com/users/alpanet/events");
                if (!response.ok) throw new Error("GitHub API error");

                const events = await response.json();
                const today = new Date().toDateString();
                let count = 0;

                events.forEach((event: any) => {
                    if (event.type === "PushEvent") {
                        const eventDate = new Date(event.created_at).toDateString();
                        if (eventDate === today) {
                            count += event.payload.size;
                        }
                    }
                });

                setCommitCount(count);
            } catch (error) {
                console.error("Failed to fetch Github activity", error);
                setCommitCount(null);
            } finally {
                setLoading(false);
            }
        };

        fetchCommits();
    }, []);

    if (loading || commitCount === null) return null;

    const hasCommits = commitCount > 0;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative group mt-4 overflow-hidden rounded-xl"
            >
                {/* Arka plan gradient efekti - sadece commit varsa */}
                {hasCommits && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                )}

                {/* Ana Kart */}
                <div className={`
          relative flex items-center justify-between p-2.5 
          border transition-all duration-300
          ${hasCommits
                        ? "bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800"
                        : "bg-gray-50/50 dark:bg-white/5 border-gray-200 dark:border-white/10"
                    }
          backdrop-blur-sm rounded-xl
        `}>

                    <div className="flex items-center gap-2.5">
                        <div className={`
              p-1.5 rounded-md transition-colors
              ${hasCommits ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" : "bg-gray-100 dark:bg-neutral-800 text-gray-500"}
            `}>
                            <IconBrandGithub size={16} stroke={2} />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 leading-none mb-0.5">
                                {t("latest_push")}
                            </span>
                            <div className="flex items-center gap-1.5">
                                <span className={`text-xs font-semibold ${hasCommits ? "text-green-700 dark:text-green-400" : "text-gray-600 dark:text-gray-400"}`}>
                                    {hasCommits ? `${commitCount} ${t("commits")}` : t("no_activity")}
                                </span>
                                {hasCommits && (
                                    <motion.span
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="flex h-1.5 w-1.5 relative"
                                    >
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                                    </motion.span>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
    );
};
