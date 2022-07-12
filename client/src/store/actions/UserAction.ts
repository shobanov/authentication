import { createAsyncThunk } from '@reduxjs/toolkit';

import * as UserService from '../../services/UserService';

export const fetchUsers = createAsyncThunk(
	'user/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await UserService.fetchUsers();
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('failed to load users');
		}
	}
);
