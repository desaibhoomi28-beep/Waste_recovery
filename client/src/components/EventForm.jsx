import { useState } from "react";
import { createEvent } from "../services/eventService";

function EventForm({ closeForm, refreshEvents }) {

  const [formData, setFormData] = useState({
    eventName: "",
    location: "",
    eventDate: "",
    foodQuantity: "",
    waterBottles: "",
    banners: "",
    pickupDeadline: "",
    status: "Pending",
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

      await createEvent(formData);

      alert("Event Added Successfully!");

      refreshEvents();

      closeForm();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to add event."
      );

    }
  };

  return (
    <div className="modal-overlay">

      <div className="event-modal">

        <h2>Add New Event</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="eventName"
            placeholder="Event Name"
            value={formData.eventName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="foodQuantity"
            placeholder="Food Quantity (KG)"
            value={formData.foodQuantity}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="waterBottles"
            placeholder="Water Bottles"
            value={formData.waterBottles}
            onChange={handleChange}
          />

          <input
            type="number"
            name="banners"
            placeholder="Banners"
            value={formData.banners}
            onChange={handleChange}
          />

          <input
            type="text"
            name="pickupDeadline"
            placeholder="Pickup Deadline (e.g. 6 PM)"
            value={formData.pickupDeadline}
            onChange={handleChange}
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="Assigned">Assigned</option>
            <option value="Completed">Completed</option>
          </select>

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
              Save Event
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EventForm;