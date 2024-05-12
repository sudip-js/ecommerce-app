import { toast } from 'react-toastify';
const initialState = {
    position: 'top-right',
}

export const showSuccessToast = (message) => {
    toast.success(message, initialState);
};

export const showErrorToast = (message) => {
    toast.error(message, initialState);
};

export const showWarningToast = (message) => {
    toast.warning(message, initialState);
};

export const showInfoToast = (message) => {
    toast.info(message, initialState);
};
