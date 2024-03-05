import { StoryObj } from '@storybook/react'
import { Icon as IconComponent } from './Icon.component'

const meta = {
	title: 'Icon',
	component: IconComponent
}

export default meta

type Story = StoryObj<typeof IconComponent>

export const Icon: Story = {
	args: {
		icon: 'translate'
	},
	argTypes: {
		size: {
			options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
			control: { type: 'select' }
		}
	}
}