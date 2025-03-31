'use client'

import { NewsList } from '@/elements/news/ui/NewsList'
import { OurProducts } from '@/elements/our-products'

import { Bonus } from './introduction/Bonus'
import { Sale } from './introduction/Sale'

export const Home = () => {
	return (
		<div className='mt-10'>
			<div className='flex-col lg:flex-row gap-3 md:gap-10 lg:gap-3 flex xl:gap-2.5'>
				<Sale />
				<Bonus />
			</div>

			<NewsList className='my-10 lg:my-20' />

			<OurProducts
				title='Наши продукты'
				supTitle='Возможности'
				className='my-10 lg:my-16'
			/>
		</div>
	)
}
