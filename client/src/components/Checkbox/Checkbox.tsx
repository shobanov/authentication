import { CheckboxStyled, Label, Title } from './styles';

interface CheckboxProps {
	label: string;
	isChecked: boolean;
	isDisabled: boolean;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
	label,
	handleChange,
	isDisabled,
	isChecked,
}: CheckboxProps) => {
	return (
		<Label>
			<CheckboxStyled
				checked={isChecked}
				onChange={handleChange}
				disabled={isDisabled}
			/>
			<Title>{label}</Title>
		</Label>
	);
};
