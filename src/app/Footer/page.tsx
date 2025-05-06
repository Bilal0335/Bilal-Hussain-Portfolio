"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gray-900 dark:bg-white border-t border-gray-800 py-8 px-4">
      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-cyan-400 blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-teal-400 blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-1 text-gray-400 text-sm"
        >
          <span>Made with</span>
          <FaHeart className="text-rose-500 animate-pulse" />
          <span>by Bilal Hussain</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-xs md:text-sm"
        >
          © {new Date().getFullYear()} All Rights Reserved
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <a
            href="#home"
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            Back to Top
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
