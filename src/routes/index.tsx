import { createBrowserRouter, type RouteObject } from "react-router";
import App from "../App";
import LandingPage from "../pages/landing-page/LandingPage";
import { APP_ROUTES } from "../constants";
import LoginPage from "../pages/login-page/LoginPage";
import SignupPage from "../pages/signup-page/SignupPage";
import UnauthorizedPage from "../pages/unauthorized-page/UnauthorizedPage";
import ProtectedRoute from "../components/guards/ProtectedRoute";
import { UserRole } from "../types/user-role.type";

const PublicRoutes: RouteObject[] = [
    // Public Routes
    {
        index: true,
        Component: () => <LandingPage />,
    },
    {
        path: APP_ROUTES.login,
        Component: () => <LoginPage />,
    },
    {
        path: APP_ROUTES.signup,
        Component: () => <SignupPage />,
    },
    {
        path: APP_ROUTES.unauthorized,
        Component: () => <UnauthorizedPage />,
    },
];

const PrivateRoutes: RouteObject[] = [
    {
        Component: () => <ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.USER]}/>,
        children: [],
    },
    {
        Component: () => <ProtectedRoute allowedRoles={[UserRole.ADMIN]} />,
        children: [],
    }
];

export const router = createBrowserRouter([
    {
        path: '/',
        Component: () => <App />,
        errorElement: <div>404 Not Found</div>,
        children: [...PublicRoutes, ...PrivateRoutes],
    }
]);