import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCards from "./components/TechnologyCards"
import SelectedStack from "./components/SelectedStack";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
 
 const [selectedTech, setSelectedTech] = useState<string[]>([]);

return (
  <>
    <Nav />
    <Hero />
    <Toaster />
    <div className="flex gap-10 container mx-auto items-start">

      <div className="flex-1">
        <TechnologyCards setSelectedTech={setSelectedTech} />
      </div>

      <div className="w-50 mt-26 mr-18">
        <SelectedStack
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
      </div>

    </div>
  </>
);
}
export default App
