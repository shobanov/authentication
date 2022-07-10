import { AppDispatch } from '../store';
import { userSlice, statusSlice } from '../slices';
import * as UserService from '../../services/UserService';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(statusSlice.action.pending);
		await UserService.fetchUsers();
		dispatch(userSlice.actions.usersFetch());
		dispatch(statusSlice.actions.success());
	} catch (e) {
		dispatch(statusSlice.actions.error(e.response?.data?.message));
	}
};
