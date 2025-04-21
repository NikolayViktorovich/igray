import Image from 'next/image'

import { cn } from '@/shared/utils/clsx'

interface MobileServicesProps {
	className?: string
}

export const MobileServices = (props: MobileServicesProps) => {
	const { className } = props

	return (
		<div
			className={cn(
				"relative bg-[url('/images/home/mobile-services-mobile-bg.jpg')] lg:bg-[url('/images/home/mobile-services-bg.jpg')] rounded-xl_3 bg-cover bg-center min-h-size_2 px-5 xl_1:px-10 py-8 overflow-hidden",
				className
			)}
		>
			<h3
				className={
					'font-steppe font-medium text-xl md:text-xl_2 max-w-[171px] md:max-w-[300px] text-white leading-[1.1]'
				}
			>
				Мобильные сервисы и&nbsp;игры
			</h3>

			<div
				className={
					'absolute -right-12 xs:right-0 -top-10 max-w-[150px] md:max-w-[230px] -min-h-[134px] xl_1:max-w-[300px] xl_1:w-full xl_1:-right-11'
				}
			>
				<Image
					className='w-full h-full'
					width={178}
					height={134}
					src={'/images/home/mobile-services-img.png'}
					alt={'Мобильные сервисы и игры'}
				/>
			</div>
		</div>
	)
}