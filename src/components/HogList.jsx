import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs, onHide }) {
  return (
    <div className="ui grid container">
      {hogs.map((hog, index) => (
        <HogCard key={index} hog={hog} onHide={onHide} />
      ))}
    </div>
  );
}

export default HogList;
