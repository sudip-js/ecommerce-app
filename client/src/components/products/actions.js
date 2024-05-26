import { apiClient } from '../../services/apis';
import { ROUTES } from './routes';

export const fetchCategory = (data = {}) => {
    return apiClient({
        method: ROUTES.FETCH_CATEGORY.METHOD,
        url: ROUTES.FETCH_CATEGORY.URL,
        data
    });
};
export const fetchCategoryProduct = (data = {}) => {
    return apiClient({
        method: ROUTES.FETCH_CATEGORY_PRODUCT.METHOD,
        url: ROUTES.FETCH_CATEGORY_PRODUCT.URL,
        data
    });
};
export const addToCart = (data = {}) => {
    return apiClient({
        method: ROUTES.ADD_TO_CART.METHOD,
        url: ROUTES.ADD_TO_CART.URL,
        data
    });
};
