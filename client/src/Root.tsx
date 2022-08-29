import { GlobalStyles, StyledRoot } from './globalStyles';

interface RootProps {
	children: React.ReactNode;
}

export const Root = ({ children }: RootProps) => {
	return (
		<>
			<GlobalStyles />
			<StyledRoot>{children}</StyledRoot>
		</>
	);
};
