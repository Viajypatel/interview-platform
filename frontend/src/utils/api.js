import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const loginUser = (email, password) =>
  API.post("/auth/login", { email, password });

export const fetchAllSubmissions = () => API.get("/submissions");
