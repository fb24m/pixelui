import { Icon } from '../Icon'
import type { ButtonProps } from './Button.props'

export const Button = ({ className, children, appearance = 'primary', icon, ...props }: ButtonProps) => {

	const defaultClasses = 'px-3 py-2 text-sm font-press-start-2p'
	const classes = {
		'primary': 'bg-app-card text-white hover:bg-app-accent',
		'secondary': 'border-app-card outline-app-accent outline-2 outline -outline-offset-2 hover:bg-app-accent hover:text-white',
		'transparent': 'hover:bg-app-accent hover:text-white'
	}
	const hasIconClasses = icon ? 'inline-flex items-center gap-2' : ''

	return (
		<>
			<button className={`${className} ${defaultClasses} ${classes[appearance]} group box-border ${hasIconClasses}`} {...props}>
				{icon ? <Icon icon={icon} className="text-[20px]" /> : ''}
				{children}
			</button>
		</>
	)
}