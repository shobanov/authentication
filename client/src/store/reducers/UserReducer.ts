import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/types';

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

export const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export default userReducer.reducer;
