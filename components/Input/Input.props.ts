import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	appearance?: 'primary' | 'secondary'
	icon?: string
	type?: HTMLInputTypeAttribute
}