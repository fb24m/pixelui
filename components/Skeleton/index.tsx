import type { HTMLAttributes } from 'react'

export const Skeleton = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<>
			<div className={`w-80 h-5 bg-app-card ${className} relative`} {...props}>
				<div className={`absolute w-4 h-[200%] rotate-[25deg] -translate-y-[25%] [animation-name:skeleton] [animation-duration:1s] [animation-iteration-count:infinite] bg-app`}></div>
			</div>
		</>
	)
}