import Image from 'next/image'
import { FC } from 'react'

interface IProps {
	userName: string
	date: string
	text: string
}

export const ReviewsSlide: FC<IProps> = ({ date, text, userName }) => {
	return (
		<div className='p-[20px] rounded-[50px] cursor-pointer'>
			<div className='flex items-center w-full mb-[25px]'>
				<div className='flex gap-2 sm:w-[50%] '>
					<Image
						width={36}
						height={36}
						alt='logo'
						src={'/images/user-logo-mini.png'}
						className='object-contain rounded-full'
					/>

					<div>
						<span className='text-[#AFC5BE] block text-[10px] md:text-[12px] leading-[20px]'>
							{date}
						</span>
						<span className='font-medium block md:text-[20px] text-gray-800'>
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
			<p className='font-steppe md:text-3xl font-normal leading-[23px] max-w-[465px] w-full md:max-w-[460] '>
				{text}
			</p>
		</div>
	)
}
