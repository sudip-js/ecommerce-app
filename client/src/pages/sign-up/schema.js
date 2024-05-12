import * as yup from "yup";

export const validationSchema = yup.object({
    username: yup.string().required("Username field is required"),
    email: yup.string().email('Invalid email format').required("Email field is required"),
    password: yup.string().required("Password field is required"),
});