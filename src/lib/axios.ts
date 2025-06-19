import axios from "axios";
const instance = axios.create({
    baseURL: "https://gregmvp-backend.onrender.com/api/v1",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
      },
})

export {instance as axiosInstance}