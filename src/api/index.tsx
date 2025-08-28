import axios from "axios";

// Create instance
const api = axios.create({
  baseURL: "https://react-prominent-default-rtdb.asia-southeast1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
