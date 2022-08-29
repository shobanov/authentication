import * as Yup from 'yup';

export const schema = Yup.object({
	firstName: Yup.string()
		.min(2, 'first name too short')
		.max(15, 'first name too long')
		.required('first name required'),
	lastName: Yup.string()
		.min(2, 'last name too short')
		.max(25, 'last name too long')
		.required('last name required'),
	email: Yup.string().email('must be a valid email').required('email required'),
	password: Yup.string().min(6).max(20).required('password required'),
	passwordConfirm: Yup.string().oneOf(
		[Yup.ref('password')],
		'Passwords does not match'
	),
}).required();
