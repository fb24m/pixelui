import type { HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	appearance?: 'pixel' | 'solid' | 'outline'
}