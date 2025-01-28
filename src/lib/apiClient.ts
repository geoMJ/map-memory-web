import axios from "axios";

// This will make a reusable api client. Cool !
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10_000,
});

apiClient.interceptors.response.use((response) => {
    console.log(response.data);
    return response;
});

export { apiClient };
