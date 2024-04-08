import axios from "axios";
import { authStorage } from "@/utils/login";
import { toast } from "react-toastify";

export const http = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL_API,
});

http.interceptors.request.use(
    (config) => {
        const tokenStr = authStorage.authToken;
        if (authStorage.authToken) {
            config.headers["token"] = tokenStr;
        }
        return config;
    },
    (error) => {
        console.log("error", error);
        Promise.reject(error);
    }
);


http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (axios.isAxiosError(error)) {
            toast.error(error.response?.data?.message);
        } else {
            toast.error(error?.data?.message);
        }
        if (error.response.status == 401) {
            authStorage.deleteAuthDetails();
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);
