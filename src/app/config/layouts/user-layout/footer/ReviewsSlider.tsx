'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { ReactSVG } from 'react-svg'
import { Swiper as SwiperType } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ReviewsSlide } from './ReviewsSlide'

export const ReviewsSlider = () => {
	const swiperRef = useRef<SwiperType>()

	return (
		<div className='relative py-4 bg-gradient-to-r from-[#E4FAF3] via-[rgba(228,250,243,0.29)] to-[#E4FAF3] rounded-[34px] p-[2px] sm:p-[5px] lg:p-[10px] xl:p-[20px] w-full lg:w-[50%] lg:h-[280px] lg:rounded-[50px]'>
			<div>
				<Swiper
					onBeforeInit={swiper => {
						swiperRef.current = swiper
					}}
					spaceBetween={50}
					slidesPerView={1}
				>
					<SwiperSlide>
						<ReviewsSlide
							text='Самый удобный сервис
            для пополнения Стима🔥Купила уже 9 игр! '
							userName='MartinaStrike'
							date='Сен 13, 2023'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ReviewsSlide
							text='Самый удобный сервис
            для пополнения Стима🔥Купила уже 9 игр! '
							userName='MartinaStrike'
							date='Сен 13, 2023'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ReviewsSlide
							text='Самый удобный сервис
            для пополнения Стима🔥Купила уже 9 игр! '
							userName='MartinaStrike'
							date='Сен 13, 2023'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ReviewsSlide
							text='Самый удобный сервис
            для пополнения Стима🔥Купила уже 9 игр! '
							userName='MartinaStrike'
							date='Сен 13, 2023'
						/>
					</SwiperSlide>
				</Swiper>

				<div className='mt-4 flex  items-center justify-between gap-[10px] px-4 lg:mx-[0px] lg:absolute lg:bottom-3 lg:right-2 z-50'>
					<div className='z-20 flex gap-[10px]'>
						<button
							className='px-[15px] bg-white rounded-[18px] hover:border-secondary_color border border-transparent duration-300'
							onClick={() => swiperRef.current?.slidePrev()}
						>
							<ReactSVG src='/images/icons/arrow-right.svg' />
						</button>
						<button
							className='p-[15px] bg-white rounded-[18px] border border-transparent hover:border-secondary_color duration-300'
							onClick={() => swiperRef.current?.slideNext()}
						>
							<ReactSVG src='/images/icons/arrow-left.svg' />
						</button>
					</div>

					<Link
						className='border-bg_color border rounded-[14px] py-3 px-5 text-[14px] block md:hidden font-medium hover:bg-secondary_color transition-all duration-300 hover:text-white'
						href='/reviews'
					>
						Все отзывы
					</Link>
				</div>
			</div>
		</div>
	)
}
