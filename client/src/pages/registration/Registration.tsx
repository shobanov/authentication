import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Checkbox, Input, Title } from '../../components'
import {
	RegistrationForm,
	LinkRouterDom,
	Nav,
	NameContainer,
	RegistrationWrapper,
} from './styles'

type Inputs = {
	firstName: string
	lastName: string
	email: string
	password: string
}

export const Registration: FC = () => {
	const { register, handleSubmit } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

	return (
		<RegistrationWrapper>
			<Title title='Sign up' />
			<RegistrationForm onSubmit={handleSubmit(onSubmit)}>
				<NameContainer>
					<Input
						type='text'
						placeholder='First Name *'
						{...register('firstName')}
					/>
					<Input
						type='text'
						placeholder='Last Name *'
						{...register('lastName')}
					/>
				</NameContainer>
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
				<Checkbox label='I want to receive inspiration, marketing promotions and updates via email.' />
				<Button title='SIGN UP' type='submit' />
				<Nav>
					<LinkRouterDom to='/auth'>
						Already have an account? Sign in
					</LinkRouterDom>
				</Nav>
			</RegistrationForm>
		</RegistrationWrapper>
	)
}
