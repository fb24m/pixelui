import { Icon } from '../Icon/Icon'
import type { ButtonProps } from './Button.props'
import styles from './Button.module.scss'

export const Button = ({ className, children, appearance = 'primary', icon, ...props }: ButtonProps) => {

	return (
		<>
			<button className={`${className} ${icon ? styles.withIcon : ''} ${styles.button} ${styles[appearance]}`} {...props}>
				{icon ? <Icon icon={icon} className={styles.icon} /> : ''}
				{children}
			</button>
		</>
	)
}