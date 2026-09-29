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
        <div>
            your stack
          {selectedTech.map((tech) => (
  <div key={tech}>{tech}
    <button onClick={() => handleRemove(tech)}>
          Remove
        </button>
        <button onClick={handleRemoveAll}>
  Remove All
</button>
        </div>
))}
        </div>
    );
};

export default SelectedStack;