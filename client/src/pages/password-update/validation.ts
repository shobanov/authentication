import * as Yup from 'yup';

export const schema = Yup.object({
	password: Yup.string().min(6).max(20).required('password required'),
	passwordConfirm: Yup.string().oneOf(
		[Yup.ref('password')],
		'Passwords does not match'
	),
});
