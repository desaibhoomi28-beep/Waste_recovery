import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/ngos",
});

// Attach JWT token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Get all NGOs
export const getNGOs = () => API.get("/");

// Create NGO
export const createNGO = (ngoData) => API.post("/", ngoData);

// Update NGO
export const updateNGO = (id, ngoData) =>
  API.put(`/${id}`, ngoData);

// Delete NGO
export const deleteNGO = (id) =>
  API.delete(`/${id}`);