import * as Yup from 'yup';

export const schema = Yup.object({
	email: Yup.string().email('must be a valid email').required('email required'),
	password: Yup.string().min(6).max(20).required('password required'),
}).required();
