import { StoryObj } from '@storybook/react'
import { CubeLoader } from './CubeLoader.component'

const meta = {
	title: 'CubeLoader',
	component: CubeLoader
}

export default meta

type Story = StoryObj<typeof CubeLoader>

export const Docs: Story = {
	args: {

	},
	argTypes: {
	}
}
