import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
export const API_TAGS = {
    characters: 'Characters',

};

export const apiService = createApi({
    reducerPath: 'apiService',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            // Get the token from the Redux store
            const token = (getState() as RootState).auth.token;
            if (token) {
              headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
        redirect: 'follow',
    }),
    tagTypes: Object.values(API_TAGS),
    endpoints: () => ({}),
});