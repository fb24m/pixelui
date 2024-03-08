import type { HTMLAttributes } from 'react'

export const SpoilerBody = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={`p-4 ${className}`} {...props}></div>
	)
}