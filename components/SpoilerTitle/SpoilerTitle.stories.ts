import { StoryObj } from '@storybook/react'
import { SpoilerTitle } from '.'

const meta = {
	title: 'Components /Spoiler/ SpoilerTitle',
	component: SpoilerTitle
}

export default meta

type Story = StoryObj<typeof SpoilerTitle>

export const Docs: Story = {
	args: {
		children: 'It\'s the spoiler title'
	},
	argTypes: {

	},
	parameters: { docs: { description: { story: 'The spoiler title toggles spoiler and has an icon depending on spoiler status. Can be used only inside the Spoiler component' } } }
}
