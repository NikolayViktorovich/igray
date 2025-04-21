import { publicUrl } from '@/app/config/routes/page-routes/public'

import { ContactsPanel } from '@/elements/contacts-panel'
import { NewsList } from '@/elements/news'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Container } from '@/shared/ui/Container'
import { Heading } from '@/shared/ui/Heading'

export const Contacts = () => {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'Контакты', href: '' }
	]

	return (
		<Container>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<Heading className='mb-5 lg:mb-6' level={1}>
				Наши контакты
			</Heading>

			<ContactsPanel className='mb-24' />

			<NewsList />
		</Container>
	)
}
