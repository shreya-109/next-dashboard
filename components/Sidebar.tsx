"use client";

import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <nav className="w-64 h-screen bg-black/40 backdrop-blur-lg p-6 border-r border-white/10">
      <h2 className="text-xl font-bold mb-8 text-white">Dashboard</h2>

      <ul className="space-y-4 text-gray-400">

        <motion.li
          whileTap={{ scale: 0.95 }}
          className="hover:text-white cursor-pointer"
        >
          Home
        </motion.li>

        <motion.li
          whileTap={{ scale: 0.95 }}
          className="hover:text-white cursor-pointer"
        >
          Courses
        </motion.li>

        <motion.li
          whileTap={{ scale: 0.95 }}
          className="hover:text-white cursor-pointer"
        >
          Activity
        </motion.li>

        <motion.li
          whileTap={{ scale: 0.95 }}
          className="hover:text-white cursor-pointer"
        >
          Settings
        </motion.li>

      </ul>
    </nav>
  );
}