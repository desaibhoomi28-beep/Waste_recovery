import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

export const loginUser = (userData) =>
  API.post("/login", userData);

export const registerUser = (userData) =>
  API.post("/register", userData);