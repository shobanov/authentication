import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types';

interface LoginState {
	user?: IUser;
	isAuth: boolean;
}

const initialState: LoginState = {
	user: undefined,
	isAuth: false,
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		login(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
			state.isAuth = true;
		},
		logout(state) {
			state.user = undefined;
			state.isAuth = false;
		},
	},
});

export default loginSlice.reducer;
