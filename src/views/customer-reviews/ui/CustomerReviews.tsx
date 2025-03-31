import { publicUrl } from '@/app/config/routes/page-routes/public'

import { NewsList } from '@/elements/news/ui/NewsList'

import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Container } from '@/shared/ui/Container'
import { Heading } from '@/shared/ui/Heading'

import { Reviews } from './Reviews/Reviews'

export const CustomerReviews = () => {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'отзывы', href: '' }
	]

	return (
		<Container>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<Heading className='mb-5 lg:mb-6' level={1}>
				Отзывы клиентов
			</Heading>

			<Reviews />

			<NewsList className='mt-14' />
		</Container>
	)
}
