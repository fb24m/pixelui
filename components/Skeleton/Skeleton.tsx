import type { HTMLAttributes } from 'react'
import styles from './Skeleton.module.scss'

export const Skeleton = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<>
			<div className={`${styles.skeleton} ${className} relative`} {...props}>
				<div className={`${styles.skeletonline}`}></div>
			</div>
		</>
	)
}