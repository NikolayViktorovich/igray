import Image from 'next/image'

import { cn } from '@/shared/utils/clsx'

interface AllXBoxProps {
	className?: string
}

export const AllXBox = (props: AllXBoxProps) => {
	const { className } = props

	return (
		<div
			className={cn(
				"relative w-full min-h-[170px] flex flex-col justify-end rounded-xl_3 bg-[url('/images/home/xbox-mobile-bg.jpg')] lg:bg-[url('/images/home/xbox-bg.jpg')] bg-cover bg-center px-2 xs:px-5 xl_1:px-10 pb-4 overflow-hidden",
				className
			)}
		>
			<div
				className={
					'absolute left-[32px] lg:left-auto lg:right-[20px] md:left-auto md:right-10 top-[-18px] lg:top-[-20px] md:top-5 max-w-[123px] lg:max-w-[250px] w-full'
				}
			>
				<Image
					className='w-full h-full'
					width={365}
					height={265}
					src={'/images/home/xbox-img.png'}
					alt={'Все для Xbox'}
				/>
			</div>

			<h3
				className={
					'font-steppe justify-end font-medium text-xl md:text-xl_2 max-w-[171px] text-white leading-[1.1]'
				}
			>
				Все для Xbox
			</h3>
		</div>
	)
}
