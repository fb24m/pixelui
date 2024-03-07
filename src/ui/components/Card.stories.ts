import { StoryObj } from '@storybook/react'
import { Card as CardComponent } from './Card.component'

const meta = {
	title: 'Card',
	component: CardComponent
}

export default meta

type Story = StoryObj<typeof CardComponent>

export const Docs: Story = {
	args: {
		children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat perspiciatis omnis numquam amet enim voluptatibus illo assumenda? Ut laudantium quo voluptatem accusamus at magnam. Perspiciatis perferendis enim officiis accusamus odio?',
	},
	argTypes: {
		appearance: {
			options: ['pixel', 'solid', 'outline'],
			control: { type: 'select' }
		}
	}
}