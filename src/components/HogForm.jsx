import React, { useState } from "react";

function HogForm({ onAddHog }) {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        specialty: "",
        weight: "",
        greased: false,
        "highest medal achieved": "",
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

        if (formData.name.trim() === "" || formData.image.trim() === "") {
            return;
        }

        const newHog = {
            name: formData.name,
            image: formData.image,
            specialty: formData.specialty,
            weight: parseFloat(formData.weight),
            greased: formData.greased,
            "highest medal achieved": formData["highest medal achieved"]
        };

        onAddHog(newHog);

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
            <h4>Add a New Hog</h4>

            <div className="field">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className="field">
                <label htmlFor="image">Image URL:</label>
                <input
                    id="image"
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                />
            </div>

            <div className="field">
                <label htmlFor="specialty">Specialty:</label>
                <input
                    id="specialty"
                    type="text"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                />
            </div>

            <div className="field">
                <label htmlFor="weight">Weight:</label>
                <input
                    id="weight"
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                />
            </div>

            <div className="field">
                <label htmlFor="greased">Greased?</label>
                <input
                    id="greased"
                    type="checkbox"
                    name="greased"
                    checked={formData.greased}
                    onChange={handleChange}
                />
            </div>

            <div className="field">
                <label htmlFor="highest medal achieved">Highest Medal Achieved:</label>
                <input
                    id="highest medal achieved"
                    type="text"
                    name="highest medal achieved"
                    value={formData["highest medal achieved"]}
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
