import { cva } from 'class-variance-authority'

import { cn } from '@/shared/utils/clsx'

interface BoxProps {
	variant?: 'white' | 'transparent'
	className?: string
	children?: React.ReactNode
}

const containerVariants = cva(
	'rounded-xl_1 lg:rounded-xl_2 px-2.5 pt-2.5 pb-8 md:p-10 lg:p-14',
	{
		variants: {
			variant: {
				white: 'bg-white',
				transparent: ''
			}
		},
		defaultVariants: {
			variant: 'white'
		}
	}
)

export const Box = (props: BoxProps) => {
	const { className, children, variant } = props

	return (
		<div className={cn(containerVariants({ variant }), className)}>
			{children}
			<span className='rounded-xl_1 p-14'></span>
		</div>
	)
}
