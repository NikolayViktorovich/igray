'use client'

import { FC } from 'react'

import { useServiceStore } from '@/shared/store/service.store'

import { PlatformItem } from './PlatformItem'

interface IProps {
	title: string
	options: string[]
	className?: string
	hrefs: string[]
}

export const PlatformsList: FC<IProps> = ({
	title,
	options,
	className,
	hrefs
}) => {
	const { setIsModalVisible } = useServiceStore()

	const handleClick = (href: string) => {
		setIsModalVisible(href === '#' && true)
	}

	return (
		<div className={`${className}`}>
			<h5
				className={`font-extrabold	text-secondary_color mb-[22px] text-[22px]`}
			>
				{title}
			</h5>
			<ul className='px-[2px] space-y-3'>
				{options.map((option, idx) => (
					<PlatformItem
						onClick={handleClick}
						href={hrefs[idx]}
						name={option}
						key={idx}
					/>
				))}
			</ul>
		</div>
	)
}
