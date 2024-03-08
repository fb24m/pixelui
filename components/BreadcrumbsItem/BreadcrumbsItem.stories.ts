import { StoryObj } from '@storybook/react'
import { BreadcrumbsItem } from './BreadcrumbsItem'

const meta = {
	title: 'Components / Breadcrumbs / BreadcrumbsItem',
	component: BreadcrumbsItem
}

export default meta

type Story = StoryObj<typeof BreadcrumbsItem>

export const Docs: Story = {
	args: {
		children: 'Home'
	},
	argTypes: {

	},
	parameters: {
		docs: {
			description: { story: '' }
		}
	},
}