import { apiClient } from '../../services/apis';
import { ROUTES } from './routes';

export const fetchCartsItems = (data = {}) => {
    return apiClient({
        method: ROUTES.FETCH_CART_ITEMS.METHOD,
        url: ROUTES.FETCH_CART_ITEMS.URL,
        data
    });
};

