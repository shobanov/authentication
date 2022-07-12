import { configureStore } from '@reduxjs/toolkit';
import {
	loginSlice,
	registrationSlice,
	statusSlice,
	userSlice,
} from './slices';

const store = configureStore({
	reducer: {
		login: loginSlice.reducer,
		registration: registrationSlice.reducer,
		user: userSlice.reducer,
		status: statusSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
