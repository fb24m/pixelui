import { HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
	variation: 'beat' | 'jumping'
	speed: 1 | 2 | 3
}

export const CubeLoader = ({ className, children, variation = 'beat', speed = 3, ...props }: SkeletonProps) => {
	const cubeClass = 'loader-cube absolute w-[20px] h-[20px] bg-app-accent'

	const speedClass = {
		3: '[animation-duration:.8s]',
		2: '[animation-duration:1s]',
		1: '[animation-duration:1.6s]'
	}[speed]

	return (
		<>
			{variation === 'beat' ?
				<div className={`relative block w-[60px] h-[60px]`}>
					<div className={`${cubeClass} [animation-name:cube1] ${speedClass} [animation-iteration-count:infinite] top-0 left-0`}></div>
					<div className={`${cubeClass} [animation-name:cube2] ${speedClass} [animation-iteration-count:infinite] top-0 right-0`}></div>
					<div className={`${cubeClass} [animation-name:cube3] ${speedClass} [animation-iteration-count:infinite] bottom-0 left-0`}></div>
					<div className={`${cubeClass} [animation-name:cube4] ${speedClass} [animation-iteration-count:infinite] bottom-0 right-0`}></div>
				</div>
				: ''}
			{variation === 'jumping' ?
				<div className="relative w-[72px] h-8">
					<div className={`w-8 h-8 bg-app-accent absolute left-0 [animation-name:flycube1] [animation-iteration-count:infinite] ${speedClass}`}></div>
					<div className={`w-8 h-8 bg-app-accent absolute left-10 [animation-name:flycube2] [animation-iteration-count:infinite] ${speedClass}`}></div>
				</div>
				: ''}
		</>
	)
}