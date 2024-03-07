import { StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton.component'

const meta = {
	title: 'Components / Skeleton',
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
	},
	parameters: {
		docs: {
			description: {
				story: 'The Skeleton component is a temporary animation placeholder for when a service call takes time to return data and we don\'t want to block rendering the rest of the UI'
			}
		}
	}
}
