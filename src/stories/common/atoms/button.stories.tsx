import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../../../ui/common';


export default {
	title: 'Buttons [BEM]',
	component: Button,
	// argTypes: ButtonProps,
} as Meta;

const ButtonComponent: Story<ButtonProps> = (args: ButtonProps) => {
	console.log('args', args)
	return <Button {...args} />
};

export const Primary = ButtonComponent.bind({});

Primary.args = {
	text: 'Submit',
	type: 'primary',
};

export const Secondary = ButtonComponent.bind({});

Secondary.args = {
	text: 'Cancel',
	type: 'secondary',
};

export const Link = ButtonComponent.bind({});

Link.args = {
	text: 'Submit',
	type: 'link',
};

export const Progress = ButtonComponent.bind({});

Progress.args = {
	text: 'Submit',
	type: 'primary',
};

export const ProgressSecondary = ButtonComponent.bind({});

ProgressSecondary.args = {
	text: 'Submit',
	type: 'secondary',
};
