import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../types';
import * as AuthAC from '../action-creators/AuthAC';

interface LoginState {
	user?: IUser;
	isAuth: boolean;
	isLoading: boolean;
	error: string;
}

const initialState: LoginState = {
	user: {} as IUser,
	isAuth: false,
	isLoading: false,
	error: '',
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {},
	extraReducers: {
		[AuthAC.login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
			state.isLoading = false;
			state.error = '';
			state.user = action.payload;
		},
		[AuthAC.login.pending.type]: state => {
			state.isLoading = true;
		},
		[AuthAC.login.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[AuthAC.logout.fulfilled.type]: state => {
			state.isLoading = false;
			state.error = '';
			state.user = {} as IUser;
		},
		[AuthAC.logout.pending.type]: state => {
			state.isLoading = true;
		},
		[AuthAC.logout.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});
