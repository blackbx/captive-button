export interface Props {
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
	loading?: boolean;
	submit?: boolean;
	theme?: 'default' | 'google' | 'send-magic' | 'link';
	dataTestId?: string;
	href?: string;
	onClick?(e: React.MouseEvent): void;
}
