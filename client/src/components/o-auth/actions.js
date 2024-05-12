import { apiClient } from "../../services/apis";
import { ROUTES } from "./routes";

export const signInWithGoogleRequest = (payload) => {
    return apiClient({
        method: ROUTES.SIGN_IN_WITH_GOOGLE.METHOD,
        url: ROUTES.SIGN_IN_WITH_GOOGLE.URL,
        data: payload,
    });
};