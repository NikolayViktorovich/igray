'use client'

import { Accordion } from '@szhsin/react-accordion'

import type { QuestionItem } from '@/shared/constants/questions'
import { cn } from '@/shared/utils/clsx'

import { QuestionsAccardionItem } from './QuestionsAccardionItem'

interface QuestionsAccardionListProps {
	className?: string
	items: QuestionItem[]
}

export const QuestionsAccardionList = (props: QuestionsAccardionListProps) => {
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
					<QuestionsAccardionItem
						key={item.title}
						title={item.title}
						content={item.content}
					/>
				))}
			</Accordion>
		</>
	)
}
