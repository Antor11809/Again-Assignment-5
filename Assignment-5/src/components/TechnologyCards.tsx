import type { Dispatch, SetStateAction } from "react";

type Props = {
  setSelectedTech: Dispatch<SetStateAction<string[]>>;
};

const technologies = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9
  },
  {
    id: 2,
    name: "Vue.js",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8
  },
  {
    id: 3,
    name: "Svelte",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.7
  }
];

const TechnologyCards = ({ setSelectedTech }: Props) => {
return (
  <div>

  <div className="ml-20 mb-8">
      <h2 className="text-4xl font-bold mb-2">
      Explore the <span className="text-cyan-900">Technologies</span>
    </h2>
  <p className="text-purple-600 font-medium">Pick one technology per category to build your ideal stack.</p>

  </div>
    <div className="grid grid-cols-3 gap-6 container max-w-4xl ml-22 ">

      {technologies.map((tech) => (
        <div key={tech.id} className="border border-amber-600 p-4 rounded-xl shadow-sm bg-white hover:shadow-md transition">

          {tech.name}

          <p>{tech.category}</p>
          <p>{tech.id}</p>
          <p>{tech.level}</p>
          <p>{tech.rating}</p>

          <button
            onClick={() =>
              setSelectedTech((prev) =>
                prev.includes(tech.name) ? prev : [...prev, tech.name]
              )
            }
            className="justify-center py-2 px-9 text-white font-medium  border border-amber-200 bg-cyan-800 rounded-md"
          >
            EILOKHA
          </button>

        </div>
      ))}

    </div>

  </div>
);
};

export default TechnologyCards;

