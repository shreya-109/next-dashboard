"use client";

import { motion } from "framer-motion";
import { Book } from "lucide-react";

type Props = {
  title: string;
  progress: number;
};

export default function CourseCard({ title, progress }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10 shadow-lg hover:shadow-blue-500/20 transition"
    >
      <div className="flex items-center gap-2">
        <Book size={18} />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      <div className="mt-3 bg-gray-700 h-2 rounded">
        <motion.div
          className="bg-blue-500 h-2 rounded"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        />
      </div>

      <p className="text-sm mt-2">{progress}% completed</p>
    </motion.article>
  );
}