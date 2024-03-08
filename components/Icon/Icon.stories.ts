import { StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta = {
	title: 'Components / Icon',
	component: Icon
}

export default meta

type Story = StoryObj<typeof Icon>

export const Docs: Story = {
	args: {
		icon: 'translate',
		className: 'text-[#fff]'
	},
	argTypes: {
	}
}