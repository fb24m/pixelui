import type { CardProps } from './Card.props'

export const Card = ({ className, children, appearance = 'pixel', ...props }: CardProps) => {
	const styles = {
		'pixel': `px-6 py-2 my-4 bg-app-card relative before:block before:h-4 before:w-[calc(100%-32px)] before:absolute before:-top-4 before:left-4 before:bg-app-card
			after:block after:h-4 after:w-[calc(100%-32px)] after:absolute after:-bottom-4 after:left-4 after:bg-app-card`,
		'solid': 'bg-app-card p-4 px-5',
		'outline': 'outline-app-card outline-4 outline -outline-offset-4 text-app-card relative p-4 px-5'
	}

	return (
		<div className={`font-press-start-2p text-white ${styles[appearance]}`} {...props}>
			{children}
		</div>
	)
}