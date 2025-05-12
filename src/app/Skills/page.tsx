"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiPython,
} from "react-icons/si";

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  const skills = [
    {
      category: "Design Tools",
      items: [
        {
          name: "Figma",
          icon: <FaFigma className="text-2xl text-[#F24E1E]" />,
          level: 60,
        },
        {
          name: "Canva",
          icon: <SiCanva className="text-2xl text-[#31A8FF]" />,
          level: 75,
        },
      ],
    },
    {
      category: "Frontend",
      items: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-2xl text-[#E34F26]" />,
          level: 95,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-2xl text-[#1572B6]" />,
          level: 80,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-2xl text-[#F7DF1E]" />,
          level: 80,
        },
      ],
    },
    {
      category: "Frameworks",
      items: [
        {
          name: "React",
          icon: <FaReact className="text-2xl text-[#61DAFB]" />,
          level: 75,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-2xl text-black dark:text-white" />,
          level: 75,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-2xl text-[#06B6D4]" />,
          level: 70,
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-2xl text-[#3178C6]" />,
          level: 70,
        },
        {
          name: "Python",
          icon: <SiPython className="text-2xl text-yellow-600" />,
          level: 60,
        },
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 md:h-[800px] px-4 py-20"
      id="skills"
    >
      {/* Floating tech elements */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
              rotate: Math.random() * 360,
              opacity: 0.1 + Math.random() * 0.3,
            }}
            animate={{
              x: [null, Math.random() * 1000],
              y: [null, Math.random() * 1000],
              rotate: [null, 360],
            }}
            transition={{
              duration: 30 + Math.random() * 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className={`absolute ${
              i % 4 === 0
                ? "text-cyan-400/20 dark:text-cyan-600/20"
                : i % 3 === 0
                ? "text-teal-400/20 dark:text-teal-600/20"
                : "text-white/10 dark:text-black/10"
            } text-4xl`}
          >
            {i % 4 === 0 ? "< />" : i % 3 === 0 ? "{ }" : "</>"}
          </motion.div>
        ))}
      </motion.div>

      {/* Glow effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-cyan-400 dark:bg-cyan-600 blur-3xl opacity-20 dark:opacity-15"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-teal-400 dark:bg-teal-600 blur-3xl opacity-20 dark:opacity-15"
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-6xl mx-auto z-10 w-full"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl -mt-40 font-bold text-cyan-400 dark:text-cyan-600 mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-cyan-400/70 dark:bg-cyan-600/70 mx-auto mb-6"></div>
          <p className="text-gray-300 dark:text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to create exceptional digital
            experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: false }}
              className="bg-gray-900/50 dark:bg-gray-100/50 backdrop-blur-sm rounded-xl border border-gray-800 dark:border-gray-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-400/20 dark:hover:shadow-cyan-600/20 transition-all duration-300"
            >
              <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300 border-b border-gray-800 dark:border-gray-300">
                <h3 className="text-xl font-semibold text-cyan-300 dark:text-cyan-700">
                  {category.category}
                </h3>
              </div>
              <div className="p-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: false }}
                    className="mb-4 last:mb-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-800 dark:bg-gray-200 p-2 rounded-lg">
                          {skill.icon}
                        </div>
                        <span className="text-gray-200 dark:text-gray-800 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-cyan-400 dark:text-cyan-600 text-sm font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 dark:bg-gray-300 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + skillIndex * 0.1,
                        }}
                        viewport={{ once: false }}
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 dark:from-cyan-600 dark:to-teal-600"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 text-cyan-400/80 dark:text-cyan-600/80">
            <div className="w-16 h-px bg-cyan-400/50 dark:bg-cyan-600/50"></div>
            <span className="text-sm font-medium">CONTINUOUSLY LEARNING</span>
            <div className="w-16 h-px bg-cyan-400/50 dark:bg-cyan-600/50"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
