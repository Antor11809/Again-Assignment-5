import type { Dispatch, SetStateAction } from "react";

type Props = {
  selectedTech: string[];
  setSelectedTech: Dispatch<SetStateAction<string[]>>;
};
const SelectedStack = ({ selectedTech, setSelectedTech }: Props) => {

    const handleRemove = (tech: string) => {
  setSelectedTech((prev) =>
    prev.filter((item) => item !== tech)
  );
};

const handleRemoveAll = () => {
  setSelectedTech([]);
};
    return (
        <div className="border border-amber-400 px-4 bg-amber-100">
            Your stack
            <p>{selectedTech.length} Technologies Selected</p>
          {selectedTech.map((tech) => (
  <div key={tech}>{tech}
    <button className="ml-5" onClick={() => handleRemove(tech)}>
          x
        </button>
   
        </div>
))}
<button   className="block mt-4" onClick={handleRemoveAll}>
  Remove All
</button>
        </div>
    );
};

export default SelectedStack;