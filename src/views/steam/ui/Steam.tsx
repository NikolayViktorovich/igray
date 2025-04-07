import { publicUrl } from '@/app/config/routes/page-routes/public'

import { SteamReplenishment } from '@/modules/steam-replenishment'

import { FaqList } from '@/elements/faq-accordion'
import { NewsList } from '@/elements/news'

import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Container } from '@/shared/ui/Container'

import { SpeedPaymentBanner } from './SpeedPaymentBanner'
import { SteamInfo } from './SteamInfo'

export const Steam = () => {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'pc', href: publicUrl.pc() },
		{ label: 'steam', href: '' }
	]

	return (
		<>
			<Container>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
			</Container>

			<div className='block 2xl:flex gap-[10px] justify-between mb-[40px] md:mb-[130px]'>
				<SteamInfo />
				<SteamReplenishment />

				<section>
					<SpeedPaymentBanner className='hidden 2xl:block' />
					<FaqList />

					<NewsList className='2xl:hidden' />
				</section>
			</div>
		</>
	)
}
