import type { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

import { FaReact, FaVuejs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiSvelte,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiDocker
} from "react-icons/si";

type Props = {
  setSelectedTech: Dispatch<SetStateAction<string[]>>;
};

 const technologies = [
  {
    id: 1,
    name: "React",
    icon: FaReact,
    iconColor: "text-cyan-400",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Popular",
    experience: "1-2 Years",
    description: "Build fast and interactive user interfaces."
  },
  {
    id: 2,
    name: "Vue.js",
    icon: FaVuejs,
    iconColor: "text-green-500",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
    badge: "Easy",
    experience: "1-2 Years",
    description: "Simple and flexible framework for modern web apps."
  },
  {
    id: 3,
    name: "Svelte",
    icon: SiSvelte,
    iconColor: "text-orange-600",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.7,
    badge: "Modern",
    experience: "1 Year",
    description: "Compile-based framework with less runtime overhead."
  },
  {
    id: 4,
    name: "Next.js",
    icon: SiNextdotjs,
    iconColor: "text-black",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
    badge: "Trending",
    experience: "1-3 Years",
    description: "React framework for full-stack web applications."
  },
  {
    id: 5,
    name: "Node.js",
    icon: FaNodeJs,
    iconColor: "text-green-600",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Popular",
    experience: "1-3 Years",
    description: "Run JavaScript on the server side."
  },
  {
    id: 6,
    name: "Express.js",
    icon: SiExpress,
    iconColor: "text-gray-800",
    category: "Backend",
    level: "Beginner-Friendly",
    rating: 4.7,
    badge: "Lightweight",
    experience: "1-2 Years",
    description: "Minimal backend framework for Node.js."
  },
  {
    id: 7,
    name: "MongoDB",
    icon: SiMongodb,
    iconColor: "text-green-500",
    category: "Database",
    level: "Beginner-Friendly",
    rating: 4.7,
    badge: "NoSQL",
    experience: "1-2 Years",
    description: "Flexible document-based NoSQL database."
  },
  {
    id: 8,
    name: "PostgreSQL",
    icon: SiPostgresql,
    iconColor: "text-blue-700",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
    badge: "Reliable",
    experience: "1-3 Years",
    description: "Powerful relational database for modern apps."
  },
  {
    id: 9,
    name: "TypeScript",
    icon: SiTypescript,
    iconColor: "text-blue-600",
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
    badge: "Recommended",
    experience: "1-3 Years",
    description: "JavaScript with strong type safety."
  },
  {
    id: 10,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    iconColor: "text-cyan-500",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: 4.8,
    badge: "Fast UI",
    experience: "1-2 Years",
    description: "Utility-first CSS framework for fast styling."
  },
  {
    id: 11,
    name: "Git",
    icon: FaGitAlt,
    iconColor: "text-orange-600",
    category: "Tooling",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Essential",
    experience: "1+ Year",
    description: "Track and manage changes in your codebase."
  },
  {
    id: 12,
    name: "Docker",
    icon: SiDocker,
    iconColor: "text-blue-500",
    category: "DevOps",
    level: "Advanced",
    rating: 4.8,
    badge: "DevOps",
    experience: "2-3 Years",
    description: "Package and run applications in containers."
  }
];

const TechnologyCards = ({ setSelectedTech }: Props) => {
  return (
    <div>

      <div className="ml-20 mb-8">
        <h2 className="text-4xl font-bold mb-2">
          Explore the <span className="text-cyan-900">Technologies</span>
        </h2>

        <p className="text-purple-600 font-medium">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-4xl ml-22">

        {technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.id}
              className="border border-purple-400 p-5 rounded-2xl shadow-sm bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >

              <div className="flex justify-between items-center mb-3">

                <div className="flex items-center gap-3">

            <span className={tech.iconColor}>
  <Icon size={30} />
</span>
                  <h3 className="text-2xl font-bold text-cyan-950">
                    {tech.name}
                  </h3>
                </div>

                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  {tech.badge}
                </span>

              </div>

              <p className="text-gray-500 text-sm mb-2">
                {tech.category}
              </p>

              <p className="text-gray-600 text-sm mb-3">
                {tech.description}
              </p>

              <p className="text-gray-700 font-medium mb-2">
                Level: {tech.level}
              </p>

              <p className="text-gray-700 mb-2">
                Experience: {tech.experience}
              </p>

              <p className="mb-5 font-semibold">
                ⭐ {tech.rating}
              </p>

              <button
                onClick={() => {
                  setSelectedTech((prev: string[]) => {
                    if (prev.includes(tech.name)) {
                      return prev;
                    }

                    toast.success(`${tech.name} added to stack`, {
                      id: tech.name
                    });

                    return [...prev, tech.name];
                  });
                }}
                className="w-full py-2 text-white font-medium bg-gradient-to-r from-cyan-700 to-purple-700 hover:from-cyan-900 hover:to-purple-900 rounded-lg transition"
              >
                Add to Stack
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default TechnologyCards;