import { object, string } from 'yup';

export const signUpValidationSchema = object({
    username: string().required('Username field is required.'),
    email: string().email('Invalid email format').required('Email field is required.'),
    password: string().required('Password is required.'),
});
export const signInValidationSchema = object({
    email: string().email('Invalid email format').required('Email field is required.'),
    password: string().required('Password is required.'),
});
export const forgotPasswordValidationSchema = object({
    email: string().email('Invalid email format').required('Email field is required.'),
});