import type { CubeLoaderProps } from './CubeLoader.props'
import styles from './CubeLoader.module.scss'

export const CubeLoader = ({ className, variation = 'spinning', ...props }: CubeLoaderProps) => {
	return (
		<>
			{variation === 'beat' ?
				<div className={`${className} ${styles.beat}`} {...props}>
					<div className={`${styles.beat_cube} ${styles.beat_cube1}`}></div>
					<div className={`${styles.beat_cube} ${styles.beat_cube2}`}></div>
					<div className={`${styles.beat_cube} ${styles.beat_cube3}`}></div>
					<div className={`${styles.beat_cube} ${styles.beat_cube4}`}></div>
				</div>
				: ''}
			{variation === 'jumping' ?
				<div className={`${className} ${styles.jumping}`} {...props}>
					<div className={`${styles.jumping_cube} ${styles.jumping_cube_1}`}></div>
					<div className={`${styles.jumping_cube} ${styles.jumping_cube_2}`}></div>
				</div>
				: ''}
			{variation === 'spinning' ?
				<div className={`${className} ${styles.spinning}`} {...props}>
					<div className={`${styles.spinning_cube} ${styles.spinning_cube_1}`}></div>
					<div className={`${styles.spinning_cube} ${styles.spinning_cube_2}`}></div>
				</div>
				: ''}
		</>
	)
}