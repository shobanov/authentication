import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../types';
import { login, logout } from '../actions/AuthActions';

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
		[login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
			state.isLoading = false;
			state.error = '';
			state.user = action.payload;
		},
		[login.pending.type]: state => {
			state.isLoading = true;
		},
		[login.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[logout.fulfilled.type]: state => {
			state.isLoading = false;
			state.error = '';
			state.user = {} as IUser;
		},
		[logout.pending.type]: state => {
			state.isLoading = true;
		},
		[logout.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});
