import type { HTMLAttributes } from 'react'

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
	icon: string
}

export const Icon = ({ className, icon, ...props }: IconProps) => {
	return (
		<span className={`font-material ${className}`} {...props}>{icon}</span>
	)
}