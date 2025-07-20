export const APP_NAME = import.meta.env.VITE_APP_NAME ?? 'Rick & Morty App';
export const APP_ROUTES = {
    login: '/login',
    signup: '/signup',
    unauthorized: '/unauthorized',
    dashboard: '/dashboard',
    admin_users: '/admin/users',
} as const;