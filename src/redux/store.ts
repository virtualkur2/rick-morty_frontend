import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/auth.slice'
import { apiService } from "./api";

const rootReducer = combineReducers({
    auth: authReducer,
    [apiService.reducerPath]: apiService.reducer,
});
export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware()
                .concat(apiService.middleware),
    });
}

export const store = setupStore();
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;