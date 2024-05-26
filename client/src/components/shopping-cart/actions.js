import { apiClient } from '../../services/apis';
import { ROUTES } from './routes';

export const fetchCartsItems = (data = {}) => {
    return apiClient({
        method: ROUTES.FETCH_CART_ITEMS.METHOD,
        url: ROUTES.FETCH_CART_ITEMS.URL,
        data
    });
};
export const removeItemFromCart = (data = {}) => {
    return apiClient({
        method: ROUTES.REMOVE_ITEM_FROM_CART.METHOD,
        url: ROUTES.REMOVE_ITEM_FROM_CART.URL,
        data
    });
};

