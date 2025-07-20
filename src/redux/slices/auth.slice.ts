import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserDto } from "../api/dtos/user.dto";
import type { AuthState } from "./types/auth-state.type";

const initialToken = localStorage.getItem('token');
const initialUserString = localStorage.getItem('user');
let initialUser: UserDto | null = null;

if (initialUserString) {
    try {
        initialUser = JSON.parse(initialUserString);
    } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }
}

const initialState: AuthState = {
    token: initialToken,
    user: initialUser,
    isLoading: false, // RTK Query handles loading for its specific queries/mutations
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{ token: string; user: UserDto }>
        ) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            state.error = null;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.error = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        clearError: (state) => {
            state.error = null;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setCredentials, logout, clearError, setError } = authSlice.actions;
export default authSlice.reducer;
