import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types';

interface UserState {
	users: IUser[];
}

const initialState: UserState = {
	users: [],
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		usersFetch(state, action: PayloadAction<IUser[]>) {
			state.users = action.payload;
		},
	},
});

export default userSlice.reducer;
