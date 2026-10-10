import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/events",
});

// Automatically send JWT with every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Get all events
export const getEvents = () => API.get("/");

// Create event
export const createEvent = (eventData) =>
  API.post("/", eventData);

// Update event
export const updateEvent = (id, eventData) =>
  API.put(`/${id}`, eventData);

// Delete event
export const deleteEvent = (id) =>
  API.delete(`/${id}`);