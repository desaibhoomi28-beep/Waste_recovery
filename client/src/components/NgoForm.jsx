import { useState } from "react";
import { createNGO } from "../services/ngoService";

function NGOForm({ closeForm, refreshNGOs }) {
  const [formData, setFormData] = useState({
    ngoName: "",
    location: "",
    contactPerson: "",
    phone: "",
    email: "",
    capacity: "",
    foodTypes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createNGO(formData);

      alert("NGO Added Successfully!");

      refreshNGOs();

      closeForm();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to add NGO"
      );
    }
  };

  return (
    <div className="modal-overlay">
      <div className="event-modal">

        <h2>Add NGO</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="ngoName"
            placeholder="NGO Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="capacity"
            placeholder="Food Capacity (KG)"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="foodTypes"
            placeholder="Food Types Accepted"
            onChange={handleChange}
            required
          />

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={closeForm}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Save NGO
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default NGOForm;