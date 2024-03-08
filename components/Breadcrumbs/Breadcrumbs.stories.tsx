import { StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs'
import { BreadcrumbsItem } from '../BreadcrumbsItem/BreadcrumbsItem'

const meta = {
	title: 'Components / Breadcrumbs / Breadcrumbs',
	component: Breadcrumbs
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Docs: Story = {
	args: {
		children: [
			<BreadcrumbsItem><a href="#">Home</a></BreadcrumbsItem>,
			<BreadcrumbsItem><a href="#">Articles</a></BreadcrumbsItem>,
			<BreadcrumbsItem>New version of Pixie UI released</BreadcrumbsItem>
		]
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		}
	},
	parameters: {
		docs: {
			description: { story: '' }
		}
	},
}