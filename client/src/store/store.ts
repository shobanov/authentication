import { configureStore } from '@reduxjs/toolkit';
import { loginSlice, registrationSlice, userSlice } from './slices';

export const store = configureStore({
	reducer: {
		login: loginSlice.reducer,
		registration: registrationSlice.reducer,
		user: userSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
