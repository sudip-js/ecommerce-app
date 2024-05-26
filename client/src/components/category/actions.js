import { apiClient } from '../../services/apis';
import { ROUTES } from './routes';

export const fetchCategories = (payload) => {
    return apiClient({
        method: ROUTES.FETCH_CATEGORIES.METHOD,
        url: ROUTES.FETCH_CATEGORIES.URL,
        data: payload,
    });
};
