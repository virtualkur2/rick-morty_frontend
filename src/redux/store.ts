import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});
export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware({}),
    });
}

export const store = setupStore();
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;