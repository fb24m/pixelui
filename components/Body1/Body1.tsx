import { HTMLAttributes } from 'react'
import styles from './Body1.module.scss'

export const Body1 = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<p className={`${styles.body} ${className}`} {...props}></p>
	)
}