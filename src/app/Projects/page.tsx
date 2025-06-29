"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiHtml5,
} from "react-icons/si";
import Image from "next/image";

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Panaverse DAO Official Website",
      description:
        "Official website for the Presidential Initiative for Artificial Intelligence and Computing (PIAIC).",
      tags: ["Next.js", "Tailwind CSS"],
      image: "/panaverse-dao.png",
      live: "https://panaverse-dao-stagings.vercel.app/",
      icon: (
        <SiNextdotjs className="text-xl md:text-2xl text-black dark:text-white" />
      ),
    },
    {
      title: "Minecraft Website",
      description:
        "Interactive Minecraft website with authentication, cart, and Stripe integration.",
      tags: ["Clerk", "Next.js", "TailwindCSS", "Stripe"],
      image: "/project2.jpg",
      live: "https://shock-smp.vercel.app/",
      icon: <FaReact className="text-xl md:text-2xl text-[#61DAFB]" />,
    },
    {
      title: "E-Commerce Website",
      description:
        "Full Ecommerce website with Stripe payments and authentication.",
      tags: ["TypeScript", "TailwindCSS", "Nextjs", "Stripe"],
      image: "/project3.jpg",
      live: "https://final-hackathon-3-zzop.vercel.app/",
      icon: <SiTypescript className="text-xl md:text-2xl text-[#3178C6]" />,
    },
    {
      title: "Real Estate Website",
      description:
        "A responsive real estate landing page with login, sign-up, listings, and property highlights built using HTML, CSS, and Font Awesome.",
      tags: ["HTML", "CSS"],
      image: "/Rent House.png",
      live: "https://rstatebybilal.vercel.app/",
      icon: (
        <i className="fa-solid fa-house text-xl md:text-2xl text-blue-600" />
      ),
    },
    {
      title: "Responsive Barber Shop Website",
      description:
        "A fully responsive hair studio website built with HTML and CSS.",
      tags: ["HTML", "CSS", "Responsive Design"],
      image: "/hair-studio.png",
      live: "https://responsive-barber-shop.vercel.app/",
      icon: <SiHtml5 className="text-xl md:text-2xl text-[#E34F26]" />,
    },
    {
      title: "Restaurent Website",
      description: "Restaurant website with cart system.",
      tags: ["TailwindCSS", "Next.js"],
      image: "/project5.jpg",
      live: "https://restaurent-web-u2bu.vercel.app/",
      icon: <FaNodeJs className="text-xl md:text-2xl text-[#68A063]" />,
    },
    {
      title: "Resume Builder",
      description: "A Resume builder to build your interactive resume.",
      tags: ["Next.js", "React.js", "Typescript"],
      image: "/project6.jpg",
      live: "https://resume-builder-woad-nine.vercel.app/",
      icon: <FaFigma className="text-xl md:text-2xl text-[#F24E1E]" />,
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      ref={ref}
      className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 py-12 md:py-20 px-4 min-h-screen"
      id="projects"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-6xl mx-auto z-10 w-full mt-10 md:mt-0"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl -mt-64 md:text-4xl lg:text-5xl lg:-mt-32 font-bold text-cyan-400 dark:text-cyan-600 mb-3 md:mb-4">
            Featured Projects
          </h2>
          <div className="w-20 md:w-24 h-0.5 md:h-1 bg-cyan-400/70 dark:bg-cyan-600/70 mx-auto mb-4 md:mb-5"></div>
          <p className="text-gray-300 dark:text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2 md:px-0">
            A selection of my recent work showcasing diverse technologies and
            solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {visibleProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
              aria-label={`View ${project.title} live demo`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-lg md:rounded-xl flex flex-col h-full border border-gray-800 dark:border-gray-300 bg-gray-900/50 dark:bg-gray-100/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-cyan-400/10 dark:hover:shadow-cyan-600/10 transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-40 sm:h-36 md:h-44 lg:h-48 overflow-hidden">
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-gray-900/80 dark:bg-gray-200/80 p-1.5 md:p-2 rounded-md md:rounded-lg backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/project-fallback.jpg";
                    }}
                  />
                </div>
                <div className="p-4 md:p-5 lg:p-6 flex flex-col justify-between flex-grow min-h-[220px]">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-cyan-100 dark:text-cyan-900 mb-1 md:mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 dark:text-gray-500 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[10px] md:text-xs font-medium px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-gray-800 dark:bg-gray-300 text-cyan-300 dark:text-cyan-700 border border-gray-700 dark:border-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* See More / See Less Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 lg:mt-16 text-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-md text-white bg-cyan-500 hover:bg-cyan-600 transition-all duration-300"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
