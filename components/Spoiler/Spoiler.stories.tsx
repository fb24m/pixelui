import { StoryObj } from '@storybook/react'
import { Spoiler } from './Spoiler'
import { SpoilerTitle } from '../SpoilerTitle/SpoilerTitle'
import { SpoilerBody } from '../SpoilerBody/SpoilerBody'

const meta = {
	title: 'Components / Spoiler / Spoiler',
	component: Spoiler
}

export default meta

type Story = StoryObj<typeof Spoiler>

export const Docs: Story = {
	args: {
		children: [
			<SpoilerTitle>Spoiler Title</SpoilerTitle>,
			<SpoilerBody>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quibusdam saepe laudantium? Deserunt, earum? Culpa magni nisi error animi dignissimos dolores, consequatur debitis ab distinctio sit laudantium labore, cum rerum?
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae quasi pariatur quo, itaque in, quod officia, magni nostrum quia maxime iste ex sapiente rerum quae autem dolores explicabo? Voluptatem.
			</SpoilerBody>
		]
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		}
	},
	parameters: { docs: { description: { story: 'The spoiler is an expandable block. You can use it to hide large data values or reduce size of content. Must contain SpoilerTitle and SpoilerBody components' } } }
}
