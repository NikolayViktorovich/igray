import { cn } from '@/shared/utils/clsx'

import { Heading } from '@/shared/ui/Heading'

interface OurProductionsHeaderProps {
	className?: string
	title: string
	supTitle: string
}

export const OurProductionsHeader = (props: OurProductionsHeaderProps) => {
	const { className, title, supTitle } = props

	return (
		<div className={cn('px-2 mb-6', className)}>
			<p
				className={
					'mb-6 lg:mb-8 text-secondary_color text-sm lg:text-base font-medium'
				}
			>
				{supTitle}
			</p>

			<Heading level={1}>{title}</Heading>
		</div>
	)
}
