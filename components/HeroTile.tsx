"use client";

import { motion } from "framer-motion";

type Props = {
  name?: string;
};

export default function HeroTile({ name }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="col-span-2 bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg"
    >
      <h1 className="text-2xl font-semibold">
        Welcome back, {name || "Shreya"} 👋
      </h1>

      <p className="text-sm text-gray-400 mt-2">
        You're doing great — keep learning 🚀
      </p>

      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm">
        🔥 7 Day Learning Streak
      </div>
    </motion.article>
  );
}