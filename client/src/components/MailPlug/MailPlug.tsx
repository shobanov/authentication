import { MailPlugStyled } from './styles';
import mailPlug from '../../assets/svg/mail.svg';

interface MailPlugProps {
	title: string;
}

export const MailPlug = ({ title }: MailPlugProps) => (
	<MailPlugStyled>
		<h2>{title}</h2>
		<img src={mailPlug} alt='mail' />
	</MailPlugStyled>
);
