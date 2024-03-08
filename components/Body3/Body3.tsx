import { HTMLAttributes } from 'react'
import styles from './Body3.module.scss'

export const Body3 = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<p className={`${styles.body} ${className}`} {...props}></p>
	)
}