import { publicUrl } from '@/app/config/routes/page-routes/public'

import { XboxSubscribe } from '@/modules/subscribe/xbox-subscribe'

import { FaqList } from '@/elements/faq-accordion'

import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Container } from '@/shared/ui/Container'

import { BannerXbox } from './BannerXbox'
import { BannerXboxTwo } from './BannerXboxTwo'
import { ProductDescriptionXbox } from './ProductDescriptionXbox'

export const XboxGame = () => {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'xbox game', href: '' }
	]

	return (
		<>
			<Container>
				<Breadcrumbs breadcrumbs={breadcrumbs} />

				<div className='flex flex-col gap-2.5 xl_2:flex-row mb-16 xl_2:items-start'>
					<div className='lg:flex gap-4'>
						<BannerXbox />

						<BannerXboxTwo className='hidden lg:flex xl_2:hidden' />
					</div>

					<XboxSubscribe />

					<BannerXboxTwo className='flex lg:hidden xl_2:flex' />
				</div>

				<div className='flex flex-col lg:flex-row  lg:items-start gap-2.5'>
					<ProductDescriptionXbox className='lg:w-full' />
					<FaqList className='w-full lg:w-1/3 flex-shrink-0 xl_2:w-[380px]' />
				</div>
			</Container>
		</>
	)
}
