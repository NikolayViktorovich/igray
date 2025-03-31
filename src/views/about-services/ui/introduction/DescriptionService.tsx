import { Badge } from '@/shared/ui/Badge'
import { cn } from '@/shared/utils/clsx'

interface DescriptionServiceProps {
	className?: string
}

export const DescriptionService = (props: DescriptionServiceProps) => {
	const { className } = props

	return (
		<div
			className={cn(
				"relative w-full overflow-hidden p-7 min-h-[765px] lg:min-h-[473px] sm:min-h-[670px] rounded-[40px] lg:rounded-xl_2 lg:pt-14 lg:pl-14 lg:pb-12 px-5 xs:px-10 py-7 bg-cover bg-no-repeat bg-[url('/images/about-services/banner-bg-mobile.jpg')] md:bg-[url('/images/about-services/banner-bg.jpg')]",
				className
			)}
		>
			<div
				className={
					'flex flex-col xl:h-full xl:justify-between items-start'
				}
			>
				<Badge className={'mb-6 lg:mb-11'}>о сервисе</Badge>

				<h1
					className={
						'mb-7 xl:mb-16 font-steppe  lg:max-w-[743px] font-extrabold text-white text-shadow leading-[1.1] text-xl_2 md:text-xl_3 xl:text-xl_3 xl:leading-[1.1]'
					}
				>
					ИгРай — Покупай удобно любые игры и подписки
				</h1>

				<p className='text-xl text-white lg:max-w-[622px]'>
					Надоело покупать игры и подписки по конским ценам? Магазин
					ИгРай готов предложить Вам помощь в покупке, с минимальной
					наценкой Мы поможем вам приобрести лицензионные игры
					и подписки, Пополнить кошелек!
				</p>
			</div>

			<div
				className={
					'absolute right-4 lg:-right-48 xl:-right-4 max-w-[320px] lg:max-w-[607px] sm:max-w-[400px]   h-auto bottom-[-90px] lg:-bottom-14'
				}
			>
				<img
					className='w-full h-full'
					alt='Подборка скидок Steam до 90%'
					src={'/images/about-services/banner-img.png'}
				/>
			</div>
		</div>
	)
}
