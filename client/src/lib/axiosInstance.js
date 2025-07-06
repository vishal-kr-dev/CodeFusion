import axios from "axios";

const axiosInstance = axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? process.env.VITE_BACKEND_URL
            : "http://localhost:5000",
    withCredentials: true,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;