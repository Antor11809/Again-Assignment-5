import type { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

type Props = {
  selectedTech: string[];
  setSelectedTech: Dispatch<SetStateAction<string[]>>;
};

const SelectedStack = ({ selectedTech, setSelectedTech }: Props) => {

  const handleRemove = (tech: string) => {
    setSelectedTech((prev) =>
      prev.filter((item) => item !== tech)
    );

    toast.success(`${tech} removed`, {
      id: `remove-${tech}`,
    });
  };

  const handleRemoveAll = () => {
    if (selectedTech.length === 0) return;

    setSelectedTech([]);

    toast.success("All technologies removed", {
      id: "remove-all",
    });
  };

  return (
    <div className="border border-purple-300 bg-white rounded-xl p-4 shadow-sm">

      <h2 className="text-xl font-bold text-cyan-950 mb-1">
        Your Stack
      </h2>

      <p className="whitespace-nowrap text-sm text-gray-500 mb-4">
        {selectedTech.length} Technologies Selected
      </p>

      {selectedTech.map((tech) => (
        <div
          key={tech}
          className="flex justify-between items-center bg-purple-50 px-3 py-2 rounded-md mb-2"
        >
          <span className="font-medium">
            {tech}
          </span>

          <button
            className="text-red-500 font-bold"
            onClick={() => handleRemove(tech)}
          >
            ✕
          </button>
        </div>
      ))}

      <button
        className="block w-full mt-4 py-2 border border-red-300 text-red-500 rounded-md hover:bg-red-50"
        onClick={handleRemoveAll}
      >
        Remove All
      </button>

    </div>
  );
};

export default SelectedStack;