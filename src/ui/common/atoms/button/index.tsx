import * as React from 'react';

import './button.scss';


type ButtonVariants = 'primary' | 'secondary' | 'link' | 'danger' | 'none';


export interface ButtonProps {
	/**
	 * Checks if the button should be disabled
	 */
	disabled?: boolean;
	onClick?: React.MouseEventHandler;
	htmlType?: 'submit' | 'reset' | 'button';
	type: ButtonVariants,
	customClass?: string;
	/**
	 * The display content of the button
	 */
	text: React.ReactNode;
	style?: React.CSSProperties;
}


export const Button: React.FC<ButtonProps> = props => {
	const {
		htmlType = 'button',
		text,
		type = 'primary',
		customClass = '',
		...p
	} = props

	const variantClass = type !== 'none' ? `oc-button_${type}` : ''

	return (
		<button
			type={htmlType}
			className={`oc-button ${variantClass} ${customClass}`}
			{...p}
		>
			<span className="oc-button__text">{text}</span>
		</button>
	);
};
