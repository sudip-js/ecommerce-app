import { apiClient } from '../../services/apis';
import { ROUTES } from './routes';

export const getCategoryProduct = (payload) => {
    return apiClient({
        method: ROUTES.GET_CATEGORIES_BASED_PRODUCTS.METHOD,
        url: ROUTES.GET_CATEGORIES_BASED_PRODUCTS.URL,
        data: payload,
    });
};
