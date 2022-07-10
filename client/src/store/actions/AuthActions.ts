import { AppDispatch } from '../store';
import { loginSlice, registrationSlice, statusSlice } from '../slices';
import * as AuthService from '../../services/AuthService';
import { RegisterDtoType } from '../../types';

export const registration =
	() => async (dispatch: AppDispatch, dto: RegisterDtoType) => {
		try {
			dispatch(statusSlice.action.pending);
			const response = await AuthService.registration(dto);
			localStorage.setItem('token', response.data.accessToken);
			dispatch(registrationSlice.actions.registration(response.data.user));
		} catch (e) {
			dispatch(statusSlice.actions.error(e.response?.data?.message));
		}
	};

export const login =
	() => async (dispatch: AppDispatch, email: string, password: string) => {
		try {
			dispatch(statusSlice.action.pending);
			const response = await AuthService.login(email, password);
			localStorage.setItem('token', response.data.accessToken);
			dispatch(loginSlice.actions.login(response.data.user));
			dispatch(statusSlice.actions.success());
		} catch (e) {
			dispatch(statusSlice.actions.error(e.response?.data?.message));
		}
	};

export const logout = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(statusSlice.action.statusPending);
		await AuthService.logout();
		localStorage.removeItem('token');
		dispatch(loginSlice.actions.logout());
		dispatch(statusSlice.actions.success());
	} catch (e) {
		dispatch(statusSlice.actions.error(e.response?.data?.message));
	}
};
