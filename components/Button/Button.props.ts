import type { HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	appearance?: 'primary' | 'secondary' | 'transparent'
	icon?: string
	type?: 'button' | 'submit' | 'reset'
}