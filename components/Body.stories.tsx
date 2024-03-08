import { StoryObj } from '@storybook/react'
import { ReactNode } from 'react'
import { Title2 } from './Title2/Title2'
import { Body1 } from './Body1/Body1'
import { Body2 } from './Body2/Body2'
import { Body3 } from './Body3/Body3'

const meta = {
	title: 'Components / Text / Bodies',
	component: ({ children }: { children: ReactNode }) => (<div>{children}</div>)
}

export default meta

type Story = StoryObj

export const Docs: Story = {
	args: {
		children: [
			<Title2>Title2 // for demo</Title2>,
			<Body1>Body1 (p). Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur fuga eius quidem cumque. Iste aspernatur recusandae fuga atque nihil amet doloribus, omnis fugiat laborum, ut officia odit, animi illum!</Body1>,
			<Body2>Body2 (p). Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis molestias veritatis tempora magni, aperiam temporibus dolorem ullam placeat natus officia amet vel. Recusandae id, doloribus repudiandae distinctio quidem eum ad!</Body2>,
			<Body3>Body3 (p). Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium eveniet illum sunt quis itaque tempora perferendis vitae, dolorem odio beatae possimus libero inventore deleniti ipsam cumque natus mollitia placeat quisquam!</Body3>
		]
	},
	argTypes: {
	}
}