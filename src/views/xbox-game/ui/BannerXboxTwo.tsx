import Image from 'next/image'

import { cn } from '@/shared/utils/clsx'

interface BannerXboxTwoProps {
	className?: string
}

export const BannerXboxTwo = (props: BannerXboxTwoProps) => {
	const { className } = props

	return (
		<div
			className={cn(
				'flex xl_2:flex lg:min-h-[480px] lg:w-1/2 xl_2:w-[380px] lg:pl-5 lg:pb-12 relative overflow-hidden flex-col gap-2 px-4 py-5 md:py-8 md: rounded-xl_1  outline outline-1 outline-white bg-[url("/images/xbox/xbox-gift-bg-mobile.jpg")] lg:bg-[url("/images/xbox/xbox-gift-bg.jpg")] bg-cover bg-no-repeat bg-center',
				className
			)}
		>
			<div className='absolute w-40 xs:w-52 lg:w-[400px] -right-12 xs:-right-10 lg:right-10 xl_2:right-0 -top-0 xs:-top-5'>
				<Image
					className='w-full'
					width={480}
					height={328}
					src={'/images/xbox/game-image.png'}
					alt={'Игры и приложения для PC'}
				/>
			</div>

			<div className='max-w-48 sm:max-w-96 lg:mt-auto'>
				<p className='text-xl lg:text-2xl sm:text-2xl font-steppe text-white text-shadow'>
					Дарим Игру при покупке Любого товара в нашем магазине!
				</p>
			</div>
		</div>
	)
}
