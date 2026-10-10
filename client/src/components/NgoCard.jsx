import { FaEdit, FaTrash, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function NgoCard({ ngo, onEdit, onDelete }) {

  return (
    <div className="ngo-card">

      <h3>{ngo.name}</h3>

      <p>
        <FaMapMarkerAlt className="icon" />
        {ngo.city}
      </p>

      <p>
        <FaPhone className="icon" />
        {ngo.phone}
      </p>

      <p>
        <FaEnvelope className="icon" />
        {ngo.email}
      </p>

      <div className="ngo-actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(ngo)}
        >
          <FaEdit />
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(ngo.id)}
        >
          <FaTrash />
          Delete
        </button>

      </div>

    </div>
  );
}

export default NgoCard;