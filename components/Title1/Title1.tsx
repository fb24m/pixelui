import { HTMLAttributes } from 'react'
import styles from './Title1.module.scss'

export const Title1 = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<h1 className={`${styles.title} ${className}`} {...props}></h1>
	)
}