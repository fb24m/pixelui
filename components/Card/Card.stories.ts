import { StoryObj } from '@storybook/react'
import { Card as CardComponent } from './index/'

const meta = {
	title: 'Components / Card',
	component: CardComponent,
	docs: {
		description: { story: 'A card is a container that holds information and actions related to a single concept or object, like a document or a contact. Cards can give information prominence and create predictable patterns.While they\'re very flexible, it\'s important to use them consistently for particular use cases across experiences.' }
	}
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
	},
	parameters: {
		docs: {
			description: { story: 'A card is a container that holds information and actions related to a single concept or object, like a document or a contact.\n\n Cards can give information prominence and create predictable patterns.While they\'re very flexible, it\'s important to use them consistently for particular use cases across experiences.' }
		}
	},
}