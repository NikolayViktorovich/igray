import { publicUrl } from '@/app/config/routes/page-routes/public'

import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Container } from '@/shared/ui/Container'
import { Heading } from '@/shared/ui/Heading'
import { ProductMenuAccardion } from '@/shared/ui/accardions/product-menu-accardion/ProductMenuAccardion'

export const Pc = () => {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'pc', href: '' }
	]

	return (
		<Container>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<Heading level={1} className='mb-5'>
				Игры и&nbsp;приложения для&nbsp;PC
			</Heading>

			<ProductMenuAccardion />
		</Container>
	)
}
