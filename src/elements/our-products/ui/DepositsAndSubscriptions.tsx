import Image from 'next/image'

import { cn } from '@/shared/utils/clsx'

interface DepositsAndSubscriptionsProps {
	className?: string
}

export const DepositsAndSubscriptions = (
	props: DepositsAndSubscriptionsProps
) => {
	const { className } = props

	return (
		<div
			className={cn(
				"relative bg-[url('/images/home/replenishment-mobile-bg.jpg')]  lg:bg-[url('/images/home/replenishment-bg.jpg')] rounded-xl_3 bg-cover bg-center min-h-size_2 px-5 xl_1:px-10 py-8 overflow-hidden",
				className
			)}
		>
			<h3
				className={
					'font-steppe font-medium text-xl md:text-xl_2 max-w-[171px] xl_1:max-w-[348px] md:max-w-[300px] text-white leading-[1.1]'
				}
			>
				Пополнение и&nbsp;подписки Nintendo
			</h3>

			<div
				className={
					'absolute -right-1 xs:right-5 top-4 xs:top-0 max-w-[150px] xs:max-w-[178px] min-h-[134px]'
				}
			>
				<Image
					width={178}
					height={134}
					src={'/images/home/replenishment-img.png'}
					alt={'Пополнение и подписки Nintendo'}
				/>
			</div>
		</div>
	)
}
