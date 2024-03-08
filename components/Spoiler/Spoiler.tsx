import type { HTMLAttributes } from 'react'
import styles from './Spoiler.module.scss'

export const Spoiler = ({ className, ...props }: HTMLAttributes<HTMLDetailsElement>) => {
	return (
		<details className={`${className} ${styles.spoiler}`} {...props}></details>
	)
}