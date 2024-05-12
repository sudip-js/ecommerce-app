import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./rootReducer";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.REACT_APP_MODE !== "production",
});
