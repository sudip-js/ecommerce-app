import { apiClient } from '../../services/apis';
import { ROUTES } from './routes';

export const forgotPassword = (payload) => {
    return apiClient({
        method: ROUTES.FORGOT_PASSWORD.METHOD,
        url: ROUTES.FORGOT_PASSWORD.URL,
        data: payload,
    });
};