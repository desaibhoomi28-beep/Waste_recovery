import { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import NgoCard from "../components/NgoCard";
import NgoForm from "../components/NgoForm";
import "../styles/NGOs.css";

function NGOs() {

  const [showForm, setShowForm] = useState(false);

  const [ngos, setNgos] = useState([
    {
      id: 1,
      name: "Robin Hood Army",
      city: "Ahmedabad",
      phone: "9876543210",
      email: "robinhood@gmail.com",
    },
    {
      id: 2,
      name: "Feed India",
      city: "Surat",
      phone: "9876501234",
      email: "feedindia@gmail.com",
    },
  ]);

  const deleteNgo = (id) => {
    setNgos(ngos.filter((ngo) => ngo.id !== id));
  };

  const editNgo = (ngo) => {
    alert(`Edit ${ngo.name}`);
  };

  return (
    <div className="ngo-page">

      <div className="ngo-header">

        <div>
          <h1>🤝 NGO Management</h1>
          <p>Manage all NGO partners.</p>
        </div>

        <button
          className="add-btn"
          onClick={() => setShowForm(true)}
        >
          <FaPlus />
          Add NGO
        </button>

      </div>

      <div className="search-bar">
        <FaSearch />
        <input placeholder="Search NGO..." />
      </div>

      <div className="ngo-grid">

        {ngos.map((ngo) => (
          <NgoCard
            key={ngo.id}
            ngo={ngo}
            onDelete={deleteNgo}
            onEdit={editNgo}
          />
        ))}

      </div>

      {showForm && (
        <NgoForm closeForm={() => setShowForm(false)} />
      )}

    </div>
  );
}

export default NGOs;