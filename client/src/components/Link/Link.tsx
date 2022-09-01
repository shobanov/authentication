import { PropsWithChildren } from 'react';

import { LinkStyled } from './styles';

interface LinkProps {
  to: string;
}

export function Link(props: PropsWithChildren<LinkProps>) {
  return <LinkStyled {...props} />;
}
