import { Badge } from '@/shared/ui/Badge'

export const Sale = () => {
	return (
		<div
			className={
				"relative w-full overflow-hidden md:overflow-visible xl:overflow-visible p-7 min-h-[370px] xl:w-[930px] md:min-h-[270px] rounded-[40px] xl:rounded-[60px] xl:pt-14 xl:pl-14 xl:pb-12 pr-4 bg-cover bg-no-repeat bg-[url('/images/home/bonus-mobile-bg.jpg')] md:bg-[url('/images/home/bonus-bg.jpg')]"
			}
		>
			<div
				className={
					'flex flex-col xl:h-full xl:justify-between items-start'
				}
			>
				<Badge className={'mb-6 xl:mb-0 '}>sale</Badge>
				<h2
					className={
						'font-steppe max-w-[310px] lg:max-w-[300px]  xl:max-w-[500px] font-extrabold text-white leading-[1.1] text-xl_2 lg:text-2xl xl:text-xl_3 xl:leading-[1.1]'
					}
				>
					Подборка скидок Steam до&nbsp;90%
				</h2>
			</div>

			<div
				className={
					'absolute right-0 max-w-[314px] md:max-w-[385px] lg:max-w-[280px] xl:max-w-[375px] h-auto bottom-[-70px] md:bottom-0 xl:bottom-0 md:right-0 xl:right-0 2xl:right-14 md:top-auto'
				}
			>
				<img
					className='w-full h-full'
					alt='Подборка скидок Steam до&nbsp;90%'
					src={'/images/home/discounnts-img.png'}
				/>
			</div>
		</div>
	)
}