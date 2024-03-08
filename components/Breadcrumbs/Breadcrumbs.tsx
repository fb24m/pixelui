import type { HTMLAttributes } from 'react'
import styles from './Breadcrumbs.module.scss'

export const Breadcrumbs = ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => {
	return <ul className={styles.breadcrumbs} {...props}></ul>
}