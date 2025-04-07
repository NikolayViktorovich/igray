import { FC } from 'react'

import { Currencies } from '@/shared/types/currency.interface'

interface IProps {
	currency: Currencies
	currentCurrency: Currencies
	onChangeCurrency: (currency: Currencies) => void
}

export const CurrencyButton: FC<IProps> = ({
	currency,
	currentCurrency,
	onChangeCurrency
}) => {
	return (
		<button
			type='button'
			id={currency}
			onClick={() => onChangeCurrency(currency)}
			className={`border-[#E2ECEC] hover:bg-primary_color hover:text-white border-transparent transition-all duration-300  block border rounded-xl w-[50px] h-[38px] ${
				currency === currentCurrency
					? 'bg-primary_color text-white border-transparent'
					: ''
			}`}
		>
			{currency}
		</button>
	)
}
