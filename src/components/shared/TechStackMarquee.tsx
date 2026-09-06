import React from "react";
import {
  FaJava,
  FaReact,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiTypescript,
  SiMysql,
  SiRedis,
  SiHibernate,
  SiPostman,
  SiJavascript,
} from "react-icons/si";

import { motion } from "framer-motion";

type Tech = {
  name: string;
  icon: React.ReactNode;
};

const rowOne: Tech[] = [
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
];

const rowTwo: Tech[] = [
  {
    name: "Spring Security",
    icon: <SiSpringboot />,
  },
  {
    name: "Hibernate",
    icon: <SiHibernate />,
  },
  {
    name: "Redis",
    icon: <SiRedis />,
  },
  {
    name: "WebSocket",
    icon: <FaReact />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
  },
];

const rowThree: Tech[] = [
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "REST APIs",
    icon: <FaDatabase />,
  },
  {
    name: "AI / LLM",
    icon: <FaPython />,
  },
  {
    name: "JPA",
    icon: <SiHibernate />,
  },
];

const TechItem = ({ tech }: { tech: Tech }) => {
  return (
    <div
      className="
        group
        flex
        shrink-0
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-white/[0.035]
        px-5
        py-3
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-purple-400/40
        hover:bg-purple-500/[0.08]
        hover:shadow-[0_0_30px_rgba(124,58,237,0.12)]
      "
    >
      <span
        className="
          text-xl
          text-white/70
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-purple-400
        "
      >
        {tech.icon}
      </span>

      <span
        className="
          whitespace-nowrap
          text-sm
          font-medium
          tracking-wide
          text-white/70
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {tech.name}
      </span>
    </div>
  );
};

const MarqueeRow = ({
  items,
  reverse = false,
}: {
  items: Tech[];
  reverse?: boolean;
}) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max gap-4 py-2"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <TechItem
            key={`${tech.name}-${index}`}
            tech={tech}
          />
        ))}
      </motion.div>
    </div>
  );
};

const TechStackMarquee = () => {
  return (
    <section
      id="tech-stack"
      className="
        relative
        w-full
        overflow-hidden
        py-24
      "
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/10
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 px-6 text-center">
          <p
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-purple-400
            "
          >
            Technology
          </p>

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
            "
          >
            Tech Stack
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-white/45
              sm:text-base
            "
          >
            The technologies I use to build scalable,
            secure and modern applications.
          </p>
        </div>

        {/* Moving rows */}
        <div className="space-y-4">
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} reverse />
          <MarqueeRow items={rowThree} />
        </div>

        {/* Fade edges */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-20
            bg-gradient-to-r
            from-[#07090f]
            to-transparent
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20
            w-20
            bg-gradient-to-l
            from-[#07090f]
            to-transparent
          "
        />
      </div>
    </section>
  );
};

export default TechStackMarquee;
