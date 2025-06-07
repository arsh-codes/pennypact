import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api", // Adjust based on your .env file
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
