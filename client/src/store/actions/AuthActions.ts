// import { AppDispatch } from '../store';
// import { loginSlice, registrationSlice, statusSlice } from '../slices';
import { createAsyncThunk } from '@reduxjs/toolkit';

import * as AuthService from '../../services/AuthService';
import { LoginDto, RegisterDto } from '../../types';

export const registration = createAsyncThunk(
	'user/registration',
	async (dto: RegisterDto, thunkAPI) => {
		try {
			const response = await AuthService.registration(dto);
			localStorage.setItem('token', response.data.accessToken);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('registration error');
		}
	}
);

export const login = createAsyncThunk(
	'user/login',
	async (dto: LoginDto, thunkAPI) => {
		try {
			const response = await AuthService.login(dto);
			localStorage.setItem('token', response.data.accessToken);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('login error');
		}
	}
);

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
	try {
		await AuthService.logout();
		localStorage.removeItem('token');
	} catch (e) {
		return thunkAPI.rejectWithValue('logout error');
	}
});

// export const registration =
// 	() => async (dispatch: AppDispatch, dto: RegisterDtoType) => {
// 		try {
// 			dispatch(statusSlice.actions.pending);
// 			const response = await AuthService.registration(dto);
// 			localStorage.setItem('token', response.data.accessToken);
// 			dispatch(registrationSlice.actions.registration(response.data.user));
// 		} catch (e) {
// 			dispatch(statusSlice.actions.error(e.response?.data?.message));
// 		}
// 	};

// export const login =
// 	() => async (dispatch: AppDispatch, email: string, password: string) => {
// 		try {
// 			dispatch(statusSlice.actions.pending);
// 			const response = await AuthService.login(email, password);
// 			localStorage.setItem('token', response.data.accessToken);
// 			dispatch(loginSlice.actions.login(response.data.user));
// 			dispatch(statusSlice.actions.success());
// 		} catch (e) {
// 			dispatch(statusSlice.actions.error(e.response?.data?.message));
// 		}
// 	};

// export const logout = () => async (dispatch: AppDispatch) => {
// 	try {
// 		dispatch(statusSlice.actions.pending);
// 		await AuthService.logout();
// 		localStorage.removeItem('token');
// 		dispatch(loginSlice.actions.logout());
// 		dispatch(statusSlice.actions.success());
// 	} catch (e) {
// 		dispatch(statusSlice.actions.error(e.response?.data?.message));
// 	}
// };
