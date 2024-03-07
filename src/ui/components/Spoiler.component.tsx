import { HTMLAttributes } from "react"
import { Icon } from "./Icon.component"

export interface SpoilerProps extends HTMLAttributes<HTMLDetailsElement> {
}

export const Spoiler = ({ className, ...props }: SpoilerProps) => {
	return (
		<details className={`parent bg-app-car ${className} [&_svg]:open:rotate-90 [&_summary]:open:bg-app-accent`} {...props}></details>
	)
}