import type { HTMLAttributes } from 'react'

export const Spoiler = ({ className, ...props }: HTMLAttributes<HTMLDetailsElement>) => {
	return (
		<details className={`parent bg-app-car ${className} [&_svg]:open:rotate-90 [&_summary]:open:bg-app-accent`} {...props}></details>
	)
}