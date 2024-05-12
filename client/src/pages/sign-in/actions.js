import { apiClient } from '../../services/apis';
import { ROUTES } from './routes';

export const signInRequest = (payload) => {
    return apiClient({
        method: ROUTES.SIGN_IN.METHOD,
        url: ROUTES.SIGN_IN.URL,
        data: payload,
    });
};