import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../types';
import * as AuthAC from '../action-creators/AuthAC';

interface RegistrationState {
	user?: IUser;
	isAuth: boolean;
	isLoading: boolean;
	error: string;
}

const initialState: RegistrationState = {
	user: {} as IUser,
	isAuth: false,
	isLoading: false,
	error: '',
};

export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {},
	extraReducers: {
		[AuthAC.registration.fulfilled.type]: (
			state,
			action: PayloadAction<IUser>
		) => {
			state.isLoading = false;
			state.error = '';
			state.user = action.payload;
		},
		[AuthAC.registration.pending.type]: state => {
			state.isLoading = true;
		},
		[AuthAC.registration.rejected.type]: (
			state,
			action: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});
