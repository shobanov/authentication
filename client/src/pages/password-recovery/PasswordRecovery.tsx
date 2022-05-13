import { FC } from 'react'

import { Button, Input, Title } from '../../components'
import { PasswordRecoveryForm, PasswordRecoveryWrapper } from './styles'

export const PasswordRecovery: FC = () => {
	return (
		<PasswordRecoveryWrapper>
			<Title title='Enter the email address associated with your account. Password reset instructions will be sent via email.' />
			<PasswordRecoveryForm>
				<Input type='email' name='email' placeholder='Email address' />
				<Button title='Email me the instructions' type='submit' />
			</PasswordRecoveryForm>
		</PasswordRecoveryWrapper>
	)
}
