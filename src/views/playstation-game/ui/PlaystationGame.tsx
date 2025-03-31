import { publicUrl } from '@/app/config/routes/page-routes/public'

import { PlaystationSubscribe } from '@/modules/subscribe/playstation-subscribe'

import { FaqList } from '@/elements/faq-accordion'

import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Container } from '@/shared/ui/Container'

import { BannerPlaystationGame } from './BannerPlaystationGame'
import { BannerPlaystationGameTwo } from './BannerPlaystationGameTwo'
import { ProductDescriptionPlaystation } from './ProductDescriptionPlaystation'

export const PlaystationGame = () => {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'playstation game', href: '' }
	]

	return (
		<>
			<Container>
				<Breadcrumbs breadcrumbs={breadcrumbs} />

				<div className='flex flex-col  gap-2.5 xl_2:flex-row mb-16 xl_2:items-start'>
					<div className='lg:flex gap-4'>
						<BannerPlaystationGame />

						<BannerPlaystationGameTwo className='hidden lg:flex xl_2:hidden' />
					</div>

					<PlaystationSubscribe />

					<BannerPlaystationGameTwo className='flex lg:hidden xl_2:flex' />
				</div>

				<div className='flex flex-col lg:flex-row  lg:items-start gap-2.5'>
					<ProductDescriptionPlaystation className='lg:w-full' />
					<FaqList className='w-full lg:w-1/3 flex-shrink-0 xl_2:w-[380px]' />
				</div>
			</Container>
		</>
	)
}
