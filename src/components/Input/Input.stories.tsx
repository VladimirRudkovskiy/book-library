import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
	title: 'Input/Input',
	component: Input,
	argTypes: {
		clearable : { control: 'boolean' },
		type: { control: 'select', options: ['text', 'password', 'number'] },
	},
}

export default meta

export const Text: StoryObj = {
	args: {
		placeholder: 'Text input',
	},
}

export const Password: StoryObj = {
	args: {
		type: 'password',
		placeholder: 'Password',
	},
}

export const Clearable: StoryObj = {
	args: {
		clearable: true,
		placeholder: 'Clear placeholder'
	}
}
