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
		speed: 2
	},
	argTypes: {
	}
}
