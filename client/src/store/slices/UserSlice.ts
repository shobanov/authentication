import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../types';
import * as UserAC from '../action-creators/UserAC';

interface UserState {
	users: IUser[];
	isLoading: boolean;
	error: string;
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		[UserAC.fetchUsers.fulfilled.type]: (
			state,
			action: PayloadAction<IUser[]>
		) => {
			state.isLoading = false;
			state.error = '';
			state.users = action.payload;
		},
		[UserAC.fetchUsers.pending.type]: state => {
			state.isLoading = true;
		},
		[UserAC.fetchUsers.rejected.type]: (
			state,
			action: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});
