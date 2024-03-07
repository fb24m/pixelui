import { StoryObj } from '@storybook/react'
import { Icon as IconComponent } from './Icon.component'

const meta = {
	title: 'Components / Icon',
	component: IconComponent
}

export default meta

type Story = StoryObj<typeof IconComponent>

export const Docs: Story = {
	args: {
		icon: 'translate',
		className: 'text-[#fff]'
	},
	argTypes: {
	}
}