'use client'

import { Accordion } from '@szhsin/react-accordion'

import { cn } from '@/shared/utils/clsx'

import type { QuestionItem } from '../model/types'

import { QuestionsAccordionItem } from './QuestionsAccordionItem'

interface QuestionsAccordionListProps {
	className?: string
	items: QuestionItem[]
}

export const QuestionsAccordionList = (props: QuestionsAccordionListProps) => {
	const { items, className } = props

	if (!items?.length) {
		return <p>Нет вопросов</p>
	}

	return (
		<>
			<Accordion
				className={cn('w-full space-y-2.5', className)}
				transition
				transitionTimeout={200}
			>
				{items.map(item => (
					<QuestionsAccordionItem
						key={item.title}
						title={item.title}
						content={item.content}
					/>
				))}
			</Accordion>
		</>
	)
}
