import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rooReducer = combineReducers({ user: userSlice });
const persistedReducer = persistReducer(persistConfig, rooReducer);

// Define the store as a function that returns the configured store
export const configureAppStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

// Create the store
export const store = configureAppStore();

// Create the Redux Persist `persistor`
export const persistor = persistStore(store);
