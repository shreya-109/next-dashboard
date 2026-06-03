"use client";
import { motion } from "framer-motion";

type Props = {
  name: string;
};

export default function HeroTile({ name }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-2 bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg"
    >
      <h1 className="text-2xl font-semibold">
        Welcome back, {name} 👋
      </h1>
      <p className="text-sm text-gray-400 mt-2">
      You're doing great — keep learning 🚀
      </p>
    </motion.article>
  );
}