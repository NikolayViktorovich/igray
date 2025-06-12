import { FC } from 'react'

import { convertFromRub } from '../lib/utils/convert-to-rub'
import { countTotalAmoutWithCommission } from '../lib/utils/count-total-amout-with-commission'
import type { Currencies } from '../model/types'

interface IProps {
	sum: number
	currency: Currencies
	currencyRate: number
	currencyIsLoading: boolean
	commission: number
	discount: number
}

export const TotalAmount: FC<IProps> = ({
	sum,
	currency,
	currencyIsLoading,
	currencyRate,
	commission,
	discount
}) => {
	return (
		<div className='rounded-[18px] flex items-center justify-between py-[8px] basis-[50%] bg-[linear-gradient(100.65deg,_#E4FAF3_0.34%,_rgba(228,250,243,0.29)_47.86%,_#E4FAF3_92.62%,_rgba(228,250,243,0.34)_138.07%)] px-[15px] flex-wrap'>
			{currencyIsLoading ? (
				<p className='text-gray-800'>{'Загрузка курса...'}</p>
			) : (
				<>
					<div className='flex flex-col justify-center min-w-[120px]'>
						<span className='text-[11px] font-medium block text-[#AFC5BE]'>
							Сумма с комиссией
						</span>
						<span className='text-gray-800'>
							{`${countTotalAmoutWithCommission(
								convertFromRub(sum, currency, {
									usdToRub: currencyRate,
									kztToRub: currencyRate
								}),
								commission,
								discount
							).toFixed(2)} ₽`}
						</span>
					</div>

					<div className='mt-[8px] md:mt-[-25px] lg:mt-[-25px] lg:ml-auto ml-auto'>
						<div
							className='bg-white rounded-full px-[10px] py-[2px] text-[10px] font-medium leading-[1.2] whitespace-nowrap'
							style={{ fontFamily: 'Onest' }}
						>
							3% КОМИССИЯ
						</div>
					</div>
				</>
			)}
		</div>
	)
}