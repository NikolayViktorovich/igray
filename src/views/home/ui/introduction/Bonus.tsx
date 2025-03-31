import Image from 'next/image'

import { Badge } from '@/shared/ui/Badge'

export const Bonus = () => {
	return (
		<div
			className={
				"relative w-full overflow-hidden md:overflow-visible xl:overflow-visible p-7 min-h-[168px] xl:w-[490px] md:min-h-[270px] rounded-[40px] xl:rounded-[60px] xl:pt-14 xl:pl-14 xl:pb-12 pr-4 bg-cover bg-no-repeat bg-[url('/images/home/bonus-mobile-bg.jpg')] md:bg-[url('/images/home/bonus-bg.jpg')]"
			}
		>
			<div
				className={
					'flex flex-col xl:h-full xl:justify-between items-start max-w-[217px] md:max-w-[310px]'
				}
			>
				<Badge className={'mb-6 xl:mb-0'}>bonus</Badge>
				<h2
					className={
						'font-steppe  xl:max-w-[500px] font-extrabold leading-[1.1] text-white text-xl_1 md:text-xl_4'
					}
				>
					Cashback&nbsp;3% с&nbsp;каждой твоей покупки
				</h2>
			</div>

			<div
				className={
					'absolute  max-w-[70px] md:max-w-[132px]  md:w-full h-auto right-10 top-8 md:bottom-auto md:right-14 xl:right-0 2xl:right-14 md:top-[-17px]'
				}
			>
				<Image
					className='w-full h-full'
					alt='Cashback&nbsp;3% с&nbsp;каждой твоей покупки'
					width={132}
					height={228}
					src={'/images/home/bouns-img.png'}
				/>
			</div>
		</div>
	)
}
