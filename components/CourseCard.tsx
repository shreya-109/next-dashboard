"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

type Props = {
  title: string;
  progress: number;
};

export default function CourseCard({ title, progress }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <BookOpen size={20} />
        <h2 className="font-semibold">{title}</h2>
      </div>

      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-blue-500 rounded-full"
        />
      </div>

      <p className="mt-3 text-sm text-zinc-400">
        {progress}% completed
      </p>
    </motion.article>
  );
}