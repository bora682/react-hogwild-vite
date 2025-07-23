import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    specialty: "",
    weight: "",
    greased: false,
    "highestMedalAchieved": "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Optional: simple validation
    if (formData.name.trim() === "" || formData.image.trim() === "") {
      alert("Name and image are required.");
      return;
    }

    const newHog = {
      ...formData,
      weight: parseFloat(formData.weight),
      "highest medal achieved": formData.highestMedalAchieved 
    };

    onAddHog(newHog);

    // Reset the form
    setFormData({
      name: "",
      image: "",
      specialty: "",
      weight: "",
      greased: false,
      "highest medal achieved": "",
    });
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <h3>Add a New Hog</h3>

      <div className="field">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>Specialty:</label>
        <input
          type="text"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>Weight:</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>Greased:</label>
        <input
          type="checkbox"
          name="greased"
          checked={formData.greased}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>Highest Medal Achieved:</label>
        <input
          type="text"
          name="highestMedalAchieved"
          value={formData.highestMedalAchieved}
          onChange={handleChange}
        />
      </div>

      <button className="ui button primary" type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;
