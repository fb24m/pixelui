import type { CubeLoaderProps } from './CubeLoader.props'

export const CubeLoader = ({ className, variation = 'beat', ...props }: CubeLoaderProps) => {
	const cubeClass = 'loader-cube absolute w-[20px] h-[20px] bg-app-accent'

	return (
		<>
			{variation === 'beat' ?
				<div className={`${className} relative block w-[60px] h-[60px]`} {...props}>
					<div className={`${cubeClass} [animation-name:cube1] [animation-duration:.7s] [animation-iteration-count:infinite] top-0 left-0`}></div>
					<div className={`${cubeClass} [animation-name:cube2] [animation-duration:.7s] [animation-iteration-count:infinite] top-0 right-0`}></div>
					<div className={`${cubeClass} [animation-name:cube3] [animation-duration:.7s] [animation-iteration-count:infinite] bottom-0 left-0`}></div>
					<div className={`${cubeClass} [animation-name:cube4] [animation-duration:.7s] [animation-iteration-count:infinite] bottom-0 right-0`}></div>
				</div>
				: ''}
			{variation === 'jumping' ?
				<div className={`${className} relative w-[72px] h-8`} {...props}>
					<div className={`w-8 h-8 bg-app-accent absolute left-0 [animation-name:flycube1] [animation-iteration-count:infinite] [animation-duration:.7s`}></div>
					<div className={`w-8 h-8 bg-app-accent absolute left-10 [animation-name:flycube2] [animation-iteration-count:infinite] [animation-duration:.7s`}></div>
				</div>
				: ''}
		</>
	)
}