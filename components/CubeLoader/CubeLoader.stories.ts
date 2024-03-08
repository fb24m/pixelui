import { StoryObj } from '@storybook/react'
import { CubeLoader } from './CubeLoader'
import { CubeLoaderProps } from './CubeLoader.props'

const meta = {
	title: 'Components / CubeLoader',
	component: CubeLoader
}

export default meta

type Story = StoryObj<CubeLoaderProps>

export const Docs: Story = {
	args: {
		variation: 'beat'
	},
	argTypes: {
		variation: {
			control: { type: 'select' },
			description: 'Controls the animation type',
		}
	},
	parameters: { docs: { description: { story: 'A cube loader alerts a user that content is being loaded or processed and they should wait for the activity to complete' } } }
}
