'use client'

import { AccordionItem } from '@szhsin/react-accordion'
import Image from 'next/image'

import { cn } from '@/shared/utils/clsx'

import styles from './QuestionsAccordion.module.css'

interface QuestionsAccordionItemProps {
	title: string
	content: string
}

export const QuestionsAccordionItem = (props: QuestionsAccordionItemProps) => {
	const { title, content } = props

	return (
		<AccordionItem
			className={'w-full rounded-2xl overflow-hidden relative group'}
			header={({ state: { isEnter } }) => (
				<div
					className={cn(
						'flex bg-white justify-between text-sm sm:text-lg text-left px-5 pr-14 font-medium w-full  py-4 lg:py-3.5 transition-all duration-200 pointer-events-none group-hover:text-secondary_color'
					)}
				>
					<span
						className={cn('hover:text-secondary_color', {
							'text-secondary_color': isEnter
						})}
					>
						{title}
					</span>

					<div
						className={cn(styles.arrow_wrapper, {
							'bottom-2': isEnter
						})}
					>
						<Image
							className={cn('rotate-90', {
								'-rotate-90': isEnter
							})}
							width={20}
							height={20}
							src='/images/icons/arrow-dark-right.svg'
							alt=''
						/>
					</div>
				</div>
			)}
			buttonProps={{
				className: () => `w-full`
			}}
			contentProps={{
				className: 'duration-100 ease-out'
			}}
		>
			<div className='text-sm sm:text-lg px-2.5 border-transparent bg-white space-y-1 pr-14  pl-5 pb-5'>
				{content}
			</div>
		</AccordionItem>
	)
}
