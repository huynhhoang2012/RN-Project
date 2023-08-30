import {configureStore, combineReducers} from '@reduxjs/toolkit';
import generalReducer from './slices/GeneralState';

9;
const reducer = combineReducers({
  general: generalReducer,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
