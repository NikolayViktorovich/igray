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
		<div className='rounded-[18px] flex justify-between items-center py-[8px] basis-[50%] bg-[linear-gradient(100.65deg,_#E4FAF3_0.34%,_rgba(228,250,243,0.29)_47.86%,_#E4FAF3_92.62%,_rgba(228,250,243,0.34)_138.07%)] px-[15px]'>
			{currencyIsLoading ? (
				<p className='text-gray-800'>{'Загрузка курса...'}</p>
			) : (
				<>
					<div className='flex flex-col justify-center'>
						<span className='text-[11px] font-medium block text-[#AFC5BE]'>
							Сумма с коммисией
						</span>
						<span className='text-gray-800'>{`${
							sum === null && currencyRate && currencyRate
								? 0
								: countTotalAmoutWithCommission(
										convertFromRub(sum, currency, {
											usdToRub: currencyRate,
											kztToRub: currencyRate
										}),
										commission,
										discount
									).toFixed(2)
						} ${'₽'}`}</span>
					</div>
					{currency !== 'RUB' && (
						<div className='flex flex-col justify-center'>
							<span className='text-[12px]  text-right font-medium block text-[#AFC5BE]'>
								Курс
							</span>
							{currencyRate && !currencyIsLoading && (
								<span className='text-[12px] font-medium block text-[#AFC5BE]'>
									{currencyRate} {'₽'}
								</span>
							)}
						</div>
					)}
				</>
			)}
		</div>
	)
}
