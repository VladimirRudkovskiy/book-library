import { Meta, StoryObj } from '@storybook/react'
import { SideBar } from './SideBar'


const meta: Meta<typeof SideBar> = {
	title: 'Navigation/SidebarMenu',
	component: SideBar,
}
export default meta

export const OneLevel: StoryObj = {
	args: {
		open: true,
		onClose: () => { },
		items: [
			{ label: 'Dashboard' },
			{ label: 'Settings' },
			{ label: 'Profile' },
		],
	},
}

export const TwoLevel: StoryObj = {
	args: {
		open: true,
		onClose: () => { },
		items: [
			{
				label: 'Dashboard',
				children: [
					{ label: 'Analytics' },
					{ label: 'Reports' },
				],
			},
			{
				label: 'Settings',
				children: [{ label: 'Account' }],
			},
		],
	},
}
