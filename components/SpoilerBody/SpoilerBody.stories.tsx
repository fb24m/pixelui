import { StoryObj } from '@storybook/react'
import { SpoilerBody } from './SpoilerBody'

const meta = {
	title: 'Components / Spoiler / SpoilerBody',
	component: SpoilerBody
}

export default meta

type Story = StoryObj<typeof SpoilerBody>

export const Docs: Story = {
	args: {
		children: 'It\'s the spoiler body'
	},
	argTypes: {

	},
	parameters: { docs: { description: { story: 'The spoiler body is a panel for spoiler. Can be used only inside the Spoiler component' } } }
}
