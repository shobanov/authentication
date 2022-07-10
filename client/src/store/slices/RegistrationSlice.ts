import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types';

interface RegistrationState {
	user?: IUser;
	isAuth: boolean;
}

const initialState: RegistrationState = {
	user: undefined,
	isAuth: false,
};

const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		registration(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
			state.isAuth = true;
		},
	},
});

export default registrationSlice.reducer;
