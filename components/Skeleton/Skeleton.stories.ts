import { StoryObj } from '@storybook/react'
import { Skeleton } from '.'

const meta = {
	title: 'Components / Skeleton',
	component: Skeleton
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Docs: Story = {
	args: {
	},
	argTypes: {
	},
	parameters: {
		docs: {
			description: {
				story: 'The Skeleton component is a temporary animation placeholder for when a service call takes time to return data and we don\'t want to block rendering the rest of the UI'
			}
		}
	}
}
