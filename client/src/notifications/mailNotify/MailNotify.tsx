import { MailNotifyStyled } from './styles';
import mailNotify from '../../assets/svg/mail.svg';

interface MailNotifyProps {
	children: React.ReactNode;
}

export const MailNotify = ({ children }: MailNotifyProps) => (
	<MailNotifyStyled>
		<h2>{children}</h2>
		<img src={mailNotify} alt='mail' />
	</MailNotifyStyled>
);
