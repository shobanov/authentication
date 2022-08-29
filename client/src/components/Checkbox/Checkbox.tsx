import { CheckboxStyled, Label, Title } from './styles';

interface CheckboxProps {
	label: string;
	isChecked: boolean;
	isDisabled: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = (props: CheckboxProps) => {
	return (
		<Label>
			<CheckboxStyled {...props} />
			<Title>{props.label}</Title>
		</Label>
	);
};
