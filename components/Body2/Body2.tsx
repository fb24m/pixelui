import { HTMLAttributes } from 'react'
import styles from './Body2.module.scss'

export const Body2 = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<p className={`${styles.body} ${className}`} {...props}></p>
	)
}