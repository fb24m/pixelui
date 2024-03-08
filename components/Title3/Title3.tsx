import { HTMLAttributes } from 'react'
import styles from './Title3.module.scss'

export const Title3 = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<h3 className={`${styles.title} ${className}`} {...props}></h3>
	)
}