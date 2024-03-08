import { Icon } from '../Icon/Icon'
import type { InputProps } from './Input.props'
import styles from './Input.module.scss'

export const Input = ({ className, children, appearance = 'primary', icon, ...props }: InputProps) => {

	return (
		<div className={`${styles.wrapper} ${icon ? styles.withIcon : ''} ${styles[appearance]}`}>
			{icon ? <Icon icon={icon} className={styles.icon} /> : ''}
			<input className={`${className} ${styles.input}`} {...props} />
		</div>
	)
}