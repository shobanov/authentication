import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatusState {
	isLoading: boolean;
	error: string;
}

const initialState: StatusState = {
	isLoading: false,
	error: '',
};

const statusSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		pending(state) {
			state.isLoading = true;
		},
		success(state) {
			state.isLoading = false;
			state.error = '';
		},
		error(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default statusSlice.reducer;
