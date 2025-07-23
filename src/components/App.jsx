import React, { useState } from "react";
import HogList from "./HogList";
import HogForm from "./HogForm"; 
import hogs from "../porkers_data";

function App() {
  const [visibleHogs, setVisibleHogs] = useState(hogs);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("none");

  function handleHideHog(hogName) {
    setVisibleHogs((prevHogs) =>
      prevHogs.filter((hog) => hog.name !== hogName)
    );
  }

  function handleAddHog(newHog) {
    setVisibleHogs((prevHogs) => [newHog, ...prevHogs]);
  }

  const hogsToDisplay = [...visibleHogs]
    .filter((hog) => (showGreased ? hog.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "weight") {
        return a.weight - b.weight;
      } else {
        return 0;
      }
    });

  return (
    <div>
      <h1 className="ui center aligned header">HogWild</h1>

      {/* FILTER */}
      <label>
        Show Only Greased Hogs
        <input
          type="checkbox"
          checked={showGreased}
          onChange={(e) => setShowGreased(e.target.checked)}
        />
      </label>

      <br />

      {/* SORT */}
      <label>
        Sort By:{" "}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="none">No Sorting</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>

      <br /><br />

      {/* ADD HOG FORM */}
      <HogForm onAddHog={handleAddHog} />

      {/* HOG LIST */}
      <HogList hogs={hogsToDisplay} onHide={handleHideHog} />
    </div>
  );
}

export default App;

