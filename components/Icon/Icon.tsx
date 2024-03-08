import type { IconProps } from './Icon.props'
import styles from './Icon.module.scss'

export const Icon = ({ className, icon, ...props }: IconProps) => {
	return (
		<span className={`${styles.icon} ${className}`} {...props}>{icon}</span>
	)
}