import type { IconProps } from './Icon.props'

export const Icon = ({ className, icon, ...props }: IconProps) => {
	return (
		<span className={`font-material ${className}`} {...props}>{icon}</span>
	)
}