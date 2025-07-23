import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleClick() {
    setShowDetails(!showDetails);
  }

  return (
    <div
      className="ui eight wide column"
      aria-label="hog card"
      onClick={handleClick}
    >
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} />

      {showDetails && (
        <div>
          <p><strong>Specialty:</strong> {hog.specialty}</p>
          <p><strong>Weight:</strong> {hog.weight}</p>
          <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
          <p><strong>Highest Medal:</strong> {hog["highest medal achieved"]}</p>
        </div>
      )}

      {/* Hide me button */}
      <button 
        onClick={(e) => {
          e.stopPropagation(); // Prevents triggering the card toggle
          onHide(hog.name);    // Calls parent function to hide this hog
        }}
      >
        Hide Me
      </button>
    </div>
  );
}

export default HogCard;
