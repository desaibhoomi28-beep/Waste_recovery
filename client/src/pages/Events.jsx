import { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";

import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";

import {
  getEvents,
  deleteEvent,
} from "../services/eventService";

import "../styles/Events.css";

function Events() {

  const [showForm, setShowForm] = useState(false);

  const [events, setEvents] = useState([]);

  const [search, setSearch] = useState("");

  // Load events from MongoDB
  const loadEvents = async () => {
    try {

      const { data } = await getEvents();

      setEvents(data.events);

    } catch (error) {

      console.log(error);

      alert("Failed to load events");

    }
  };

  useEffect(() => {

    loadEvents();

  }, []);

  // Delete Event
  const handleDelete = async (id) => {

    try {

      await deleteEvent(id);

      alert("Event Deleted Successfully");

      loadEvents();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Delete Failed"
      );

    }

  };

  // Edit Event (We'll implement next)
  const handleEdit = (event) => {

    alert(`Edit: ${event.eventName}`);

  };

  // Search Filter
  const filteredEvents = events.filter((event) =>
    event.eventName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="events-page">

      <div className="events-header">

        <div>

          <h1>📅 Event Management</h1>

          <p>Manage all events here.</p>

        </div>

        <button
          className="add-btn"
          onClick={() => setShowForm(true)}
        >

          <FaPlus />

          Add Event

        </button>

      </div>

      <div className="search-bar">

        <FaSearch />

        <input
          type="text"
          placeholder="Search Event..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="events-grid">

        {filteredEvents.map((event) => (

          <EventCard
            key={event._id}
            event={event}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />

        ))}

      </div>

      {showForm && (

        <EventForm
          closeForm={() => setShowForm(false)}
          refreshEvents={loadEvents}
        />

      )}

    </div>

  );

}

export default Events;