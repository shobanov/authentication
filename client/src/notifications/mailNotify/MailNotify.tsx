import { ReactNode } from 'react';

import { MailNotifyStyled } from './styles';
import mailNotify from '../../assets/svg/mail.svg';

interface MailNotifyProps {
  children: ReactNode;
}

export function MailNotify({ children }: MailNotifyProps) {
  return (
    <MailNotifyStyled>
      <h2>{children}</h2>
      <img src={mailNotify} alt="mail" />
    </MailNotifyStyled>
  );
}
