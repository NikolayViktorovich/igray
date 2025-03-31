'use client'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/shared/utils/clsx'

interface VideoReviewProps {
	className?: string
	userName: string
	avatar?: string
	date: string
	text?: string
}

export const VideoReview = (props: VideoReviewProps) => {
	const { className, avatar, date, userName } = props

	return (
		<Link
			href={'http://www.youtube.com/@%D0%98%D0%B3%D1%80%D0%B0%D0%B924'}
			className={cn(
				"block px-5 lg:px-10 pt-5 pb-8 bg-[url('/images/сustomer-reviews/review-alexey-makarenko.jpg')] md:bg-[url('/images/сustomer-reviews/review-alexey-makarenko-desktop.jpg')] bg-no-repeat bg-cover bg-center relative rounded-xl_3 lg:rounded-[50px] overflow-hidden",
				className
			)}
		>
			<div className='flex gap-4 items-center sm:w-[50%] mb-10 lg:mb-14'>
				{avatar && (
					<Image
						width={36}
						height={36}
						alt='logo'
						src={avatar}
						className='rounded-xl w-11 h-11'
					/>
				)}

				<div>
					<span className='text-gray_color text-xl_6 block'>
						{date}
					</span>
					<span className='font-medium block text-white'>
						{userName}
					</span>
				</div>
			</div>

			<p className=' text-white text-xl md:text-xl_2 leading-[1.1] tracking-tight text-left underline-from-font decoration-skip-ink-none font-steppe font-normal'>
				Смотреть <br />
				видео обзор
				<br />
				от MakarenkOFF
			</p>

			<div className='absolute right-5 bottom-5  w-20 h-20'>
				<Image
					alt='Смотреть видео'
					width={80}
					height={80}
					className='w-full h-full bottom-0'
					src='/images/icons/play-button.svg'
				/>
			</div>
		</Link>
	)
}
