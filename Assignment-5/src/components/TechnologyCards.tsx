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
  <div className="grid grid-cols-3 gap-6 w-full">

    {technologies.map((tech) => (
      <div key={tech.id} className="border border-amber-800 p-5">
        {tech.name}
        <p>{tech.category}</p>
     <p>   {tech.id}</p>
        <p>{tech.level}</p>
      <p>  {tech.rating}</p>
<button  onClick={() => setSelectedTech((prev) => [...prev, tech.name])} 
 className="py-3 border border-amber-200 bg-cyan-800 rounded-md">EILOKHA</button>

      </div>
    ))}

  </div>
);
};

export default TechnologyCards;