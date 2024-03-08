import type { HTMLAttributes } from 'react'
import styles from './SpoilerBody.module.scss'

export const SpoilerBody = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={`${styles.spoilerbody} ${className}`} {...props}></div>
	)
}