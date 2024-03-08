import { HTMLAttributes } from 'react'
import styles from './Title4.module.scss'

export const Title4 = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<h4 className={`${styles.title} ${className}`} {...props}></h4>
	)
}