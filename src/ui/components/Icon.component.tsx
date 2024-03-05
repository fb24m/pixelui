import type { HTMLAttributes } from 'react'

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
	icon: string
	size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
}

export const Icon = ({ className, icon, size, ...props }: IconProps) => {
	const sizes = {
		'xs': 'text-xs',
		'sm': 'text-sm',
		'base': 'text-base',
		'lg': 'text-lg',
		'xl': 'text-xl',
		'2xl': 'text-2xl',
		'3xl': 'text-3xl',
		'4xl': 'text-4xl',
		'5xl': 'text-5xl',
		'6xl': 'text-6xl',
		'7xl': 'text-7xl',
		'8xl': 'text-8xl',
		'9xl': 'text-9xl'
	}

	return (
		<span className={`font-material ${sizes[size]} ${className}`} {...props}>{icon}</span>
	)
}