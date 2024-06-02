import { apiClient } from "../../services/apis";
import { ROUTES } from "./routes";

export const stripeCheckout = (payload) => {
    return apiClient({
        method: ROUTES.STRIPE_CHECKOUT.METHOD,
        url: ROUTES.STRIPE_CHECKOUT.URL,
        data: payload,
    });
};