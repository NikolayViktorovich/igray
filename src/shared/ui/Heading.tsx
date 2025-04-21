import { cva } from 'class-variance-authority'

interface HeadingProps {
	level: 1 | 2 | 3
	size?: 'sm' | 'md' | 'lg' | 'lg_2'
	color?: 'default' | 'primary' | 'secondary'
	className?: string
	children: React.ReactNode
}

const headingVariants = cva('font-steppe leading-[1.1]', {
	variants: {
		size: {
			lg: 'text-xl_2 lg:text-xl_3 font-extrabold ',
			lg_2: 'text-xl_1 lg:text-4xl font-bold',
			md: 'text-xl_5 font-extrabold',
			sm: 'text-xl_1 font-extrabold'
		}
	},
	defaultVariants: {
		size: 'lg'
	}
})

export const Heading = (props: HeadingProps) => {
	const { level, className, children, size } = props

	const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements

	return (
		<HeaderTag className={`${headingVariants({ size })} ${className}`}>
			{children}
		</HeaderTag>
	)
}
