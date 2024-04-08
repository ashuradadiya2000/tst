import { getCookie, setCookie, eraseCookie } from "./cookies";

class AuthStorage {
    get authToken() {
        return getCookie(import.meta.env.VITE_APP_ACCESS_TOKEN_KEY);
    }

    setAuthDetails = (accessToken: string) => {
        setCookie(import.meta.env.VITE_APP_ACCESS_TOKEN_KEY, accessToken, 1);
    };

    deleteAuthDetails = () => {
        eraseCookie(import.meta.env.VITE_APP_ACCESS_TOKEN_KEY);
    };
}

export const authStorage = new AuthStorage();
