import React, { useState } from "react";


function HogCard({ hog, onHide }) {
    const [showDetails, setShowDetails] = useState(false);

    function handleClick() {
        setShowDetails(!showDetails);
    }

    return (
        <div
            className="ui card pigTile eight wide column"
            aria-label="hog card"
            onClick={() => setShowDetails(!showDetails)}
        >
            <h3>{hog.name}</h3>
            <img alt={`Photo of ${hog.name}`} src={hog.image} />


            {showDetails && (
                <div>
                    <p>{`Specialty: ${hog.specialty}`}</p>
                    <p>{`Weight: ${hog.weight}`}</p>
                    <p>{`Greased: ${hog.greased ? "Yes" : "No"}`}</p>
                    <p>{`Highest Medal: ${hog["highest medal achieved"]}`}</p>
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
