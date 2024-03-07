import { StoryObj } from '@storybook/react'
import { Button as ComponentButton } from './Button.component'

const meta = {
	title: 'Button',
	component: ComponentButton
}

export default meta

type Story = StoryObj<typeof ComponentButton>

export const Docs: Story = {
	args: {
		children: 'Button',
		appearance: 'primary'
	},
	argTypes: {
		appearance: {
			options: ['primary', 'secondary', 'transparent'],
			control: { type: 'select' }
		},
		icon: {
			options: [undefined, 'login', 'thumb_up', 'person'],
			control: { type: 'select' }
		},
	}
}
