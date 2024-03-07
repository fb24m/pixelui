import { HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
	speed: 1 | 2 | 3
}

export const Skeleton = ({ className, children, speed = 3, ...props }: SkeletonProps) => {
	const speeds = {
		1: '[animation-duration:3s]',
		2: '[animation-duration:2s]',
		3: '[animation-duration:1s]',
	}

	return (
		<>
			<div className={`w-80 h-5 bg-app-card ${className} relative`} {...props}>
				<div className={`absolute w-4 h-[200%] rotate-[25deg] -translate-y-[25%] [animation-name:skeleton] ${speeds[speed]} [animation-iteration-count:infinite] bg-app`}></div>
			</div>
		</>
	)
}