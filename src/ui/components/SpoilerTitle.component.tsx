import type { HTMLAttributes } from 'react'

export interface SpoilerTitleProps extends HTMLAttributes<HTMLElement> {
}

export const SpoilerTitle = ({ className, children, ...props }: SpoilerTitleProps) => {
	return (
		<summary className={`${className} spoiler__title font-press-start-2p p-4 hover:bg-app-accent py-6 flex gap-2 items-center cursor-pointer text-2xl [user-select:none]`} {...props}>
			<svg className="w-8 h-8" width="290" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="550" y="450" width="100" height="100" transform="rotate(-180 550 450)" fill="white" />
				<rect x="350" y="650" width="100" height="100" transform="rotate(-180 350 650)" fill="white" />
				<rect x="350" y="250" width="100" height="100" transform="rotate(-180 350 250)" fill="white" />
				<rect x="450" y="350" width="100" height="100" transform="rotate(-180 450 350)" fill="white" />
				<rect x="450" y="550" width="100" height="100" transform="rotate(-180 450 550)" fill="white" />
			</svg>
			{children}
		</summary>
	)
}