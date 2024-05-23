import { Outlet, createBrowserRouter, } from "react-router-dom";
import { Cart, ForgotPasswordPage, HomePage, PageNotFoundPage, ResetPasswordPage, SignInPage, SignUpPage } from "../pages";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { ProductOverview, ProductSection } from "../components";
import { PublicLayout } from "../layouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoute>
            <PublicLayout />
        </PublicRoute>,
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
        path: '/',
        element: <ProtectedRoute>
            <Outlet />
        </ProtectedRoute>,
        children: [
            {
                path: 'dashboard',
                element: <h1>Dashboard</h1>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFoundPage />
    }
]);

export default router;