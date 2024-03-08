import { StoryObj } from '@storybook/react'
import { Title1 } from './Title1/Title1'
import { ReactNode } from 'react'
import { Title2 } from './Title2/Title2'
import { Title3 } from './Title3/Title3'
import { Title4 } from './Title4/Title4'
import { Body1 } from './Body1/Body1'

const meta = {
	title: 'Components / Text / Titles',
	component: ({ children }: { children: ReactNode }) => (<div>{children}</div>)
}

export default meta

type Story = StoryObj

export const Docs: Story = {
	args: {
		children: [
			<Title1>Title1 (h1). Add more text for multyline title</Title1>,
			<Title2>Title2 (h2). Add more text for multyline title</Title2>,
			<Title3>Title3 (h3). Add more text for multyline title</Title3>,
			<Title4>Title4 (h4). Add more text for multyline title</Title4>,
			<Body1>Body1 // for demo</Body1>,
		]
	},
	argTypes: {
	}
}