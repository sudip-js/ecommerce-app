import { Outlet, createBrowserRouter, } from "react-router-dom";
import { ForgotPasswordPage, HomePage, PageNotFoundPage, ResetPasswordPage, SignInPage, SignUpPage } from "../pages";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoute>
            <Outlet />
        </PublicRoute>,
        children: [
            {
                index: true,
                element: <HomePage />
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