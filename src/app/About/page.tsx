"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaAtom, FaBookMedical } from "react-icons/fa";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.98]);

  const educationItems = [
    {
      icon: (
        <FaGraduationCap className="text-cyan-400 dark:text-cyan-600 text-xl" />
      ),
      title: "Matriculation (2020)",
      institution: "Takbeer Secondary School, Karachi",
      detail: "Science - Board of Secondary Education Karachi",
    },
    {
      icon: (
        <FaGraduationCap className="text-cyan-400 dark:text-cyan-600 text-xl" />
      ),
      title: "Intermediate (2022)",
      institution: "Aisha Bawany Govt. College, Karachi",
      detail: "Pre-Engineering - Board of Intermediate Education Karachi",
    },
    {
      icon: (
        <FaGraduationCap className="text-cyan-400 dark:text-cyan-600 text-xl" />
      ),
      title: "BS Software Engineering (Ongoing)",
      institution: "Sindh Madressatul Islam University (SMIU), Karachi",
    },
 {
    icon: (
      <FaGraduationCap className="text-cyan-400 dark:text-cyan-600 text-xl" />
    ),
    title: "Certified Cloud Applied Generative AI Engineer (GenEng)",
    institution: "Governor House, Karachi",
    detail: "Completed during ongoing BS studies",
  },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 md:h-[700px] px-4"
      id="about"
    >
      {/* Subtle floating molecules */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 800,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: [null, Math.random() * 1000],
              y: [null, Math.random() * 800],
              rotate: [null, Math.random() * 360],
            }}
            transition={{
              duration: 40 + Math.random() * 40,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className={`absolute ${
              i % 3 === 0
                ? "text-cyan-400/30 dark:text-cyan-600/20 text-3xl"
                : "text-teal-400/20 dark:text-teal-600/15 text-xl"
            }`}
          >
            <FaAtom />
          </motion.div>
        ))}
      </motion.div>

      <motion.div style={{ scale, opacity }} className="max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl mt-14 md:text-5xl font-bold text-cyan-100 dark:text-cyan-900 mb-4">
            Academic Background
          </h2>
          <div className="w-20 h-1 bg-cyan-400/70 dark:bg-cyan-600/70 mx-auto mb-6"></div>
          <motion.p
            style={{ y: yText }}
            className="text-cyan-50/90 dark:text-cyan-900/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            My academic journey has equipped me with a solid foundation in{" "}
            <span className="text-cyan-400 dark:text-cyan-600 font-medium">
              software development{" "}
            </span>
            and a{" "}
            <span className="text-cyan-400 dark:text-cyan-600 font-medium">
              problem-solving mindset{" "}
            </span>
            to tackle complex technical challenges and thrive in the tech
            industry.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 dark:from-gray-200/80 dark:to-gray-100/80 p-6 rounded-xl border border-cyan-400/20 dark:border-cyan-600/20 hover:border-cyan-400/40 dark:hover:border-cyan-600/40 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              <div className="flex flex-col items-start">
                <div className="bg-cyan-400/10 dark:bg-cyan-600/10 p-3 rounded-full mb-4 border border-cyan-400/20 dark:border-cyan-600/20">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-cyan-200 dark:text-cyan-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-cyan-100 dark:text-cyan-900 font-medium mb-2">
                  {item.institution}
                </p>
                <p className="text-cyan-100/80 dark:text-cyan-900/80">
                  {item.detail}
                </p>
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
          <div className="inline-flex items-center gap-2 text-cyan-400/80 dark:text-cyan-600/80">
            <div className="w-8 h-px bg-cyan-400/50 dark:bg-cyan-600/50"></div>
            <FaAtom className="text-cyan-400/50 dark:text-cyan-600/50" />
            <div className="w-8 h-px bg-cyan-400/50 dark:bg-cyan-600/50"></div>
          </div>
          <p className="text-cyan-100/80 dark:text-cyan-900/80 italic mt-4 mb-10 max-w-2xl mx-auto text-lg">
            "The art of software development consists of engaging the user while
            innovation solves the problem."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
