import { StoryObj } from '@storybook/react'
import { CubeLoader } from './CubeLoader.component'

const meta = {
	title: 'Components / CubeLoader',
	component: CubeLoader
}

export default meta

type Story = StoryObj<typeof CubeLoader>

export const Docs: Story = {
	args: {
		variation: 'beat',
		speed: 3
	},
	argTypes: {
		variation: {
			control: { type: 'select' },
			description: 'Controls the animation type'
		},
		speed: {
			description: 'Control the animation speed (1 = 0.8s, 2 = 1s, 3 = 1.6s)',
			control: { type: 'select' }
		}
	},
	parameters: { docs: { description: { story: 'A cube loader alerts a user that content is being loaded or processed and they should wait for the activity to complete' } } }
}
