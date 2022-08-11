import * as Yup from 'yup';

export const schema = Yup.object({
	email: Yup.string().email('must be a valid email').required('email required'),
}).required();
