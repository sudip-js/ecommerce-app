import { apiClient } from '../../services/apis';
import { ROUTES } from './routes';

export const getAllCategories = (payload) => {
    return apiClient({
        method: ROUTES.GET_ALL_CATEGORIES.METHOD,
        url: ROUTES.GET_ALL_CATEGORIES.URL,
        data: payload,
    });
};
