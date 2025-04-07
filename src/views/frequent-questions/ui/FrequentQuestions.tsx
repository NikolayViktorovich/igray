import { publicUrl } from '@/app/config/routes/page-routes/public'

import {
	QuestionsAccordionList,
	questions,
	questionsCategories
} from '@/elements/faq-accordion'
import { NewsList } from '@/elements/news/ui/NewsList'

import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Container } from '@/shared/ui/Container'
import { Heading } from '@/shared/ui/Heading'

export const FrequentQuestions = () => {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'Частые вопросы', href: '' }
	]

	return (
		<Container>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<Heading className='mb-5 lg:mb-6' level={1}>
				Частые вопросы
			</Heading>

			<div className='flex gap-2.5 mb-6 lg:mb-10 flex-nowrap overflow-x-auto'>
				<button className='py-2.5 px-4 hover:bg-primary_color hover:text-white rounded-xl border border-primary_opacity_color transition-all duration-200 shrink-0  font-medium'>
					ВСЕ
				</button>

				{questionsCategories.map(item => (
					<button
						key={item.title}
						className='py-2.5 px-4 hover:bg-primary_color hover:text-white rounded-xl border border-primary_opacity_color transition-all duration-200 shrink-0 font-medium'
					>
						{item.title.toUpperCase()}
					</button>
				))}
			</div>

			<QuestionsAccordionList items={questions} />

			<NewsList className='mt-14' />
		</Container>
	)
}
