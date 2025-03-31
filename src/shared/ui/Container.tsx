import { cva } from 'class-variance-authority'

import { cn } from '@/shared/utils/clsx'

interface ContainerProps {
	size?: 'sm' | 'xl'
	className?: string
	children: React.ReactNode
}

const containerVariants = cva('mx-auto', {
	variants: {
		size: {
			sm: 'max-w-[1310px]',
			xl: 'max-w-[1450px] px-2.5'
		}
	},
	defaultVariants: {
		size: 'sm'
	}
})

export const Container = (props: ContainerProps) => {
	const { className, children, size } = props

	return (
		<div className={cn(containerVariants({ size }), className)}>
			{children}
		</div>
	)
}
