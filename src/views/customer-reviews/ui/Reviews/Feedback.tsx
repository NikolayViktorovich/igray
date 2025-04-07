import Image from 'next/image'

import { cn } from '@/shared/utils/clsx'

interface FeedbackProps {
	userName: string
	avatar?: string
	date: string
	text: string
	className?: string
}

export const Feedback = (props: FeedbackProps) => {
	const { date, text, userName, avatar, className } = props

	return (
		<div
			className={cn(
				'py-7 px-5 lg:px-10 rounded-xl_3 cursor-pointer bg-white',
				className
			)}
		>
			<div className='flex items-center w-full mb-6 lg:mb-14'>
				<div className='flex gap-4 items-center sm:w-[50%]'>
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
						<span className='text-gray_color text-xl_6 block mb-0.5'>
							{date}
						</span>
						<span className='font-medium block lg:text-xl'>
							{userName}
						</span>
					</div>
				</div>
				<div className='flex ml-auto'>
					<Image
						alt='star'
						src='/images/star.png'
						width={16}
						height={16}
						className='w-4 h-4 lg:w-6 lg:h-6'
					/>

					<Image
						alt='star'
						src='/images/star.png'
						width={16}
						height={16}
						className='w-4 h-4 lg:w-6 lg:h-6'
					/>

					<Image
						alt='star'
						src='/images/star.png'
						width={16}
						height={16}
						className='w-4 h-4 lg:w-6 lg:h-6'
					/>

					<Image
						alt='star'
						src='/images/star.png'
						width={16}
						height={16}
						className='w-4 h-4 lg:w-6 lg:h-6'
					/>

					<Image
						alt='star'
						src='/images/star.png'
						width={16}
						height={16}
						className='w-4 h-4 lg:w-6 lg:h-6'
					/>
				</div>
			</div>

			<p className='font-steppe text-xl md:text-3xl font-normal leading-[1.2] max-w-[465px] w-full md:max-w-[460px]'>
				{text}
			</p>
		</div>
	)
}
