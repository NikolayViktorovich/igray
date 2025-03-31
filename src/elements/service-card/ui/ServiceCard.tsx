import Image from 'next/image'

import { Heading } from '@/shared/ui/Heading'

interface ServiceCardProps {
	icon: string
	title: string
	description: string
}

export const ServiceCard = (props: ServiceCardProps) => {
	const { icon, title, description } = props

	return (
		<div className='flex flex-col gap-2 bg-white rounded-xl_4 px-8 lg:pl-10 py-6 lg:py-10'>
			<Image
				className='mb-5 lg:mb-9'
				width={74}
				height={74}
				src={icon}
				alt={title}
			/>

			<Heading className='mb-4' level={3} size='sm'>
				{title}
			</Heading>

			<p className='text-sm text-gray_color_primary mt-auto'>
				{description}
			</p>
		</div>
	)
}
