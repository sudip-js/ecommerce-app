import axios from "axios";
import { showErrorToast } from "../../utils/toast";

const apiClient = axios.create({
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
    },
});

apiClient.interceptors.request.use(
    (config) => {
        config.baseURL = 'https://ecommerce-app-vert-xi.vercel.app/api/'
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const errorMsg = error?.response?.data?.message || 'Something went wrong!';
        showErrorToast(errorMsg)
        return Promise.reject(error);
    }
);


export default apiClient;
