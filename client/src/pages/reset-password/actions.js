import { apiClient } from '../../services/apis';
import { ROUTES } from './routes';

export const resetPassword = (payload) => {
    return apiClient({
        method: ROUTES.RESET_PASSWORD.METHOD,
        url: ROUTES.RESET_PASSWORD.URL,
        data: payload,
    });
};