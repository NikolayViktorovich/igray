import Link from 'next/link'

import { publicUrl } from '@/app/config/routes/page-routes/public'

export const ReviewsHeader = () => {
	return (
		<div className='px-[30px] md:px-[60px] md:pt-[60px] mb-7'>
			<h3 className='text-secondary_color font-medium mb-8'>Отзывы</h3>
			<div className='flex items-center gap-2 justify-between'>
				<h3 className='font-steppe font-extrabold text-3xl lg:text-5xl text-wrap min-w-[150px]'>
					<span className='text-primary_color'>
						Более 10 000 покупок,{' '}
					</span>
					<span className='text-secondary_color'>5 000 отзывов!</span>
				</h3>
				<Link
					className=' font-medium border-bg_color border rounded-[18px] py-3 px-5 flex-shrink-0 hidden md:block hover:bg-bg_hover_color transition-all duration-300 hover:text-white'
					href={publicUrl.customerReviews()}
				>
					Все отзывы
				</Link>
			</div>
		</div>
	)
}
