import { CheckboxStyled, Label, Title } from './styles';

interface CheckboxProps {
	label: string;
}

export const Checkbox = ({ label }: CheckboxProps) => {
	return (
		<Label>
			<CheckboxStyled />
			<Title>{label}</Title>
		</Label>
	);
};
