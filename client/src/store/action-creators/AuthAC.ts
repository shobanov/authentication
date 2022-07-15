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
