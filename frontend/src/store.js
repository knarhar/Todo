import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middleware),
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
