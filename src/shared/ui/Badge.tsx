import { HTMLAttributes } from 'react'

import { cn } from '@/shared/utils/clsx'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	className?: string
	children: React.ReactNode
}

export const Badge = (props: BadgeProps) => {
	const { className, children, ...otherProps } = props

	return (
		<span
			className={cn(
				'inline-flex items-center justify-center text-xs font-medium rounded-md bg-white uppercase px-2 h-4',
				className
			)}
			{...otherProps}
		>
			{children}
		</span>
	)
}
