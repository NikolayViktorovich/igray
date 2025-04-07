import Image from 'next/image'

import { cn } from '@/shared/utils/clsx'

interface BannerXboxProps {
	className?: string
}

export const BannerXbox = (props: BannerXboxProps) => {
	const { className } = props

	return (
		<div
			className={cn(
				'flex flex-col lg:min-h-[480px] lg:w-1/2 xl_2:w-80 items-center lg:justify-center gap-2 px-4 py-5 md:py-8 rounded-xl_1  outline outline-1 outline-white -outline-offset-8 bg-[url("/images/xbox/xbox-bg-mobile.jpg")] lg:bg-[url("/images/xbox/xbox-bg.jpg")]  bg-cover bg-no-repeat bg-center',
				className
			)}
		>
			<Image
				className='md:w-36'
				src='/images/xbox/xbox-logo.svg'
				width={149}
				height={133}
				alt='Логотип Xbox'
			/>

			<p className='text-xl_4 text-white text-uppercase font-steppe font-normal md:text-xl_7'>
				GAME PASS
			</p>

			<span
				className={
					'ne-block p-2 text-sm md:text-xl font-steppe text-text_green font-bold bg-white rounded-lg'
				}
			>
				ULTIMATE
			</span>
		</div>
	)
}
