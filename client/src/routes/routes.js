import { createBrowserRouter, } from "react-router-dom";
import { Cart, ForgotPasswordPage, HomePage, PageNotFoundPage, ResetPasswordPage, SignInPage, SignUpPage } from "../pages";
import { ProductOverview, ProductSection } from "../components";
import { PublicLayout } from "../layouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: ':id',
                element: <ProductSection />
            },
            {
                path: ':id/:id',
                element: <ProductOverview />
            },
            {
                path: "sign-in",
                element: <SignInPage />
            },
            {
                path: "sign-up",
                element: <SignUpPage />
            },
            {
                path: "forgot-password",
                element: <ForgotPasswordPage />
            },
            {
                path: "reset-password/:id/:token",
                element: <ResetPasswordPage />
            },
            {
                path: "cart",
                element: <Cart />
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFoundPage />
    }
]);

export default router;