import { FC } from 'react'

import { symbols } from '@/shared/constants/symbols'

import type { Currencies } from '../model/types'

interface IProps {
	currency: Currencies
}

export const CommissionPanel: FC<IProps> = ({ currency }) => {
	const commissions = {
		RUB: [
			{
				commission: 22,
				price: 100
			},
			{
				commission: 20,
				price: 1000
			},
			{
				commission: 18,
				price: 3000
			}
		],
		KZT: [
			{
				commission: 22,
				price: 500
			},
			{
				commission: 20,
				price: 5000
			},
			{
				commission: 18,
				price: 15000
			}
		],
		USD: [
			{
				commission: 22,
				price: 5
			},
			{
				commission: 20,
				price: 10
			},
			{
				commission: 18,
				price: 30
			}
		]
	}

	return (
		<div className='mb-5'>
			<h5 className='text-gray_color text-xs font-medium mb-2'>
				Комиссия
			</h5>
			<div className='rounded-[18px] bg-bg_color p-[2px] flex'>
				<div className='basis-1/3 py-2 px-2 z-30'>
					<p className='text-primary_color'>
						{commissions[currency][0].commission}%
					</p>
					<span className='bg-white px-2 rounded-xl text-sm font-medium'>
						{commissions[currency][0].price} {symbols[currency]}
					</span>
				</div>
				<div className='flex flex-1 bg-[#72F2C1] rounded-[18px]'>
					<div className='basis-1/2 py-2 px-2 z-20'>
						<p className='text-primary_color'>
							{commissions[currency][1].commission}%
						</p>
						<span className='bg-white px-2 rounded-xl text-sm font-medium'>
							{commissions[currency][1].price} {symbols[currency]}
						</span>
					</div>
					<div className='basis-1/2 py-2 px-2 bg-[#93FFD4] rounded-[18px]  z-10'>
						<p className='text-primary_color'>
							{commissions[currency][2].commission}%
						</p>

						<span className='bg-white px-2 rounded-xl text-sm font-medium'>
							{commissions[currency][2].price} {symbols[currency]}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
