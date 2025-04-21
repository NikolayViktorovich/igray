'use client'

import ReactPaginate from 'react-paginate'

import { Feedback } from './Feedback'
import styles from './Pagination.module.css'
import { VideoReview } from './VideoReview'

export const Reviews = () => {
	return (
		<div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-2.5'>
				<Feedback
					text='Самый удобный сервис
            для пополнения Стима🔥Купила уже 9 игр! '
					userName='MartinaStrike'
					date='Сен 13, 2023'
					avatar='/images/сustomer-reviews/martina.jpg'
				/>

				<Feedback
					text='Отличный продавец! Все работает, все понравилось!!! Спасибо'
					userName='Александр'
					date='Сен 13, 2023'
					avatar='/images/сustomer-reviews/alexandr.jpg'
				/>

				<Feedback
					text='Хороший магазин рекомендую. Делают все за минут 20👍'
					userName='AlexandraNovak'
					date='Сен 13, 2023'
					avatar='/images/сustomer-reviews/alexandra.jpg'
				/>

				<VideoReview
					userName='Алексей Макаренков'
					date='Сен 13, 2023'
					avatar='/images/сustomer-reviews/makarenko.jpg'
				/>
			</div>

			<button
				type='button'
				className='py-4 px-2 border border-secondary_color hover:border-bg_hover_color hover:text-white hover:bg-bg_hover_color rounded-2xl w-full transition-all duration-200 mt-8'
			>
				Загрузить больше
			</button>

			<div className='mt-8'>
				<ReactPaginate
					nextLabel={
						<img
							className='rotate-180'
							src='/images/icons/arrow-dark.svg'
						/>
					}
					previousLabel={<img src='/images/icons/arrow-dark.svg' />}
					onPageChange={() => console.log('Ок')}
					pageRangeDisplayed={3}
					marginPagesDisplayed={1}
					pageCount={14}
					pageClassName='flex items-center'
					pageLinkClassName='block bg-white py-1.5 px-3.5 rounded-xl text-center   hover:bg-primary_color hover:text-white transition-all duration-200 text-sm font-medium'
					previousClassName=''
					previousLinkClassName='page-link bg-bg'
					nextClassName='page-item'
					nextLinkClassName='page-link'
					// breakClassName='page-item'
					// breakLinkClassName=''
					containerClassName='flex gap-2 items-center justify-center'
					activeLinkClassName={styles.active}
					renderOnZeroPageCount={null}
				/>
			</div>
		</div>
	)
}
