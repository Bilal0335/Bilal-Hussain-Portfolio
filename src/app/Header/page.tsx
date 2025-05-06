"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    // Apply the theme class to the document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    // Save the theme preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHashLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      // Close mobile menu first
      setIsOpen(false);

      // If we're already on the home page, scroll to the section
      if (pathname === "/") {
        // Small timeout to ensure menu is closed before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // If we're on another page, navigate to home with hash
        router.push(`/${href}`);
      }
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);

      // If we've landed on home page with a hash, scroll to section
      if (pathname === "/" && window.location.hash) {
        setTimeout(() => {
          const element = document.querySelector(window.location.hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    handleRouteChange();
  }, [pathname]);

  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link
              href="/"
              className="text-2xl font-bold text-white dark:text-black hover:text-teal-100 dark:hover:text-cyan-600 transition-colors italic"
              onClick={() => setIsOpen(false)}
            >
              &lt; Bilal Hussain /&gt;
            </Link>
          </motion.div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            {/* <motion.button
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              className="p-2 rounded-full focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </motion.button> */}

            {/* Desktop Navigation */}
            <nav className="hidden z-50 md:z-50 md:block">
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex space-x-6"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <button
                      onClick={() => handleHashLinkClick(link.href)}
                      className="text-white dark:text-black hover:text-teal-100 dark:hover:text-cyan-600 font-medium transition-colors relative group"
                    >
                      {link.name}
                      <span className="absolute left-0 bottom-0 h-0.5 bg-white dark:bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              className="p-2 rounded-full focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMenu}
                className="text-white mb-4 dark:text-black focus:outline-none"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-6 flex flex-col items-end space-y-1.5">
                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      y: isOpen ? 8 : 0,
                      width: isOpen ? "100%" : "100%",
                    }}
                    className="block h-0.5 bg-white dark:bg-black rounded-full"
                    style={{ originX: 0 }}
                  ></motion.span>
                  <motion.span
                    animate={{
                      opacity: isOpen ? 0 : 1,
                      width: isOpen ? 0 : "80%",
                    }}
                    className="block h-0.5 bg-white dark:bg-black rounded-full"
                  ></motion.span>
                  <motion.span
                    animate={{
                      rotate: isOpen ? -45 : 0,
                      y: isOpen ? -8 : 0,
                      width: isOpen ? "100%" : "60%",
                    }}
                    className="block h-0.5 bg-white dark:bg-black rounded-full"
                    style={{ originX: 0 }}
                  ></motion.span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>



        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.ul
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.2 }}
                className="py-4 space-y-4"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <button
                      onClick={() => handleHashLinkClick(link.href)}
                      className="block text-white dark:text-black hover:text-teal-100 dark:hover:text-cyan-600 font-medium py-2 px-4 rounded transition-colors w-full text-left"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>


      </div>
    </header>
  );
};

export default Header;
