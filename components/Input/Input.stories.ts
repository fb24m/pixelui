import { StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
	title: 'Components / Input',
	component: Input
}

export default meta

type Story = StoryObj<typeof Input>

export const Docs: Story = {
	args: {
	},
	argTypes: {
		appearance: {
			options: ['primary', 'secondary'],
			control: { type: 'select' }
		},
		icon: {
			options: [undefined, 'login', 'thumb_up', 'person', 'search'],
			control: { type: 'select' }
		},
		type: {
			table: {
				disable: true
			}
		}
	},
	parameters: { docs: { description: { story: '' } } }
}
