import { HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
	speed: 1 | 2 | 3
}

export const CubeLoader = ({ className, children, speed = 3, ...props }: SkeletonProps) => {
	const cubeClass = 'absolute w-5 h-5 bg-app-card'

	return (
		<>
			<div className={`relative block w-[60px] h-[60px]`}>
				<div className={`${cubeClass} [animation-name:cube\\_1] [animation-duration:1s] [animation-iteration-count:infinite] top-0 left-0`}></div>
				<div className={`${cubeClass} [animation-name:cube\\_2] [animation-duration:1s] [animation-iteration-count:infinite] top-0 right-0`}></div>
				<div className={`${cubeClass} [animation-name:cube\\_3] [animation-duration:1s] [animation-iteration-count:infinite] bottom-0 left-0`}></div>
				<div className={`${cubeClass} [animation-name:cube\\_4] [animation-duration:1s] [animation-iteration-count:infinite] bottom-0 right-0`}></div>
			</div>
		</>
	)
}