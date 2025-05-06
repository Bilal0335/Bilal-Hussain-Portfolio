"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      opacity: number;
      speedX: number;
      speedY: number;
      color: string;
    }>
  >([]);
  const [isMounted, setIsMounted] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Initialize particles
  useEffect(() => {
    const newParticles = [];
    const darkColors = ["#00F0FF", "#00E5FF", "#00D4FF", "#00C0FF"]; // Aqua/teal colors for dark mode
    const lightColors = ["#0077B6", "#0096C7", "#00B4D8", "#48CAE4"]; // Blue colors for light mode

    // const darkColors = ["#1E293B", "#0F172A", "#334155", "#1E40AF"];

    // const lightColors = ["#1E3A8A", "#2563EB", "#3B82F6", "#0EA5E9"];


    for (let i = 0; i < 80; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        opacity: Math.random() * 0.6 + 0.2,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: Math.random() * 0.8 + 0.5,
        color: document.documentElement.classList.contains("dark")
          ? darkColors[Math.floor(Math.random() * darkColors.length)]
          : lightColors[Math.floor(Math.random() * lightColors.length)],
      });
    }

    setParticles(newParticles);
  }, []);

  // Loading animation sequence
  useEffect(() => {
    const load = () => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
          clearInterval(interval);
          setLoadingProgress(100);
          setTimeout(() => setIsMounted(true), 500);
        } else {
          setLoadingProgress(progress);
        }
      }, 100);
    };

    load();
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      const interval = setInterval(() => {
        setParticles((prev) =>
          prev.map((p) => ({
            ...p,
            x: (p.x + p.speedX) % 100,
            y: (p.y + p.speedY) % 100,
            opacity: 0.2 + Math.sin(Date.now() / 1000 + p.id) * 0.3,
          }))
        );
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isInView, controls]);

  const codingQuotes = [
    "First, solve the problem. Then, write the code. - John Johnson",
    "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
    "Code is like humor. When you have to explain it, it's bad. - Cory House",
    "Make it work, make it right, make it fast. - Kent Beck",
  ];

  const randomQuote =
    codingQuotes[Math.floor(Math.random() * codingQuotes.length)];

  return (
    <section
      ref={ref}
      className="relative mt-14 h-[850px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 md:h-[570px]"
      id="home"
    >
      {/* Preloader Animation */}
      <AnimatePresence>
        {!isMounted && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black dark:bg-white bg-opacity-90 dark:bg-opacity-90 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 dark:text-cyan-600 mb-6 text-center"
            >
              Welcome to Bilal's Portfolio
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: ["0%", "70%"] }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-2 bg-cyan-200 dark:bg-cyan-300 rounded-full w-full max-w-md mb-4 relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 h-full bg-cyan-400 dark:bg-cyan-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-cyan-100 dark:text-cyan-800 text-center max-w-md"
            >
              Passionately crafting engaging digital experiences with precision.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Aqua Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [
                particle.opacity,
                particle.opacity * 1.5,
                particle.opacity,
              ],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Aqua Glow Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-cyan-400 dark:bg-cyan-600 blur-3xl opacity-20 dark:opacity-15"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-teal-400 dark:bg-teal-600 blur-3xl opacity-20 dark:opacity-15"
      />

      <div className="container mx-auto px-4 z-10 -mt-5 md:mt-0">
        <div className="flex ml-0 flex-col md:flex-row items-center justify-between gap-8 pt-10 md:ml-6 md:pt-0 mt-10">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-6xl -mt-20 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-gray-900 mb-4"
              >
                I'm{" "}
                <span className="text-cyan-400 dark:text-cyan-600 bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 dark:from-cyan-600 dark:to-teal-600">
                  Muhammad Bilal Hussain
                </span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="h-16 mb-8 text-lg sm:text-xl md:text-2xl text-gray-300 dark:text-gray-600 font-medium"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "Frontend Specialist",
                  1500,
                  "Backend Engineer",
                  1500,
                  "UI/UX Architect",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-cyan-400 dark:text-cyan-600"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mb-6"
            >
              <p className="text-gray-300 dark:text-gray-600 mb-4 -mt-10 max-w-lg text-sm sm:text-base">
                Crafting elegant solutions to complex problems with clean,
                efficient code. Passionate about building intuitive user
                experiences that make an impact.
              </p>
              <div className="text-xs sm:text-sm text-cyan-300 dark:text-cyan-700 italic min-h-[40px] sm:min-h-[60px]">
                <TypeAnimation
                  sequence={[randomQuote, 10000, "", 1000]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  speed={40}
                  deletionSpeed={60}
                  style={{ display: "inline-block" }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                href="/mt.pdf"
                download
                className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-600 dark:to-teal-600 dark:text-white text-gray-900 rounded-full font-medium shadow-lg hover:from-cyan-400 hover:to-teal-400 dark:hover:from-cyan-500 dark:hover:to-teal-500 transition-all relative overflow-hidden group text-sm sm:text-base"
              >
                <span className="relative z-10">Download Resume</span>
                <motion.span
                  className="absolute inset-0 bg-cyan-400 dark:bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                href="mailto:musfirahtabassum1510@gmail.com"
                className="px-5 py-2 sm:px-6 sm:py-3 border-2 border-cyan-400 dark:border-cyan-600 text-cyan-400 dark:text-cyan-600 rounded-full font-medium shadow-lg hover:bg-cyan-400 hover:text-gray-900 dark:hover:bg-cyan-600 dark:hover:text-gray-100 transition-all relative overflow-hidden group text-sm sm:text-base"
              >
                <span className="relative z-10">Hire Me</span>
                <motion.span
                  className="absolute inset-0 bg-cyan-400 dark:bg-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-300 dark:border-cyan-600 overflow-hidden shadow-xl bg-white relative group">
                  <Image
                    src="/mt.jpg"
                    alt="Muhammad Bilal Hussain"
                    width={320}
                    height={320}
                    className="w-full h-full object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-cyan-400 dark:bg-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-cyan-300 dark:border-cyan-600 opacity-50"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-cyan-300 dark:border-cyan-600 opacity-50"
              />

              {/* Tech stack floating badges */}
              {["React", "Next.js", "Node", "TypeScript"].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.2, duration: 0.5 }}
                  className={`absolute text-xs sm:text-sm ${
                    i === 0
                      ? "-top-3 right-3 sm:-top-4 sm:right-4"
                      : i === 1
                      ? "top-1/4 -right-3 sm:top-1/4 sm:-right-4"
                      : i === 2
                      ? "bottom-1/4 -left-3 sm:bottom-1/4 sm:-left-4"
                      : "-bottom-3 left-6 sm:-bottom-4 sm:left-8"
                  } bg-gray-900 dark:bg-gray-100 px-2 py-1 sm:px-3 sm:py-1 rounded-full shadow-md font-medium text-cyan-400 dark:text-cyan-600 border border-cyan-400/30 dark:border-cyan-600/30 z-20`}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
