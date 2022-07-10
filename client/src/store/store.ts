import { configureStore } from '@reduxjs/toolkit';
import {
	loginSlice,
	registrationSlice,
	statusSlice,
	userSlice,
} from './slices';

const store = configureStore({
	reducer: {
		login: loginSlice,
		registration: registrationSlice,
		user: userSlice,
		status: statusSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
