import { apiClient } from '../../services/apis';
import { ROUTES } from './routes';

export const signUpRequest = (payload) => {
    return apiClient({
        method: ROUTES.SIGN_UP.METHOD,
        url: ROUTES.SIGN_UP.URL,
        data: payload,
    });
};