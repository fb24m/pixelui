import type { HTMLAttributes } from 'react'

export interface SpoilerBodyProps extends HTMLAttributes<HTMLDivElement> {
}

export const SpoilerBody = ({ className, ...props }: SpoilerBodyProps) => {
	return (
		<div className={`p-4 ${className}`} {...props}></div>
	)
}