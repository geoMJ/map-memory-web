import axios from "axios";

// This will make a reusable api client. Cool !
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.response.use(
    (response) => {
        console.log(response);
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { apiClient };
