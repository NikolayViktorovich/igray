import { FC } from 'react'

import { AboutService } from './AboutServices'
import { ReviewsHeader } from './ReviewsHeader'
import { ReviewsSlider } from './ReviewsSlider'

interface IProps {
	className?: string
}

export const Reviews: FC<IProps> = ({ className }) => {
	return (
		<section
			className={`bg-white rounded-[40px] xl:rounded-[100px] pt-[25px] pb-5 md:pt-[15px] px-[8px] mb-[60px] ${className}`}
		>
			<ReviewsHeader />

			<div className='flex flex-col lg:flex-row gap-[10px] items-center p-[2px] md:p-[50px]'>
				<ReviewsSlider />
				<AboutService />
			</div>
		</section>
	)
}
