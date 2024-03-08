import { StoryObj } from '@storybook/react'
import { Button as ComponentButton } from './Button'

const meta = {
	title: 'Components / Button',
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
		type: {
			table: {
				disable: true
			}
		}
	},
	parameters: { docs: { description: { story: 'A button triggers an action or event when activated' } } }
}
