import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLeaf,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function EventCard({ event, onEdit, onDelete }) {
  return (
    <div className="event-card">

      <div className="event-top">

        <h3>{event.eventName}</h3>

        <span className={`status ${event.status.toLowerCase()}`}>
          {event.status}
        </span>

      </div>

      <div className="event-details">

        <p>
          <FaMapMarkerAlt className="icon" />
          {event.location}
        </p>

        <p>
          <FaCalendarAlt className="icon" />
          {new Date(event.eventDate).toLocaleDateString()}
        </p>

        <p>
          <FaLeaf className="icon" />
          {event.foodQuantity} KG
        </p>

        <p>
          💧 Water Bottles : {event.waterBottles}
        </p>

        <p>
          🏳️ Banners : {event.banners}
        </p>

        <p>
          ⏰ Pickup Deadline : {event.pickupDeadline}
        </p>

      </div>

      <div className="event-actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(event)}
        >
          <FaEdit />
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(event._id)}
        >
          <FaTrash />
          Delete
        </button>

      </div>

    </div>
  );
}

export default EventCard;