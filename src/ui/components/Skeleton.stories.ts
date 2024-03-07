import { StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton.component'

const meta = {
	title: 'Skeleton',
	component: Skeleton
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Docs: Story = {
	args: {
		speed: 1
	},
	argTypes: {
		speed: {
			description: 'Control the animation speed (1 = 3s, 2 = 2s, 3 = 1s)',
			control: { type: 'select' }
		}
	}
}
