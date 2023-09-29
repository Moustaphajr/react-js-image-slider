import { useState } from "react";
import { List } from "./data/imageList.js";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index === List.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  function handlePrev() {
    if (index === 0) {
      setIndex(List.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div className="bg-base">
      <Navbar />
      <Carousel
        index={index}
        setIndex={setIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default App;
