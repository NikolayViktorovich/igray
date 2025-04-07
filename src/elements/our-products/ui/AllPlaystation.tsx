import Image from 'next/image'

import { cn } from '@/shared/utils/clsx'

interface AllPlaystationProps {
	className?: string
}

export const AllPlaystation = (props: AllPlaystationProps) => {
	const { className } = props

	return (
		<div
			className={cn(
				"relative max-w-[50%] lg:max-w-full w-full lg:w-full min-h-[170px] flex flex-col justify-end rounded-xl_3 bg-[url('/images/home/play-station-mobile-bg.jpg')] lg:bg-[url('/images/home/play-station-bg.jpg')] bg-cover bg-center px-2 xs:px-5 xl_1:px-10 pb-4 overflow-hidden lg:overflow-visible",
				className
			)}
		>
			<div
				className={
					'absolute left-[32px] lg:left-auto lg:right-[20px] md:left-auto md:right-10 top-[-12px] lg:top-[-44px] md:top-5 max-w-[123px] lg:max-w-[250px] w-full'
				}
			>
				<Image
					className='w-full h-full'
					width={365}
					height={265}
					src={'/images/home/play-station-img.png'}
					alt={'Все для PlayStation'}
				/>
			</div>

			<h3
				className={
					'font-steppe justify-end font-medium text-xl md:text-xl_2 max-w-[171px] text-white leading-[1.1]'
				}
			>
				Все для PlayStation
			</h3>
		</div>
	)
}