import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Checkbox, Input, Title } from '../../components'
import { AuthForm, AuthWrapper, LinkRouterDom, Nav } from './styles'

type Inputs = {
	email: string
	password: string
}

export const Auth: FC = () => {
	const { register, handleSubmit } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

	return (
		<AuthWrapper>
			<Title title='Sign in' />
			<AuthForm onSubmit={handleSubmit(onSubmit)}>
				<Input
					type='email'
					placeholder='Email Address *'
					{...register('email')}
				/>
				<Input
					type='password'
					placeholder='Password *'
					{...register('password')}
				/>
				<Checkbox label='Remember me' />
				<Button title='SIGN IN' type='submit' />
				<Nav>
					<LinkRouterDom to='/forgot_password'>Forgot password?</LinkRouterDom>
					<LinkRouterDom to='/registration'>
						Don't have an account? Sign Up
					</LinkRouterDom>
				</Nav>
			</AuthForm>
		</AuthWrapper>
	)
}
