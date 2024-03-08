import { ReactNode } from 'react'
import styles from './PixieProvider.module.scss'

export const PixieProvider = ({ children }: { children: ReactNode }) => {
	return <div className={styles.provider}>{children}</div>
}