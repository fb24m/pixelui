import type { HTMLAttributes } from 'react'

export interface CubeLoaderProps extends HTMLAttributes<HTMLDivElement> {
	variation?: 'beat' | 'jumping' | 'spinning'
}