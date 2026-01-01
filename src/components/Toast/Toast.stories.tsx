import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'

const meta: Meta<typeof Toast> = {
	title: 'Feedback/Toast',
	component: Toast,
	argTypes: {
		type: {
			control: 'select',
			options: ['success', 'error', 'info'],
		},
		duration: {
			control: 'number',
		},
	},
}

export default meta

export const Success: StoryObj<typeof Toast> = {
	args: {
		message: 'Success message',
		type: 'success',
		duration: 3000,
	},
}

export const Error: StoryObj<typeof Toast> = {
	args: {
		message: 'Error occurred',
		type: 'error',
		duration: 5000,
	},
}

export const Info: StoryObj<typeof Toast> = {
	args: {
		message: 'Info message',
		type: 'info',
	},
}
