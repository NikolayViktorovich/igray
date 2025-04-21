'use client'

import { useState } from 'react'

import { cn } from '@/shared/utils/clsx'

import { questionsSteam } from '../../model/constants'

import { FaqItem } from './FaqItem'

interface FaqListProps {
	className?: string
}

export const FaqList = (props: FaqListProps) => {
	const { className } = props

	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const toggleIndex = (index: number) => {
		setActiveIndex(prevIndex => (prevIndex === index ? null : index))
	}

	return (
		<div
			className={cn(
				'p-[30px] md:px-[40px] md:py-[50px] border-[#1F3238] border border-opacity-10 rounded-[40px] lg:rounded-[60px] mb-5',
				className
			)}
		>
			<h6 className='font-steppe text-primary_color font-extrabold text-[22px] leading-[22px] mb-[22px] tracking-[-0.04em]'>
				Частые вопросы
			</h6>
			<ul className=''>
				<FaqItem
					paddingBottom='pb-7'
					title='Как Скоро происходит пополнение?'
					content='В течении 2х минут с Момента Оплаты'
					isActive={activeIndex === 100}
					onClick={() => toggleIndex(100)}
				/>

				{questionsSteam.map((faq, index) => (
					<FaqItem
						key={index}
						title={faq.title}
						content={faq.content}
						isActive={activeIndex === index}
						onClick={() => toggleIndex(index)}
					/>
				))}
			</ul>
		</div>
	)
}
