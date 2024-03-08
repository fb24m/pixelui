import type { CardProps } from './Card.props'
import styles from './Card.module.scss'

export const Card = ({ className, children, appearance = 'pixel', ...props }: CardProps) => {

	return (
		<div className={`${styles.card} ${styles[appearance]} ${className}`} {...props}>
			{children}
		</div>
	)
}